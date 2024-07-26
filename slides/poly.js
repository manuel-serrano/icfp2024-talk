/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/poly.js                    */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Jun  2 13:11:42 2022 (serrano)                */
/*    Copyright   :  2015-22 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Polymorphic Eval                                                 */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { poly };

/*---------------------------------------------------------------------*/
/*    poly ...                                                         */
/*---------------------------------------------------------------------*/
const poly = <impress.slide title="poly">
   <table>
     <tr>
       <td>
   	 <lstinputlisting language="hopscript" linerange="1-34" src="src/eval.js"/>
       </td>
       <td>
   	 <lstinputlisting language="hopscript" linerange="35-69" src="src/eval.js"/>
       </td>
     </tr>
   </table>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
poly.css = <style>
.listings {
  font-size: calc(var(--listingFontSize) * 0.55);
}

table {
   width: 95%;
   margin-left: auto;
   margin-right: auto;
}
  
td:nth-child(1) {
   width: 38%;
}

td:nth-child(2) {
   width: 62%;
}

.eval {
  border-radius: 4px;
}

[data-step="2"] .eval,
[data-step="1"] .eval {
  color: white;
  border-radius: 4px;
  background-color: var(--red);
  opacity: 1;
  transition: 1s all;
}

div.eval {
  display: inline-block;
}

[data-step="2"] div.eval {
  transform: scale(5) translate(-3em);
  transform-origin: bottom left;
}
</style>;
