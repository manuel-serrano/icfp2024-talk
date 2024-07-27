// -*- Mode: typescript; typescript-indent-level: 3; indent-tabs-mode: nil -*-
import * as hh from "@hop/hiphop";
import * as ut from "./unit_test_lib.mjs";
import "./set.mjs";

// slide stuff
const Traffic = hiphop module() {
   inout light = new Set() combine (x,y) => x.union(y);
   loop {
      emit light(new Set(["red"]));
      yield;
   }
}

export const mach = new hh.ReactiveMachine(Traffic);
mach.addEventListener("light", function(light) {
   const el = document.getElementById(mach.trafficId);
   console.log("EL=", el, light.nowval.value());
   el.setAttribute("data-light", light.nowval.value());
});

// step 1: basic esterel stuff
export
const TL1 = hiphop module() {
   inout light = new Set() combine (x,y) => x.union(y);
   loop {
      emit light(new Set(["red"]));
      yield;
   }
}

const light1 = new hh.ReactiveMachine(TL1);
ut.tst("light1.1", light1.react({}), {light : new Set(["red"])})
ut.tst("light1.2", light1.react({}), {light : new Set(["red"])})
ut.tst("light1.3", light1.react({}), {light : new Set(["red"])})


// step 2: the "esterel way": aborting the red to change it to green; parallel composition
export
const TL2 = hiphop module() {
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

const light2 = new hh.ReactiveMachine(TL2, { verbose: 0 });
ut.tst("light2.1", light2.react({}), {light : new Set(["red"])})
ut.tst("light2.2", light2.react({}), {light : new Set(["red"])})
ut.tst("light2.3", light2.react({}), {light : new Set(["red", "green"])})
ut.tst("light2.4", light2.react({}), {light : new Set(["green"])})
ut.tst("light2.5", light2.react({}), {light : new Set(["green"])})

// step 3: abort isn't enough: need to demonstrate suspend
export
const TL3 = hiphop module() {
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
const light3 = new hh.ReactiveMachine(TL3, { verbose: 0 });
ut.tst("light3.1", light3.react({}), {light : new Set(["red"])})
ut.tst("light3.2", light3.react({}), {light : new Set(["red"])})
ut.tst("light3.3", light3.react({}), {light : new Set(["green"])})
ut.tst("light3.4", light3.react({}), {light : new Set(["green"])})
ut.tst("light3.5", light3.react({}), {light : new Set(["green"])})

// step 4: but we want to abstract; we can do that via the JS interface.

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
      }}}

export
const TL4 = hiphop module () {
   inout light = new Set() combine (x,y) => x.union(y);
   loop {
      ${phase("red", "light", 2)}
      ${phase("green", "light", 1)}
      ${phase("orange", "light", 1)}
   }
}

const light4 = new hh.ReactiveMachine(TL4, { verbose: 0 });
ut.tst("light4.1",  light4.react({}), {light : new Set(["red"])})
ut.tst("light4.2",  light4.react({}), {light : new Set(["red"])})
ut.tst("light4.3",  light4.react({}), {light : new Set(["green"])})
ut.tst("light4.4",  light4.react({}), {light : new Set(["orange"])})
ut.tst("light4.5",  light4.react({}), {light : new Set(["red"])})
ut.tst("light4.6",  light4.react({}), {light : new Set(["red"])})
ut.tst("light4.7",  light4.react({}), {light : new Set(["green"])})
ut.tst("light4.8",  light4.react({}), {light : new Set(["orange"])})

// step 5: put two traffic lights in parallel with each other
export
const TL5 = hiphop module() {
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
const light5 = new hh.ReactiveMachine(TL5, { verbose: 0 });
ut.tst("light5.1",  light5.react({}), { ns: new Set(['green']),  ew: new Set(['red']) })
ut.tst("light5.2",  light5.react({}), { ns: new Set(['green']),  ew: new Set(['red']) })
ut.tst("light5.3",  light5.react({}), { ns: new Set(['green']),  ew: new Set(['red']) })
ut.tst("light5.4",  light5.react({}), { ns: new Set(['orange']), ew: new Set(['red']) })
ut.tst("light5.5",  light5.react({}), { ns: new Set(['red']),    ew: new Set(['green']) })
ut.tst("light5.6",  light5.react({}), { ns: new Set(['red']),    ew: new Set(['green']) })
ut.tst("light5.7",  light5.react({}), { ns: new Set(['red']),    ew: new Set(['green']) })
ut.tst("light5.8",  light5.react({}), { ns: new Set(['red']),    ew: new Set(['orange']) })
ut.tst("light5.9",  light5.react({}), { ns: new Set(['green']),  ew: new Set(['red']) })
ut.tst("light5.10", light5.react({}), { ns: new Set(['green']),  ew: new Set(['red']) })
ut.tst("light5.11", light5.react({}), { ns: new Set(['green']),  ew: new Set(['red']) })
ut.tst("light5.12", light5.react({}), { ns: new Set(['orange']), ew: new Set(['red']) })

// step 6: but what would have happened if we'd gotten the numbers wrong?!
export
const TL6 = hiphop module() {
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
            if (!(ns.nowval.has("red") ||
                  ew.nowval.has("red"))) {
               break Lfailed;
            }
            yield;
         }
      }
      par { sustain failed(false) } // writing "console.log" makes this line not appear in the paper!
   }
   sustain failed(true)
}

const light6 = new hh.ReactiveMachine(TL6, { verbose: 0});
ut.tst("light6.1",  light6.react({}), { ns: new Set(['green']),  ew: new Set(['red']),    failed : false })
ut.tst("light6.2",  light6.react({}), { ns: new Set(['green']),  ew: new Set(['red']),    failed : false })
ut.tst("light6.3",  light6.react({}), { ns: new Set(['green']),  ew: new Set(['red']),    failed : false })
ut.tst("light6.4",  light6.react({}), { ns: new Set(['orange']), ew: new Set(['red']),    failed : false })
ut.tst("light6.5",  light6.react({}), { ns: new Set(['red']),    ew: new Set(['green']),  failed : false })
ut.tst("light6.6",  light6.react({}), { ns: new Set(['red']),    ew: new Set(['green']),  failed : false })
ut.tst("light6.7",  light6.react({}), { ns: new Set(['red']),    ew: new Set(['green']),  failed : false })
ut.tst("light6.8",  light6.react({}), { ns: new Set(['green']),  ew: new Set(['orange']), failed : true })
ut.tst("light6.9",  light6.react({}), { failed : true })
ut.tst("light6.10", light6.react({}), { failed : true })

const LiarParadox = hiphop module() {
   signal whatIsThisSignal = false combine (x,y) => x || y;

   if (whatIsThisSignal.nowval) {
      ;
   } else {
      emit whatIsThisSignal(true);
   }
}

const liarmachine = new hh.ReactiveMachine(LiarParadox, { verbose: 0 })
var right_error = false
try {
   liarmachine.react({})
} catch (error) {
   right_error = error.toString().includes("hiphop: causality error")
}
ut.tst("liar", right_error, true)

ut.report_tests()
