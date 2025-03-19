/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/signals.js                  */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Mar 19 07:14:05 2025                          */
/*    Last change :  Wed Mar 19 13:46:10 2025 (serrano)                */
/*    Copyright   :  2025 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    MustThisCannot implementation                                    */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import * as boards from "../src/boards.js";
import * as utils from "../src/utils.mjs";
import { LSTINPUTLISTING } from "../listings.js";

export { signals };

/*---------------------------------------------------------------------*/
/*    signals ...                                                      */
/*---------------------------------------------------------------------*/
const signals = <impress.slide title="Signals">
   
   <div class="title"><span class="sig">must</span> &amp; <span class="sig">cannot</span></div>
   
   <div class="codes signals">
     <div class="code">
       <lstinputlisting language="hiphop" src="src/signals.hh.mjs"/>
     </div>
   </div>
   
   <div class="codes signals" step="1">
     <div class="code">
       <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="49-53"/>
     </div>
   </div>
   
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    signals ...                                                      */
/*---------------------------------------------------------------------*/
signals.css = <style>
.title {
   color: var(--greydark);
   font-weight: bold;
   text-align: center;
}

.sig {
   font-weight: bold;
}
</style>
