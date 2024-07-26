/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/proto.js                   */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Jun  2 13:00:10 2022 (serrano)                */
/*    Copyright   :  2015-22 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Memory layout                                                    */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { proto };

/*---------------------------------------------------------------------*/
/*    proto ...                                                        */
/*---------------------------------------------------------------------*/
const proto = <impress.slide title="proto">
   <lstinputlisting language="hopscript" src="src/proto.js"/>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
proto.css = <style>
.listings {
}

.dyn:before {
  content: "\25B6";
  margin-right: 0.5em;
  font-weight: bold;
  color: var(--red);
}
</style>;
