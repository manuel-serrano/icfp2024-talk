// -*- Mode: typescript; typescript-indent-level: 3; indent-tabs-mode: nil -*-
import * as hh from "@hop/hiphop";
import "./set.mjs";

// traffic 1
const Traffic1 = hiphop module() {
   inout light = new Set() combine (x,y) => x.union(y);
   loop {
      emit light(new Set(["red"]));
      yield;
   }
}

export const mach = new hh.ReactiveMachine(Traffic1);

mach.addEventListener("light", function(light) {
   const el = document.getElementById(this.trafficId);
   light.nowval.forEach(l => el.setAttribute("data-" + l, "on"));
});

const Traffic2 = hiphop module() {
   inout light = new Set() combine (x,y) => x.union(y);
   
   sustain light(new Set(["red"]));
}

// traffic3
const Traffic3 = hiphop module() {
   inout light = new Set() combine (x,y) => x.union(y);

   done: {
      fork {
         sustain light(new Set(["red"]));
      } par {
         yield;
         yield;
         break done;
      }
   }
}

export const mach3 = new hh.ReactiveMachine(Traffic3);

function lightHandler(light) {
   const el = document.getElementById(this.trafficId);
   light.nowval.forEach(l => el.setAttribute("data-" + l, l));
}

mach3.addEventListener("light", lightHandler);

// traffic4
const Traffic4 = hiphop module() {
   inout light = new Set() combine (x,y) => x.union(y);

   done: {
      fork {
         sustain light(new Set(["red"]));
      } par {
         yield;
         yield;
         break done;
      }
   }
   sustain light(new Set(["green"]));
}

export const mach4 = new hh.ReactiveMachine(Traffic4);
mach4.addEventListener("light", lightHandler);

// traffic5
const Traffic5 = hiphop module() {
   inout light = new Set() combine (x,y) => x.union(y);
   signal s = false combine (x,y) => x || y;
   done: {
      fork {
         suspend (s.nowval) {
            sustain light(new Set(["red"]));
         }
      } par {
         yield;
         yield;
         emit s(true);
         break done;
      }
   }
   sustain light(new Set(["green"]));
}

export const mach5 = new hh.ReactiveMachine(Traffic5);
mach5.addEventListener("light", lightHandler);

