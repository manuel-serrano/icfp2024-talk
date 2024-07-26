/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/classpred.js               */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 27 17:22:37 2022                          */
/*    Last change :  Sat May 28 09:05:40 2022 (serrano)                */
/*    Copyright   :  2022 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    Class Properties                                                 */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as config from "../config.js";
import { tikz, fpx } from "../utils.js";
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { classPred };

/*---------------------------------------------------------------------*/
/*    classPred ...                                                    */
/*---------------------------------------------------------------------*/
const classPred = <impress.slide title="Class Predicates">
  <div class="slide-title">Class Predicates</div>
  <div class="svg-container">
    <svg:img class="svg" width="65%" src=${require.resolve("../svg/classpred.svg")}/>
  </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
classPred.css = <style>
div.svg-container {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: 1px solid var(--greylight);
  background-color: white;
  padding: 0.5ex 0.1em 0.2ex 0.1em;
}
</style>;

