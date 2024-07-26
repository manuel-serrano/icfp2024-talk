/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/cliff.js                   */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Sat May 28 09:15:02 2022                          */
/*    Last change :  Thu Jun  2 13:05:46 2022 (serrano)                */
/*    Copyright   :  2022 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    Performance cliff                                                */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    Module ...                                                       */
/*---------------------------------------------------------------------*/
import { tikz, fpx } from "../utils.js";
import * as impress from "hopimpress-0.6.*.hz";

export { cliff };

/*---------------------------------------------------------------------*/
/*    cliff ...                                                        */
/*---------------------------------------------------------------------*/
const cliff = <impress.slide title="Performance Cliff">
              
   <div class="performance">
     performance
   </div>
   <div class="cliff">
     CLIFF
   </div>
   
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
cliff.css = <style>
.body {
   background-color: var(--red);
   color: var(--greyextralight);
   font-weight: bold;
   padding-left: 4em;
   padding-top: 4ex;
   text-align: left;
   transition: all 0s;
}

.performance {
   color: var(--citron);
   padding-left: 0.2em;
   line-height: 0.6ex;
}

.cliff {
   line-height: 90%;
   font-size: 600%;
}
</style>

