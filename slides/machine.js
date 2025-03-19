/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/machine.js                  */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Wed Mar 19 09:26:30 2025 (serrano)                */
/*    Copyright   :  2015-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    HipHop                                                           */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { machine };

/*---------------------------------------------------------------------*/
/*    machine ...                                                      */
/*---------------------------------------------------------------------*/
const machine = <impress.slide title="Machine">
   <div class="title">The Sudoku Machine</div>
   
   <div class="scroll">
     <div class="codes machine">
       <div class="code" step="0-">
         <pre class="hiphop listings">&nbsp;</pre>
         <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="49-53"/>
       </div>
       <div class="code" step="1-">
         <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="54-55"/>
       </div>
       <div class="code" step="2-">
         <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="57-63"/>
       </div>
       <div class="code" step="3-">
         <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="64-65"/>
       </div>
       <div class="code" step="4-">
         <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="66-69"/>
       </div>
       <div class="code" step="5-">
         <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="76-80"/>
       </div>
     </div>
   </div>
   <span class="dummy" step="6">dummy</span>
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
machine.css = <style>
[data-step="1"] .machine {
   top: 0ex;      
}

[data-step="2"] .machine {
   top: 0ex;      
}

[data-step="3"] .machine {
   top: 0ex;      
}

[data-step="4"] .machine {
   top: -2ex;      
}

[data-step="5"] .machine,
[data-step="6"] .machine {
   top: -6ex;      
}

.title {
   color: var(--greydark);
   font-size: 90%;
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
   top: 2.5ex;
   left: 0.2em;
   right: 0.2em;
   bottom: 0;
   height: 83%;
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

.dummy {
   display: none;
}

.abort {
   visibility: hidden;
}

[data-step="6"] .abort {
   visibility: visible;
}
</style>;

