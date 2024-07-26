/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/sealed.js                  */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Fri Jun  3 09:35:53 2022 (serrano)                */
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

export { sealed };

/*---------------------------------------------------------------------*/
/*    STARC ...                                                        */
/*---------------------------------------------------------------------*/
function STARC(attrs, ... nodes) {
   return <span class="starc">&#x2606;</span>;
}

/*---------------------------------------------------------------------*/
/*    STARR ...                                                        */
/*---------------------------------------------------------------------*/
function STARR(attrs, ... nodes) {
   return <span class="starr">&#x272a;</span>;
}

/*---------------------------------------------------------------------*/
/*    sealed ...                                                       */
/*---------------------------------------------------------------------*/
const sealed = <impress.slide title="sealed">
   <div class="lstcontainer">
     <div class="listing">
       <lstinputlisting language="hopscript" src="src/sealed.js" linerange="1-17"/>
       <lstinputlisting step="7" language="javascript" src="src/sealed.js" linerange="19-23"/>
   <div step="1-7" class="note" id="note1"><starc/>sealed declaration</div>
   <impress.arrow class="arrow" step="1-7" src="note1" dst="sealed" srcanchor="ml" dstanchor="mr"/>

   <div step="2-7" class="note" id="note2"><starc/>sealed super class</div>
   <impress.arrow class="arrow" step="2-7" src="note2" dst="superclass" srcanchor="ml" dstanchor="mr"/>

   <div step="3-7" class="note" id="note3"><starr/>sealed instances</div>
   <impress.arrow class="arrow" step="3-7" src="note3" dst="unconf" srcanchor="ml" dstanchor="mr"/>
   <impress.arrow class="arrow" step="3-7" src="note3" dst="prop" srcanchor="ml" dstanchor="mr"/>

   <div step="4-7" class="note" id="note4"><starr/>sealed prototypes</div>
   <impress.arrow class="arrow" step="4-7" src="note4" dst="metproto" srcanchor="ml" dstanchor="tr"/>

   <div step="5-7" class="note" id="note5"><starc/>no ctor return</div>
   <impress.arrow class="arrow" step="5-7" src="note5" dst="noreturn" srcanchor="ml" dstanchor="mr"/>

   <div step="6-7" class="note" id="note6"><starr/>strictly typed methods</div>
   <impress.arrow class="arrow" step="6-7" src="note6" dst="welltyped" srcanchor="ml" dstanchor="mr"/>
     </div>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
sealed.css = <style>
.listings {
  font-size: calc(var(--listingFontSize) * 1.1);
}

.dyn:before {
  content: "\25B6";
  margin-right: 0.5em;
  font-weight: bold;
  color: var(--red);
}

.strike2, .strike3, .strike4 {
  opacity: 1;
}

[data-step="6"] .strike2,
[data-step="5"] .strike2,
[data-step="4"] .strike2,
[data-step="3"] .strike2,
[data-step="2"] .strike2 {
   text-decoration: line-through var(--red);
}

[data-step="6"] .strike3,
[data-step="5"] .strike3,
[data-step="4"] .strike3,
[data-step="3"] .strike3 {
   text-decoration: line-through var(--red);
}

[data-step="6"] .strike4,
[data-step="5"] .strike4,
[data-step="4"] .strike4 {
   text-decoration: line-through var(--red);
}

.note {
  border-radius: 0.2ex;
  border: 0.2ex solid var(--grey);
  background-color: var(--greyextralight);
  font-size: 60%;
  position: absolute;
  right: 2em;
  padding: 0.2ex;
}

#note1 {
  top: 2ex;
}

#note5 {
  top: 7ex;
}

#note6 {
  top: 11ex;
}

#note3 {
  top: 15ex;
}

#note4 {
  top: 19ex;
}

#note2 {
  top: 23ex;
}

.arrow {
  color: var(--grey);
}

.starc, .starr {
  color: var(--red);
  padding-right: 0.2em;
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

[data-step="7"] .lstcontainer > div.listing {
   top: -6ex;
}
</style>;

