/*=====================================================================*/
/*    serrano/diffusion/talk/FOO/slides/understand.js                  */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Fri Jul 26 01:18:54 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Why do we love FP?                                               */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import { inriaSVG } from "../config.js";
import * as impress from "hopimpress-0.6.*.hz";

export { understand };

/*---------------------------------------------------------------------*/
/*    understand ...                                                   */
/*---------------------------------------------------------------------*/
const understand = <impress.slide class="important" title="Understand Code">
   <div class="bottom">
     <div> Determinism </div>
     <div class="care care2"> + </div>
     <div> Composition </div>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
understand.css = <style>
.body {
   font-size: 120%;
   line-height: 90%;
}

.bottom {
   position: absolute;
   bottom: 2ex;
   right: 1em;
}

.care {
   font-size: 120%;
   margin-right: 1em;
}
		  
</style>;

