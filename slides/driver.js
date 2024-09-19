/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/driver.js                   */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Sep 19 10:25:28 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    HipHop                                                           */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { driver };

/*---------------------------------------------------------------------*/
/*    driver ...                                                       */
/*---------------------------------------------------------------------*/
const driver = <impress.slide title="Driver">
   <div class="title">The driver</div>
   
   <div class="scroll">
     <div class="codes driver">
       <div class="code" step="0-2">
         <lstinputlisting class="head hiphop" language="hiphop" src="src/sudoku.hh.mjs" linerange="237-242"/>
         <lstinputlisting class="stall hiphop" language="hiphop" src="src/sudoku.hh.mjs" linerange="243-248"/>
         <lstinputlisting class="stall hiphop" language="hiphop" src="src/sudoku.hh.mjs" linerange="250-250"/>
         <lstinputlisting class="stall hiphop" language="hiphop" src="src/sudoku.hh.mjs" linerange="252-257"/>
         <lstinputlisting class="stall hiphop" language="hiphop" src="src/sudoku.hh.mjs" linerange="261-261"/>
         <lstinputlisting class="end hiphop" language="hiphop" src="src/sudoku.hh.mjs" linerange="262-268"/>
       </div>
     </div>
   </div>
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
driver.css = <style>
[data-step="1"] .driver {
   top: -3ex;      
}

[data-step="2"] .driver {
   top: -5ex;      
}

[data-step="0"] .driver .stall,
[data-step="0"] .driver .end {
   opacity: 0.4;
}

[data-step="1"] .driver .head,
[data-step="1"] .driver .end {
   opacity: 0.4;
}

[data-step="2"] .driver .head,
[data-step="2"] .driver .stall {
   opacity: 0.4;
}

.title {
   color: var(--greydark);
   font-weight: bold;
   text-align: center;
}

.code {
   transition: 1s all;
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
   top: 3ex;
   left: 0.2em;
   right: 0.2em;
   bottom: 0;
   height: 80%;
}
		 
.code pre {
   padding: 0;
   width: 100%;
   padding-left: 0.2em;
   margin-right: 0.2em;
   border-bottom: 0;
   border-top: 0;
   margin: 0;
   font-size: 28%;
}
</style>;

