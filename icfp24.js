/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/icfp24.js                          */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 12:03:19 2016                          */
/*    Last change :  Sat Jul 27 18:27:57 2024 (serrano)                */
/*    Copyright   :  2016-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    ICFP24 presentation                                             */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    imports                                                          */
/*---------------------------------------------------------------------*/
import { name, slideWidth, slideHeight } from "./config.js";

import * as fontifier from "@hop/fontifier";
import * as path from "path";
import * as impress from "hopimpress-0.6.*.hz";

/*---------------------------------------------------------------------*/
/*    R ... hop resolver                                               */
/*---------------------------------------------------------------------*/
//const R = new hop.Resolver(import.meta.url);
const R = {
   resolve: file => require.resolve(file)
};

/*---------------------------------------------------------------------*/
/*    icfp24 ...                                                       */
/*---------------------------------------------------------------------*/
service icfp24(o) {
   var s = slides(slideWidth, slideHeight);
   var svc = service(id) {
      hop.broadcast("hopimpress", { goto: id });
   };

   return <impress.html logo=${require.resolve("./etc/logo.png")}>

     <head css=${impress.cssCover}
	   include="hop-window"
           title=${name}
	   idiom="scheme"
	   jscript=${[impress.jscript]}/>

     <script type="importmap"> {
        "imports": {
           "@hop/hop": "${R.resolve('@hop/hop/client.mjs')}",
           "@hop/hiphop": "${R.resolve('@hop/hiphop/hiphop-client.mjs')}",
           "src/traffic.mjs": "${R.resolve('src/traffic.mjs')}"
        }
     }
     </script>

     <script type="module">
        import { ReactiveMachine } from "@hop/hiphop";
        import { mach } from "src/traffic.mjs";
        window.mach = mach;
     </script>
   
     <impress.cover title=${name} src=${icfp24slides}>
       <ol>
	 ${ impress.slideNodes(s)
	    .map( function( x, idx=undefined, arr=undefined ) {
	       const title = x[ "data-hopimpress-title" ];
	       return <li onclick=~{${svc}(${x.id}).post()} >
                   ${title ? title : x.id}
	       </li>
	    } )
	  }
       </ol>
     </impress.cover>
   </impress.html>;
}

/*---------------------------------------------------------------------*/
/*    icfp24slides ...                                                 */
/*---------------------------------------------------------------------*/
service icfp24slides(o) {
   var width = o && "width" in o ? o.width : slideWidth;
   var height = o && "height" in o ? o.height : slideHeight;
   
   return <html>
     <head css=${[fontifier.css,
	      impress.css,
	      icfp24.resource("icfp24.hss")]}
	   idiom="scheme"
	   include="hop-canvas"
	   script=${[impress.jscript,
		     icfp24.resource("lib/scm/impress.scm")]}/>

     <impress.panel id="panel" controls=${false}/>
     
     <script type="importmap"> {
        "imports": {
           "@hop/hop": "${R.resolve('@hop/hop/client.mjs')}",
           "@hop/hiphop": "${R.resolve('@hop/hiphop/hiphop-client.mjs')}",
           "src/traffic.mjs": "${R.resolve('src/traffic.mjs')}"
        }
     }
     </script>

     <script type="module">
        import { ReactiveMachine } from "@hop/hiphop";
        import { mach } from "src/traffic.mjs";
        window.mach = mach;
        mach.reactO = function(...nodes) {
	   const con = document.getElementById(this.consoleId);
	   const tl = document.getElementById(this.trafficId);
	   tl.removeAttribute("data-light");
	   this.react(...nodes);
	   con.innerHTML = `reaction ${this.age()}`;
	};
     </script>
   
     ${slides(width, height)}
     
   </html>
}

/*---------------------------------------------------------------------*/
/*    log ...                                                          */
/*---------------------------------------------------------------------*/
service log(text) {
   console.log(text);
}

/*---------------------------------------------------------------------*/
/*    SLIDESSTYLE ...                                                  */
/*---------------------------------------------------------------------*/
function SLIDESSTYLE(attrs, ... nodes) {
   const ratio = (attrs.width / 1920);
   
   return <style>
:root {
  --slideWidth: ${attrs.width}px;
  --slideHeight: ${attrs.height}px;
  --listingFontSize: ${ratio * 44}px;
  --fontSize: ${ratio * 128}px;
}
 </style>;
}

/*---------------------------------------------------------------------*/
/*    slides ...                                                       */
/*---------------------------------------------------------------------*/
function slides(width, height) {
   console.log( `generating slides ${new Date().toString()} (${width}x${height})...` );

   return <impress.impress width=${width} height=${height}>
     
      <slidesStyle width=${width} height=${height}/>

      <impress.row class="row-stack" data-x=0 data-y=0>
        ${title}
        ${ilfp}
        ${whyfp}
        ${understand}
        ${nof}
        ${ilcode}
      </impress.row>
     
      <impress.row class="row-stack" data-x=${width + 128} data-y=0>
	${sudoku}
	${solve}
	${hard}
	${bank}
	${strategies}
	${api}
	${understand2}
	${funimp}
      </impress.row>
      
      <impress.row class="row-stack" data-x=${2 * (width + 128)} data-y=0>
       	${hiphop}
       	${tl}
      </impress.row>
      
      <impress.row class="row-stack" data-x=${3 * (width + 128)} data-y=0>
       	${conclusion}
       	${calibration}
      </impress.row>
      
   </impress.impress>
}

// chapter 1
import { title } from "./slides/title.js";
import { ilfp } from "./slides/ilfp.js";
import { whyfp } from "./slides/whyfp.js";
import { understand } from "./slides/understand.js";
import { nof } from "./slides/nof.js";
import { ilcode } from "./slides/ilcode.js";

// chapter 2
import { sudoku } from "./slides/sudoku.js";
import { solve } from "./slides/solve.js";
import { hard } from "./slides/hard.js";
import { bank } from "./slides/bank.js";
import { strategies } from "./slides/strategies.js";
import { api } from "./slides/api.js";
import { understand2 } from "./slides/understand2.js";
import { funimp } from "./slides/funimp.js";

// chapter 3
import { hiphop } from "./slides/hiphop.js";
import { tl } from "./slides/tl.js";

// conclusion
import { conclusion } from "./slides/conclusion.js";
import { calibration } from "./slides/calibration.js";
   
console.log(`"http://localhost:${hop.port}/hop/icfp24" ready...`);
