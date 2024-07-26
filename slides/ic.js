/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/ic.js                      */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Jun  2 13:01:16 2022 (serrano)                */
/*    Copyright   :  2015-22 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Inline Caches                                                    */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import { fpx } from "../utils.js";
import * as impress from "hopimpress-0.6.*.hz";

export { ic };

/*---------------------------------------------------------------------*/
/*    ic ...                                                           */
/*---------------------------------------------------------------------*/
const ic = <impress.slide title="proto">
   <div class="center">
     <div class="ic">INLINE</div>
     <div class="ic">CACHES</div>
     <div class="ref">[H&#246;lzle, Chambers, Ungar -- ECOOP&#39;91]</div>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
ic.css = <style>
.ic:nth-child(1) {
   letter-spacing: 0.05em;
   padding-left: -0.4em;
   margin-top: 0.5ex;
}

.ic {
  font-weight: bold;
  color: var(--greydark);
  font-size: 200%;
  line-height: 90%;
}
.ref { 
  color: var(--grey);
  font-size: 60%;
  margin-top: 1ex;
}
</style>;
