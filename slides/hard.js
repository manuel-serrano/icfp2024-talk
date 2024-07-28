/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/hard.js                     */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Sun Jul 28 13:30:44 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    How hard a Sudoku                                                */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import { inriaSVG } from "../config.js";
import * as impress from "hopimpress-0.6.*.hz";

export { hard };

/*---------------------------------------------------------------------*/
/*    hard ...                                                         */
/*---------------------------------------------------------------------*/
const hard = <impress.slide title="Evaluating Sudokus">
   <div>
      <div class="rotate">how</div>
      <div class="rotate">hard</div>
      <div class="rotate">a sudoku</div>
      <div class="rotate">puzzle is</div>
      <div class="rotate">?</div>
   </div>
</impress.slide>
   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
hard.css = <style>
.body {
   font-size: 120%;
   font-weight: bold;
   color: var(--grey);
   text-align: center;
   background-color: var(--greyverydark);
   color: white;
   padding-top: 8ex;
   padding-left: 1em;
}

.rotate {
   transform-origin: bottom left;
   display: inline-block;
   letter-spacing: 8px;
   padding: 0;
   margin: 0;
}

.rotate:nth-child(1) {
   transform: rotate(0deg);
   color: var(--greylight);
}

.rotate:nth-child(2) {
   transform: translateX(0.2em) rotate(-20deg);
   color: white;
}

.rotate:nth-child(3) {
   transform: translateX(0.3em) rotate(-40deg);
   color: var(--greylight);
}

.rotate:nth-child(4) {
   transform: translateX(-0.5em) rotate(-60deg);
   color: var(--greylight);
}

.rotate:nth-child(5) {
   transform: translateX(-1em);
   font-size: 200%;
   color: var(--red);
}
</style>
   
/*---------------------------------------------------------------------*/
/*    evalOld ...                                                      */
/*---------------------------------------------------------------------*/
const evalOld = <impress.slide title="Evaluating Sudokus">
   <div>
   <svg viewBox="0 0 425 300">
   <path id="curve" d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145" />
  <text x="25">
    <textPath xlink:href="#curve">
      evaluate Sudokus
    </textPath>
  </text>
   </svg>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
evalOld.css = <style>
.body {
   font-size: 45%;
   font-weight: bold;
   color: var(--grey);
   text-align: center;
   padding-top: 2ex;
   background-color: var(--greyverydark);
   color: white;
   padding-left: 5em;
   padding-top: 6ex;
}

path {
   fill: transparent;
}

text {
   fill: #ffffff;
   letter-spacing: 8px;
}
</style>;

