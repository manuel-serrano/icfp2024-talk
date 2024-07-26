/*=====================================================================*/
/*    serrano/diffusion/talk/FOO/slides/nof.js                         */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Jul 25 21:12:43 2024 (serrano)                */
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

export { nof };

/*---------------------------------------------------------------------*/
/*    nof ...                                                          */
/*---------------------------------------------------------------------*/
const nof = <impress.slide title="Not Only Functions">
   <div>
     <div step="1"> not </div>
     <div step="1"> only </div>
     <div step="1" class="functions"> FUNCTIONS<span>!</span> </div>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
nof.css = <style>
.body {
   font-size: 120%;
   font-weight: bold;
   color: var(--grey);
   text-align: center;
   margin-top: 2ex;
}

[data-step="0"] {
   visibility: hidden;
}

.body * {
   transition: 1s all;
}

.functions span {
   color: var(--red);
}

.body div div:nth-child(1) {
   line-height: 80%;
   transition-delay: 0.1s;
}

.body div div:nth-child(2) {
   font-size: 140%;
   color: var(--greydark);
   line-height: 100%;
   transition-delay: 0.6s;
}

.body div div:nth-child(3) {
   font-size: 160%;
   color: var(--greyverydark);
   line-height: 120%;
   transition-delay: 1.1s;
   letter-spacing: 8px;
}		
</style>;

