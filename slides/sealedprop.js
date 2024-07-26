/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/sealedprop.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 27 17:22:37 2022                          */
/*    Last change :  Thu Jun  2 14:00:51 2022 (serrano)                */
/*    Copyright   :  2022 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    Class Properties                                                 */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    Module ...                                                       */
/*---------------------------------------------------------------------*/
import { gnuplot } from "../utils.js";
import * as impress from "hopimpress-0.6.*.hz";

export { sealedProp };

/*---------------------------------------------------------------------*/
/*    sealedProp ...                                                   */
/*---------------------------------------------------------------------*/
const sealedProp = <impress.slide title="Sealed Class Properties">
  <div class="slide-title">Impact of Polymorphism Degree</div>
  <div class="svg-container">
    <svg:img class="svg" width="65%" src=${gnuplot(require.resolve("../plot/sealedclassprop.plot"))}/>
  </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
sealedProp.css = <style>
div.svg-container {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 0.5ex 0.1em 0.2ex 0.1em;
}

.svg {
  border: 1px solid var(--greylight);
  background-color: white;
}
</style>;

