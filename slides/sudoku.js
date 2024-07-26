/*=====================================================================*/
/*    serrano/diffusion/talk/FOO/slides/sudoku.js                      */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Fri Jul 26 01:24:05 2024 (serrano)                */
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

export { sudoku };

/*---------------------------------------------------------------------*/
/*    sudoku ...                                                       */
/*---------------------------------------------------------------------*/
const sudoku = <impress.slide title="Sudoku">
   <div>Sudoku</div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
sudoku.css = <style>
.body {
   padding-top: 1ex;
   font-size: 320%;
   font-weight: bold;
   background-color: var(--greyverydark);
   color: white;
   text-align: center;
}
</style>;

