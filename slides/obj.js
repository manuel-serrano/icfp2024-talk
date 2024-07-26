/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/obj.js                     */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Fri May 27 17:22:37 2022                          */
/*    Last change :  Thu Jun  2 13:46:54 2022 (serrano)                */
/*    Copyright   :  2022 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    Object representation                                            */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    Module ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";

export { obj };

/*---------------------------------------------------------------------*/
/*    obj ...                                                          */
/*---------------------------------------------------------------------*/
const obj = <impress.slide title="Object Representation">
  <div class="slide-title">Object Representation</div>
  <div class="svg-container">
    <div class="svgimg" step="0">
      <svg:img class="svg" width="80%" src=${require.resolve("../svg/jsrecord-opt.svg")}/>
    </div>
    <div class="svgimg" step="1">
      <svg:img class="svg" width="80%" src=${require.resolve("../svg/jsrecord-noopt.svg")}/>
    </div>
    <div class="svgimg" step="2">
      <svg:img class="svg" width="80%" src=${require.resolve("../svg/jsrecord-noopt2.svg")}/>
    </div>
  </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
obj.css = <style>
div.svg-container {
  position: absolute;
  width: 95%;
  height: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5ex;
  text-align: center;
}

.svgimg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.svg {
  border: 1px solid var(--greylight);
  background-color: white;
  padding: 0.2ex 0.1em 0.2ex 0.1em;
}
</style>;

