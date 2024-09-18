/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/cell.js                     */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Wed Sep 18 10:18:14 2024 (serrano)                */
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

export { cell };

/*---------------------------------------------------------------------*/
/*    cell ...                                                         */
/*---------------------------------------------------------------------*/
const cell = <impress.slide title="Cell">
   <div class="title">The cells</div>
   
   <div class="scroll">
     <div class="codes cell">
       <div class="code" step="0-2">
         <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="158-168"/>
       </div>
       <div class="code" step="1-2">
         <pre class="hiphop listings">&nbsp;</pre>
         <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="143-153"/>
       </div>
       <div class="code" step="2">
         <pre class="hiphop listings">&nbsp;</pre>
         <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="123-138"/>
       </div>
     </div>
   </div>
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
cell.css = <style>
[data-step="1"] .cell {
   top: -4ex;      
}

[data-step="2"] .cell {
   top: -17ex;      
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

