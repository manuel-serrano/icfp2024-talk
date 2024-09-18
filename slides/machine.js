/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/machine.js                  */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Wed Sep 18 10:14:07 2024 (serrano)                */
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

export { machine };

/*---------------------------------------------------------------------*/
/*    machine ...                                                      */
/*---------------------------------------------------------------------*/
const machine = <impress.slide title="Machine">
   <div class="title">The machine</div>
   
   <div class="scroll">
     <div class="codes machine">
       <div class="code" step="0-2">
         <lstinputlisting language="hiphop" src="src/utils.js" linerange="19-19"/>
         <lstinputlisting language="hiphop" src="src/utils.js" linerange="21-21"/>
       </div>
       <div class="code" step="1-2">
         <pre class="hiphop listings">&nbsp;</pre>
         <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="45-50"/>
       </div>
       <div class="code" step="2">
         <pre class="hiphop listings">   ...</pre>
         <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="54-65"/>
         <pre class="hiphop listings">      ...</pre>
         <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="72-75"/>
       </div>
     </div>
   </div>
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
machine.css = <style>
[data-step="1"] .machine {
   top: 0ex;      
}

[data-step="2"] .machine {
   top: -7ex;      
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

