/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/layout.js                  */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Tue May 31 07:11:56 2022 (serrano)                */
/*    Copyright   :  2015-22 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Memory layout                                                    */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as config from "../config.js";
import { tikz } from "../utils.js";
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { layout };

/*---------------------------------------------------------------------*/
/*    layout ...                                                       */
/*---------------------------------------------------------------------*/
const layout = <impress.slide title="layout">
  <div class="slide-title">Prototypes Memory Layout</div>
  <div class="svg-container">
    <svg:img width="100%" src=${tikz(require.resolve("../tex/layout.tex"))}/>
  </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
layout.css = <style>
div.svg-container {
  width: 90%;
  margin-top: 1.5ex;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid var(--greylight);
  background-color: white;
  padding: 0.5ex 0.1em 0.2ex 0.1em;
}
</style>;

