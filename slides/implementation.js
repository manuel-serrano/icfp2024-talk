/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/implementation.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Sun Nov 17 15:24:57 2024 (serrano)                */
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

export { implementation };

/*---------------------------------------------------------------------*/
/*    implementation ...                                               */
/*---------------------------------------------------------------------*/
const implementation = <impress.slide title="Implementation">
   <div>FP + IP</div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
implementation.css = <style>
.body {
   padding-top: 1ex;
   font-size: 250%;
   font-weight: bold;
   color: var(--greydark);
   background-color: white;
   text-align: center;
}
</style>;

