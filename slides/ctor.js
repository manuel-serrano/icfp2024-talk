/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/ctor.js                    */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Tue Jun  7 12:10:25 2022 (serrano)                */
/*    Copyright   :  2015-22 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Class constructor                                                */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { ctor, ctorarg };

/*---------------------------------------------------------------------*/
/*    ctor ...                                                         */
/*---------------------------------------------------------------------*/
const ctor = <impress.slide title="ctor">
   <div class="center">
     <div class="ctor">CTOR<span>!</span></div>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
ctor.css = <style>
.body {
  background-color: var(--greydark);
}

.ctor {
  font-weight: bold;
  color: white;
  font-size: 500%;
  letter-spacing: 0.2em;
  margin-top: 0.2ex;
}

.ctor span {
  color: var(--red);
}
</style>;

/*---------------------------------------------------------------------*/
/*    ctorarg ...                                                      */
/*---------------------------------------------------------------------*/
const ctorarg = <impress.slide title="constructor">
   <lstinputlisting language="hopscript" src="src/ctor.js"/>
   <div step="3" class="call">How to pass <span class="argctor">CTOR</span> arguments?</div>
   <impress.arrow class="arrow" step="1-3"
      src="formalX" dst="argeX" srcanchor="tc" dstanchor="bc"/>
   <impress.arrow class="arrow" step="1-3"
      src="formalY" dst="argeY" srcanchor="tc" dstanchor="bc"/>
   <impress.arrow class="arrowred" step="3-3"
      src="myargX" dst="mypoint" srcanchor="tc" dstanchor="bc"/>
   <impress.arrow class="arrowred" step="3-3"
      src="myargY" dst="mypoint" srcanchor="tc" dstanchor="bc"/>
   <impress.arrow class="arrowred" step="3-3"
      src="myargZ" dst="mypoint" srcanchor="tc" dstanchor="bc"/>
   <impress.arrow class="arrowred" step="3-3"
      src="myargN" dst="mypoint" srcanchor="tc" dstanchor="bc"/>
   <impress.arrow class="arrowred" step="3"
      src="mypoint" dst="argX" srcanchor="tc" dstanchor="bc"/>
   <impress.arrow class="arrowred" step="3"
      src="mypoint" dst="argY" srcanchor="tc" dstanchor="bc"/>
   <impress.arrow class="arrowred" step="3"
      src="mypoint" dst="argZ" srcanchor="tc" dstanchor="bc"/>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
ctorarg.css = <style>
.listings {
  font-size: calc(var(--listingFontSize) * 0.95);
}

.ctor:before {
  content: "\25B6";
  margin-right: 0.5em;
  font-weight: bold;
  color: var(--red);
}

.arg,
.arge {
  padding-left: 0.2ex;
  padding-right: 0.2ex;
  border-radius: 0.2ex;
}

[data-step="3"] .arg {
  background-color: var(--red);
  color: white;
}

[data-step="3"] .arg span.fontifier-prog-string {
  color: white;
}

[data-step="1"] .arge,
[data-step="2"] .arge,
[data-step="3"] .arge {
  background-color: var(--green);
  color: white;
}

.call {
  border-radius: 0.2ex;
  border: 0.2ex solid var(--red);
  background-color: var(--greyextralight);
  font-size: 70%;
  position: absolute;
  top: 12ex;
  right: 2em;
  padding: 0.2ex;
}

.argctor {
  color: white;
  padding: 0 0.1ex 0 0.1ex;
  background-color: var(--red);
  border-radius: 0.2ex;
}

.arrow {
  color: var(--green);
}

.arrowred {
  color: var(--red);
}
</style>;
