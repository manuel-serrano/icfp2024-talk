/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/newscomp.js                */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Jun  2 14:15:43 2022 (serrano)                */
/*    Copyright   :  2015-22 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Sealed Classes                                                   */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { newscomp };

/*---------------------------------------------------------------------*/
/*    sealed ...                                                       */
/*---------------------------------------------------------------------*/
const newscomp = <impress.slide title="sealed">
   <div class="lstcontainer">
     <div class="listing">
       <div class="sublisting">
       	 <lstinputlisting language="hopscript" src="src/news.js"/>
       	 <div step="2-3" class="downarrow">&#129175;</div>
       </div>
       <div class="comp">
	 <div class="compcontainer">
       	   <lstinputlisting step="2" language="c" src="src/news.c" linerange="11-18"/>
       	   <lstinputlisting step="3" language="c" src="src/news.c" linerange="1-8"/>
 	 </div>
       </div>
     </div>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
newscomp.css = <style>
.listings {
  font-size: calc(var(--listingFontSize) * 1);
}

.lstcontainer {
   position: absolute;
   width: 100%;
   height: 30ex;
}

.lstcontainer > div.listing {
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   transition: 1s all;
}

.sublisting {
   position: relative;
}

.src {
  transition: 1s all;
}

.comp {
   position: absolute;
   width: 100%;
   text-align: center;
   margin-left: auto;
   margin-right: auto;
}

.comp .compcontainer {
   position: relative;
   width: 97%;
   margin-left: auto;
   margin-right: auto;
   overflow: hidden;
   height: 30ex;
}

.comp .compcontainer pre {
   position: absolute;
   top: 0;
   width: 100%;
   transition: 1s all;
}

.downarrow {
   position: absolute;
   text-align: left;
   margin-left: 1em;
   bottom: -2ex;
   line-height: 2ex;
   z-index: 1;
   color: var(--hopscript-color);
   font-size: 70%;
}

[data-step="2"] .src,
[data-step="1"] .src {
  background-color: var(--hopscript-color);
  color: white;
  font-weight: bold;
  border-radius: 0.2ex;
}

[data-step="3"] .src3 {
  background-color: var(--hopscript-color);
  color: white;
  font-weight: bold;
  border-radius: 0.2ex;
}

[data-step="3"] .lstcontainer > div.listing,
[data-step="2"] .lstcontainer > div.listing {
   top: -7ex;
}
</style>;

