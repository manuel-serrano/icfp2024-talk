/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/benchchart.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 27 17:22:37 2022                          */
/*    Last change :  Thu Jun  2 14:27:41 2022 (serrano)                */
/*    Copyright   :  2022 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    Class Properties                                                 */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    Module ...                                                       */
/*---------------------------------------------------------------------*/
import { gnuplot } from "../utils.js";
import * as impress from "hopimpress-0.6.*.hz";

export { benchchart };

/*---------------------------------------------------------------------*/
/*    benchchart ...                                                   */
/*---------------------------------------------------------------------*/
const benchchart = <impress.slide title="barchart">
   <div class="svg-container">
     <svg:img class="svg" width="100%" src=${gnuplot(require.resolve("../plot/class.plot"))}/>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
benchchart.css = <style>
div.svg-container {
  height: 95%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 0.2ex 0.1em 0ex 0.1em;
}

.svg {
  border: 1px solid var(--greylight);
  background-color: white;
  transition: 1s all;
}
</style>;

