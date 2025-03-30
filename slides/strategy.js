/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/strategy.js                 */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Sun Mar 30 13:57:35 2025 (serrano)                */
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

export { strategy };

/*---------------------------------------------------------------------*/
/*    strategy ...                                                     */
/*---------------------------------------------------------------------*/
const strategy = <impress.slide title="Strategy">
   <div class="title">HiddenSingle Strategy</div>
   
   <div class="scroll">
     <div class="codes strategy">
       <div class="code">
         <lstinputlisting language="hiphop" src="src/sudoku.hh.mjs" linerange="195-211"/>
       </div>
     </div>
   </div>
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
strategy.css = <style>
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

