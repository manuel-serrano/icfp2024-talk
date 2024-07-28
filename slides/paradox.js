/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/paradox.js                  */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Sun Jul 28 15:30:43 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Paradox                                                          */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { paradox };

/*---------------------------------------------------------------------*/
/*    paradox ...                                                      */
/*---------------------------------------------------------------------*/
const paradox = <impress.slide title="Paradox">
   <div class="title"> Logic hits back</div>
   
   <div class="scroll">
     <div class="codes paradox">
       <div class="code" step="0-2">
         <lstinputlisting language="hiphop" src="src/paradox.hh.mjs" linerange="1-9"/>
       </div>
       <div class="code" step="1-2">
         <lstinputlisting language="hiphop" src="src/paradox.hh.mjs" linerange="11-17"/>
       </div>
       <div class="code" step="2">
         <lstinputlisting language="hiphop" src="src/paradox.hh.mjs" linerange="19-27"/>
       </div>
     </div>
   </div>
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
paradox.css = <style>
[data-step="1"] .paradox {
   top: -3ex;      
}

[data-step="2"] .paradox {
   top: -10ex;      
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
   font-size: 40%;
}
</style>;

