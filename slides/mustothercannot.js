/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/mustothercannot.js          */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Mar 19 07:14:05 2025                          */
/*    Last change :  Wed Mar 19 13:47:30 2025 (serrano)                */
/*    Copyright   :  2025 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    Mustothercannot implementation                                   */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import * as boards from "../src/boards.js";
import * as utils from "../src/utils.mjs";
import { LSTINPUTLISTING } from "../listings.js";

export { mustothercannot };

/*---------------------------------------------------------------------*/
/*    mustothercannot ...                                              */
/*---------------------------------------------------------------------*/
const mustothercannot = <impress.slide title="Mustothercannot">
   
  <div class="scroll">
    <div class="codes cannot">
      <div class="code">
        <lstinputlisting language="hiphop" src="src/mustothercannot.hh.mjs"/>
      </div>

      <div class="code" step="1-">
        <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="127-142"/>
      </div>
   
      <div class="code" step="2">
        <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="147-157"/>
      </div>
    </div>
  </div>
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    mustothercannot ...                                              */
/*---------------------------------------------------------------------*/
mustothercannot.css = <style>
[data-step="1"] .cannot {
   top: -17ex;      
}

[data-step="2"] .cannot {
   top: -24ex;      
}

.code {
   transition: 1s all;
}

.code pre {
   width: 100%;
   border-right: 0;
   border-top: 0;
   border-bottom: 0;
   margin-top: 0;
   font-size: 30%;
}

.codes {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: white;
   transition: 1s all;
}

.scroll {
   overflow: hidden;
   position: absolute;
   left: 0.2em;
   right: 0.2em;
   bottom: 0;
   top: 0.5ex;
   height: 95%;
   border: solid 1px #ddd;
}
</style>
