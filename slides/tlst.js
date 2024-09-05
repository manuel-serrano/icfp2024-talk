/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/tlst.js                     */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Sep  5 07:55:34 2024 (serrano)                */
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

export { tlst };

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
/*    tlst ...                                                         */
/*---------------------------------------------------------------------*/
const tlst = <impress.slide title="Traffic Light">
   <div class="control">
      <div class="control-button">
         <button onclick=~{
	    switch (hopimpressCurrent().firstChild.getAttribute("data-step")) {
	       case "0": 
	       case "1": mach = mach6; break;
	    }
            mach.trafficId = "tl6"; mach.consoleId = "co6"; mach.reactO();}>
         react
      </button>
      </div>
      <div class="control-console" id="co6">&nbsp;</div>
      <div class="control-tl"><tlight id="tl6"/></div>
   </div>
   <div class="scroll">
     <div class="codes traffic-with-staging">
       <div class="code" step="0-1">
         <lstinputlisting language="hiphop" src="src/traffic.hh.mjs" linerange="93-105"/>
       </div>
       <div class="code" step="1">
         <lstinputlisting language="hiphop" src="src/traffic.hh.mjs" linerange="107-114"/>
     </div>
   </div>
   </div>
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
tlst.css = <style>
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
   top: 2.6ex;
   left: 0.2em;
   right: 0.2em;
   bottom: 0;
   height: 80%;
}
		 
[data-step="1"] .traffic-with-staging {
   top: -4ex;      
}

.code pre {
   padding: 0;
   width: 100%;
   padding-left: 0.2em;
   margin-right: 0.2em;
   border-bottom: 0;
   border-top: 0;
   margin: 0;
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

