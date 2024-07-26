/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/sealedmet.js               */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Jun  2 14:10:06 2022 (serrano)                */
/*    Copyright   :  2015-22 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Sealed Methods                                                   */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { sealedMet };

/*---------------------------------------------------------------------*/
/*    sealedMet ...                                                    */
/*---------------------------------------------------------------------*/
const sealedMet = <impress.slide title="Sealed Method">
   <div class="listing">
     <lstinputlisting language="hopscript" src="src/method.js" linerange="1-4"/>
     <div step="1-3" class="downarrow">&#129175;</div>
   </div>
   <div class="listing" step="1-3">
     <lstinputlisting language="javascript" src="src/method.js" linerange="6-15"/>
   </div>
   
   <div step="2-3" class="note" id="noteopt" >Invoked directly when:
     <div class="li"><tt><strong>this</strong>:<span class="math">C</span></tt> proved</div>
     <div class="li">armed by an IC</div>
   </div>
   <impress.arrow class="arrow" step="2-3" src="noteopt" dst="unsafe" srcanchor="bc" dstanchor="tr"/>
   
   <div step="3" class="note" id="notethis" >Fast <tt><strong>this</strong>.x</tt> accesses</div>
   <impress.arrow class="arrow" step="3" src="notethis" dst="thisC" srcanchor="bc" dstanchor="tr"/>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
sealedMet.css = <style>
.listing {
  transition: 1s all;
  position: relative;
}

.listings {
  font-size: calc(var(--listingFontSize) * 1.1);
  line-height: 2.5ex;
}

.math {
  font-family: cmsy;
  font-size: 100%;
  font-weight: bold;
  color: var(--hopscript-color);
}

.metbody {
  font-style: italic;
  color: var(--greydark);
}

.nofor .for {
  font-weight: normal;
}

#unsafe, #unsafe:after,
#unsafec, #unsafec:after {
  color: var(--red);
}

#unsafe:after,
#unsafec:after {
  content: "opt";
  font-family: cmr;
  font-style: italic;
  font-size: 80%;
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

.note {
  border-radius: 0.2ex;
  border: 0.2ex solid var(--grey);
  background-color: var(--greyextralight);
  font-size: 60%;
  position: absolute;
  padding: 0.2ex 0.3ex 0.2ex 0.3ex;
}

.note tt {
  font-size: 85%;
  color: var(--greydark);
}

#noteopt {
  top: 7em;
  left: 3em;
}

#notethis {
  top: 7em;
  right: 2em;
}

#noteopt div:nth-child(1) {
  margin-top: 0.8ex;
}

#noteopt div:nth-child(2) {
  margin-bottom: 0.8ex;
}

#noteopt div {
  font-size: 90%;
  line-height: 0.8ex;
  padding-left: 0.4em;
}

.li:before {
  content: "\25cf";
  margin-right: 0.5em;
  font-weight: bold;
  color: var(--red);
}
</style>;
