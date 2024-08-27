/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/understand2.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Tue Aug 27 09:24:39 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Why do we love FP?                                               */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";

export { understand2 };

/*---------------------------------------------------------------------*/
/*    understand2 ...                                                  */
/*---------------------------------------------------------------------*/
const understand2 = <impress.slide class="important" title="Understand Code">
   <div class="bottom">
     <div> Determinism </div>
     <div class="care care2"> + </div>
     <div> Composition </div>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
understand2.css = <style>
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
   margin-right: 1.5em;
}
		  
</style>;

