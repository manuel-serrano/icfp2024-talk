/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/tl.js                       */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Sat Jul 27 21:12:28 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Traffic Light                                                    */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { tl };

/*---------------------------------------------------------------------*/
/*    TLIGHT ...                                                       */
/*---------------------------------------------------------------------*/
function TLIGHT(attrs, ...nodes) {
   return <table class="trafficlight" id=${attrs.id}>
     <tr>
       <td class="light red">&#x25cf;</td>
       <td class="light orange">&#x25cf;</td>
       <td class="light green">&#x25cf;</td>
     </tr>
   </table>;
}

/*---------------------------------------------------------------------*/
/*    tl ...                                                           */
/*---------------------------------------------------------------------*/
const tl = <impress.slide title="Traffic Light">
   <div class="control">
      <div class="control-button">
         <button onclick=~{
	    switch (hopimpressCurrent().firstChild.getAttribute("data-step")) {
	       case "0": 
	       case "1": 
	       case "2": mach = mach1; break;
	       case "3": mach = mach3; break;
	       case "4": mach = mach4; break;
	       case "5": mach = mach5; break;
	    }
            mach.trafficId = "tl1"; mach.consoleId = "co1"; mach.reactO();}>
         run
      </button>
      </div>
      <div class="control-console" id="co1">&nbsp;</div>
      <div class="control-tl"><tlight id="tl1"/></div>
   </div>
   <div class="codes">
     <div class="code" step="0">
       <lstinputlisting language="hiphop" src="src/traffic.hh.mjs" linerange="6-20"/>
     </div>
     <div class="code" step="1">
       <lstinputlisting language="hiphop" src="src/traffic.hh.mjs" linerange="6-13"/>
     </div>
     <div class="code" step="2">
       <lstinputlisting language="hiphop" src="src/traffic.hh.mjs" linerange="21-25"/>
     </div>
     <div class="code" step="3">
       <lstinputlisting language="hiphop" src="src/traffic.hh.mjs" linerange="28-40"/>
     </div>
     <div class="code" step="4">
       <lstinputlisting language="hiphop" src="src/traffic.hh.mjs" linerange="52-65"/>
     </div>
     <div class="code" step="5">
       <lstinputlisting language="hiphop" src="src/traffic.hh.mjs" linerange="71-87"/>
     </div>
   </div>
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
tl.css = <style>
.control {
   position: absolute;
   left: 0.2em;
   right: 0.2em;
   width: 100%;
   top: 0.1ex;
   height: 3ex;
   backgtround-color: white;
}

.control > div {
   display: inline-block;
}

.control-button button {
   border-radius: 8px;
   margin-right: 0.5em;
   font-size: 50%;
 }

.control-console {
   font-size: 100%;
   border: 1px solid grey;
   border-radius: 8px;
   background-color: white;
   font-size: 60%;
   width: 8em;
}

.control-tl {
   position: absolute;
   right: 0.5em;
   top: 0.2ex;
}

.code {
   position: absolute;
   left: 0.2em;
   right: 0.4em;
   top: 2ex;
   transition: 1s all;
}

.codes {
   position: relative;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
}

.code pre {
   padding: 0;
   width: 100%;
   padding: 0.2em;
   margin-right: 0.2em;
}

table.trafficlight {
   background-color: black;
   border-radius: 0.5ex;
   padding-left: 0.2em;
   padding-right: 0.2em;
   border-collapse: separate;
   border-spacing: 0.1em;
   font-size: 120%;
   line-height: 40%;
}

td.light {
   text-align: center;
   color: grey;
   padding-bottom: 0.4ex;
}

table.trafficlight[data-red="red"] td.red {
   color: red;
}
table.trafficlight[data-orange="orange"] td.orange {
   color: orange;
}
table.trafficlight[data-green="green"] td.green {
   color: green;
}
</style>;

