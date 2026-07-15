// -*- Mode: typescript; typescript-indent-level: 3; indent-tabs-mode: nil -*-
/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/src/sudoku.hh.mjs                  */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano & Robby Findler                    */
/*    Creation    :  Sat Dec 23 07:16:35 2023                          */
/*    Last change :  Wed Jul 15 08:44:30 2026 (serrano)                */
/*    Copyright   :  2023-26 Manuel Serrano & Robby Findler            */
/*    -------------------------------------------------------------    */
/*    Sudoku resolver that can make several guesses when stuck using   */
/*    a JS function.                                                   */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    The module                                                       */
/*---------------------------------------------------------------------*/
import * as hh from "@hop/hiphop";
import "./set.mjs";
import {
   BOARD_SIZE, iota, digits, margins,
   initMargins, parseBoard, displayBoard, checkSolution } from "./utils.mjs";

export {
   SudokuMachine, SudokuNakedSingle, SudokuHiddenSingle, SudokuNakedPair,
   solve, step
}

/*---------------------------------------------------------------------*/
/*    consoleLog ...                                                   */
/*---------------------------------------------------------------------*/
let $console = console;

/*---------------------------------------------------------------------*/
/*    verbose                                                          */
/*---------------------------------------------------------------------*/
let verbose = 1;

/*---------------------------------------------------------------------*/
/*    Interfaces ...                                                   */
/*---------------------------------------------------------------------*/
const inconsistent = (must, cannot) => {
   return must.size > 1 ||
          must.intersection(cannot).size > 0;
}

/*---------------------------------------------------------------------*/
/*    mach ...                                                         */
/*---------------------------------------------------------------------*/
const SudokuMachine = strategies => hiphop module() {
   inout ... ${iota.flatMap(i => iota.map(j => `must${i}${j}`))} =
      new Set() combine (x, y) => x.union(y);
   inout ... ${iota.flatMap(i => iota.map(j => `cannot${i}${j}`))} =
      new Set() combine (x, y) => x.union(y);
   inout reset = false combine (x, y) => x || y;
   inout status;
   inout unsolved = new Set() combine (x, y) => x.union(y);

   loop {
      /*#@abort#*/abort { /*#/@abort#*/
         fork {
            ${MustThisCannot()}
         } par {
            ${ForkHouseMap(MustOtherCannot)}
         } par {
            ${SudokuObserver()};
         } par {
            fork ${strategies}
         }
      } when immediate (reset.nowval);

      ${iota.map(i => hiphop ${iota.map(j => hiphop {
         emit ${`must${i}${j}`}(new Set());
         emit ${`cannot${i}${j}`}(new Set());
      })})}

      yield;
      /*#@abort#*/emit reset(false);/*#/@abort#*/
   }
}

/*---------------------------------------------------------------------*/
/*    SudokuObserver                                                   */
/*    -------------------------------------------------------------    */
/*    The observer that decides when the game is solved.               */
/*---------------------------------------------------------------------*/
const SudokuObserver = () => hiphop {
   signal progress = false combine (x, y) => x || y;

   loop {
      emit unsolved(new Set());
      emit progress(false);
      cont: {
         ${iota.map(i => hiphop ${iota.map(j => hiphop {
            if (inconsistent(this[`must${i}${j}`].nowval,
                             this[`cannot${i}${j}`].nowval)) {
               emit status("reject");
               break cont;
            }
            if (this[`must${i}${j}`].nowval.size === 0) {
               emit unsolved(new Set([{
                  i: i, j: j,
                  digits: digits.difference(
                     this[`cannot${i}${j}`].nowval)}]));
            }
            if ((this[`must${i}${j}`].nowval.size >
                 this[`must${i}${j}`].preval.size) ||
                (this[`cannot${i}${j}`].nowval.size >
                 this[`cannot${i}${j}`].preval.size)) {
               emit progress(true);
            }
         })})}
         if (unsolved.nowval.size === 0) {
            emit status("solved");
         } else if (progress.nowval) {
            emit status("progress");
         } else {
            emit status("stall");
         }
      } // end cont:
      yield;
   } // end loop
}

/*---------------------------------------------------------------------*/
/*    ForkHouseMap ...                                                 */
/*---------------------------------------------------------------------*/
const ForkHouseMap = proc => hiphop {
   fork {
      fork ${iota.map(i => proc(iota.map(j => { return {i, j}})))}
   } par {
      fork ${iota.map(j => proc(iota.map(i => { return {i, j}})))}
   } par {
      fork ${iota.map(i => {
         const chute_len = Math.sqrt(iota.length);
         const i0 = chute_len * (i % chute_len);
         const j0 = chute_len * Math.floor(i / chute_len);
         return proc(iota.map(j => {
            return {i : i0 + j % chute_len,
                    j : j0 + Math.floor(j * chute_len / iota.length)};
         }))})}
   }
}

/*---------------------------------------------------------------------*/
/*    House ...                                                        */
/*---------------------------------------------------------------------*/
const MustOtherCannot = coords => hiphop {
   fork ${coords.map(c => hiphop loop {
      let m = this[`must${c.i}${c.j}`].nowval;
      ${coords
         .filter(d => c.i !== d.i || c.j !== d.j)
         .map(d => hiphop {
            emit ${`cannot${d.i}${d.j}`}(m);
         })}
      yield;
   })}
}

/*---------------------------------------------------------------------*/
/*    MustThisCannot ...                                               */
/*---------------------------------------------------------------------*/
const MustThisCannot = () => hiphop {
   fork ${iota.map(i => hiphop fork ${iota.map (j => hiphop {
      loop {
         let m = this[`must${i}${j}`].nowval;
         if (m.size === 1) {
            emit ${`cannot${i}${j}`}(digits.difference(m));
         }
         yield;
      }
   })})}
}

/*---------------------------------------------------------------------*/
/*    SudokuNakedSingle ...                                            */
/*    -------------------------------------------------------------    */
/*    https://hodoku.sourceforge.net/en/tech_singles.php               */
/*---------------------------------------------------------------------*/
const SudokuNakedSingle = hiphop {
   fork ${iota.map(i => hiphop fork ${iota.map(j => hiphop {
      done: {
         loop {
            if (this[`cannot${i}${j}`].preval.size === digits.size - 1)
               break done
            yield;}}
      let must = digits.difference(this[`cannot${i}${j}`].preval);
      sustain ${`must${i}${j}`}(must);
   })})}}

/*---------------------------------------------------------------------*/
/*    SudokuHiddenSingle ...                                           */
/*    -------------------------------------------------------------    */
/*    https://hodoku.sourceforge.net/en/tech_singles.php               */
/*---------------------------------------------------------------------*/
const SudokuHiddenSingle = hiphop ${ForkHouseMap(coords => hiphop {
   loop {
      ${coords.map(ignored => hiphop {
         signal cans = digits combine (x, y) => x.intersection(y);

         ${coords
            .filter(c => ignored.i !== c.i || ignored.j !== c.j)
            .map(c => hiphop {
               emit cans(this[`cannot${c.i}${c.j}`].preval);
            })};

         if (cans.nowval.size === 1) {
            emit ${`must${ignored.i}${ignored.j}`}(cans.nowval);
         }
      })};
      yield;
   }})}

/*---------------------------------------------------------------------*/
/*    SudokuNakedPair ...                                              */
/*    -------------------------------------------------------------    */
/*    https://hodoku.sourceforge.net/en/tech_naked.php                 */
/*---------------------------------------------------------------------*/
const SudokuNakedPair = hiphop ${ForkHouseMap(coords => hiphop {
   fork ${coords.map(c => hiphop {
      loop {
         let c_cannot = this[`cannot${c.i}${c.j}`].preval;
         if (c_cannot.size === digits.size - 2) {
            ${coords
               .filter(d => c.i !== d.i || c.j !== d.j)
               .map(d => hiphop {
                  let d_cannot = this[`cannot${d.i}${d.j}`].preval;
                  if (c_cannot.equal(d_cannot)) {
                     fork ${coords
                        .filter(e => (e.i !== c.i || e.j !== c.j)
                                  && (e.i !== d.i || e.j !== d.j))
                        .map(e => hiphop {
                           sustain ${`cannot${e.i}${e.j}`}(
                              digits.difference(c_cannot));
                        })}}})}}
         yield;
      }})}})}

/*---------------------------------------------------------------------*/
/*    sudoku ...                                                       */
/*---------------------------------------------------------------------*/
const driver = (mach, givens) => {
   while (true) {
      const signals = mach.react(givens);
      switch (signals.status) {
         case "progress":
            break;
         case "stall":
            const { i, j, digits } = signals.unsolved.first();
            const newGivens = Object.assign({}, givens);

            for (let guess of digits) {
               newGivens[`must${i}${j}`] = new Set([guess]);
               mach.guessNum++; if (verbose > 0) { $console.log(margins[mach.depth] + `guessing ${i}x${j} val=${guess}/{${digits.array()}} [${mach.guessNum}:${mach.depth}]`); mach.depth++; }
               const newSignals = driver(mach, newGivens);
               mach.depth--;
               if (newSignals.status === "solved") {
                  return newSignals;
               } else {
                  mach.react({reset: true});
               }
            }
            if (verbose > 0) {
               $console.log(margins[mach.depth] +`guess ${i}x${j} REJECT ${signals.unsolved.size}/${iota.length * iota.length}`);
            }
            return {status: "reject"};

         case "solved":
         case "reject":
            return signals;
      }
   }
}

/*---------------------------------------------------------------------*/
/*    sudoku ...                                                       */
/*---------------------------------------------------------------------*/
const driverAsync = async (mach, givens) => {
   return new Promise(async (resolve, reject) => {
      let res = false;
      const signals = mach.react(givens);
      switch (signals.status) {
         case "progress":
            break;
         case "stall":
            const { i, j, digits } = signals.unsolved.first();
            const newGivens = Object.assign({}, givens);

            for (let guess of digits) {
               newGivens[`must${i}${j}`] = new Set([guess]);
               mach.guessNum++; if (verbose > 0) { $console.log(margins[mach.depth] + `guessing ${i}x${j} val=${guess}/{${digits.array()}} [${mach.guessNum}:${mach.depth}]`); mach.depth++; }
               const newSignals = await driverAsync(mach, newGivens);
               mach.depth--;
               if (newSignals.status === "solved") {
                  res = true;
                  resolve(newSignals);
               } else {
                  mach.react({reset: true});
               }
            }
            if (verbose > 0) {
               $console.log(margins[mach.depth] +`guess ${i}x${j} REJECT ${signals.unsolved.size}/${iota.length * iota.length}`);
            }
            res = true;
            resolve({status: "reject"});

         case "solved":
         case "reject":
            res = true;
            resolve(signals);
      }
      if (!res) setTimeout(() => driverAsync(mach, givens).then(resolve), 0);
   });
}

/*---------------------------------------------------------------------*/
/*    resetDriver ...                                                  */
/*---------------------------------------------------------------------*/
export function resetDriver(mach, givens) {
   verbose = 0;
   mach.guessNum = 0;
   const signals = driver(mach, givens);
   return { guesses: mach.guessNum, signals };
}

/*---------------------------------------------------------------------*/
/*    solve ...                                                        */
/*---------------------------------------------------------------------*/
const solve = async (strategies, board, opt) => {
   if (opt && "console" in opt) $console = opt.console;

   $console.log("----------------------");
   $console.log("strategies", strategies.map(x => x.loc.pos)); // would be nice to have line/column but at least we have the position!
   const sweep = false;
   const mach = (opt && opt.mach) || new hh.ReactiveMachine(SudokuMachine(strategies), { sweep });
   const givens = parseBoard(board);
   displayBoard(givens, $console);
   initMargins();
   mach.depth = 0;
   mach.guessNum = 0;
   verbose = (opt && "verbose" in opt) ? opt.verbose : 1;

   try {
      if (opt?.abortonguess) {
         mach.addEventListener("status", (evt) => {
            if (evt.nowval === "stall") {
               if (mach.guessNum >= (opt.abortonguess - 1)) {
                  mach.guessNum++;
                  throw "guessing";
               }
            }
         });
      }
      
      let signals = await driverAsync(mach, givens);

      if (signals.status === "solved") {
         setTimeout(() => {
            const check = checkSolution(signals);
            $console.log("");
            displayBoard(signals, $console);
            $console.log("");
            $console.log("# reactions:", mach.age(), " # guesses:", mach.guessNum);
            $console.log("check:", check);
            if (!check) {
               console.error("test failed.");
            }
         }, 0);
      } else {
         $console.log("no solution!");
      }
   } catch (e) {
      if (e === "guessing") {
         $console.log("aborted after", mach.guessNum, "guess(es)");
      } else {
         throw e;
      }
   }
   mach.react({reset: true});
   return mach;
}

/*---------------------------------------------------------------------*/
/*    step                                                             */
/*---------------------------------------------------------------------*/
const step = (mach, board, verbose) => {
   const givens = parseBoard(board);
   if (verbose) {
      displayBoard(givens, $console);
   }
   initMargins();
   
   mach.guessNum = 0;
   mach.depth = 0;
   
   let signals = mach.react(givens);
   let initsize = signals.unsolved.size;
   let res = 0;

   while (signals.status === "progress") {
      res = initsize - signals.unsolved.size;
      if (verbose) {
         $console.log(signals.status, res, initsize, signals.unsolved.size);
         displayBoard(signals, $console);
      }
      signals = mach.react(givens);
   }
   return res;
}

const sweep = true;

