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
   light.nowval.forEach(l => el.setAttribute("data-" + l, l));
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

// phase
const phase = (color, light, count) => hiphop {
   signal s = false combine (x,y) => x || y;
   done: {
      fork {
         suspend (s.nowval) {
            sustain ${light}(new Set([color]));}
      } par {
         ${Array.from({length: count}, _ => hiphop yield)}
         emit s(true);
         break done;
      }
   }
}

const Traffic6 = hiphop module () {
   inout light = new Set() combine (x,y) => x.union(y);
   loop {
      ${phase("red", "light", 2)}
      ${phase("green", "light", 1)}
      ${phase("orange", "light", 1)}
   }
}

export const mach6 = new hh.ReactiveMachine(Traffic6);
mach6.addEventListener("light", lightHandler);

const Traffic7 = hiphop module() {
   inout ns = new Set() combine (x,y) => x.union(y);
   inout ew = new Set() combine (x,y) => x.union(y);
   fork {
      loop {
         ${phase("green", "ns", 3)}
         ${phase("orange", "ns", 1)}
         ${phase("red", "ns", 4)}
      }
   } par {
      loop {
         ${phase("red", "ew", 4)}
         ${phase("green", "ew", 3)}
         ${phase("orange", "ew", 1)}
      }
   }
}

function lightHandler2(light) {
   const name = light.signame;
   const el = document.getElementById(this.trafficId + "-" + name);
   light.nowval.forEach(l => el.setAttribute("data-" + l, l));
}

export const mach7 = new hh.ReactiveMachine(Traffic7);
mach7.addEventListener("ns", lightHandler2);
mach7.addEventListener("ew", lightHandler2);

// observer
const Traffic8 = hiphop module() {
   inout ns = new Set() combine (x,y) => x.union(y);
   inout ew = new Set() combine (x,y) => x.union(y);
   inout failed = false combine (x,y) => x || y;
   Lfailed: {
      fork {
         loop {
            ${phase("green", "ns", 3)}
            ${phase("orange", "ns", 1)}
            ${phase("red", "ns", 3)}
         }
      } par {
         loop {
            ${phase("red", "ew", 4)}
            ${phase("green", "ew", 3)}
            ${phase("orange", "ew", 1)}
         }
      } par {
         loop {
            if (!(ns.nowval.has("red") || ew.nowval.has("red"))) {
               break Lfailed;
            }
            yield;
         }
      }
   }
   sustain failed(true);
}

