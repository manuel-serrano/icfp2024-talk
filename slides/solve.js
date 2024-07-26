/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/solve.js                    */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Fri Jul 26 02:10:36 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Sudoku                                                           */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import { inriaSVG } from "../config.js";
import * as impress from "hopimpress-0.6.*.hz";

export { solve };

/*---------------------------------------------------------------------*/
/*    solve ...                                                        */
/*---------------------------------------------------------------------*/
const solve = <impress.slide class="fad" title="Solving Sudokus" data-duration=1000 onslideenter=~{const x = this; setTimeout(() => x.setAttribute("data-fad", "on"), 10)} onslideleave=~{this.setAttribute("data-fad", "off")}>
   <div>
     <div> solving sudokus </div>
     <div> a problem </div>
     <div class="functions"> already solved<span>!</span> </div>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
solve.css = <style>
.body {
   font-size: 120%;
   font-weight: bold;
   color: var(--grey);
   text-align: center;
   padding-top: 2ex;
   background-color: var(--greyverydark);
   color: white;
}

.functions span {
   color: var(--red);
}

.body div div:nth-child(1) {
   line-height: 80%;
   font-size: 80%;
   transition-delay: 0.1s;
   color: var(--greylight);
}

.body div div:nth-child(2) {
   font-size: 160%;
   color: var(--greyverylight);
   line-height: 110%;
   transition-delay: 0.6s;
   letter-spacing: 4px;
}

.body div div:nth-child(3) {
   font-size: 180%;
   color: white;
   line-height: 140%;
   transition-delay: 1.1s;
   letter-spacing: 8px;
}		
</style>;

