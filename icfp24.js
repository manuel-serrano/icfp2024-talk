/*=====================================================================*/
/*    serrano/diffusion/talk/FOO/icfp24.js                             */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 12:03:19 2016                          */
/*    Last change :  Fri Jul 26 01:24:42 2024 (serrano)                */
/*    Copyright   :  2016-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    ICFP24 presentation                                             */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    imports                                                          */
/*---------------------------------------------------------------------*/
import { name, slideWidth, slideHeight, impress as impressv } from "./config.js";

import * as fontifier from "@hop/fontifier";
import * as path from "path";
import * as impress from "hopimpress-0.6.*.hz";

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
      </impress.row>
      
      <impress.row class="row-stack" data-x=0 data-y=0>
       	${conclusion}
      </impress.row>
      
   </impress.impress>
}

import { title } from "./slides/title.js";
import { ilfp } from "./slides/ilfp.js";
import { whyfp } from "./slides/whyfp.js";
import { understand } from "./slides/understand.js";
import { nof } from "./slides/nof.js";
import { ilcode } from "./slides/ilcode.js";
import { sudoku } from "./slides/sudoku.js";
import { solve } from "./slides/solve.js";

import { layout } from "./slides/layout.js";
import { proto } from "./slides/proto.js";
import { ic } from "./slides/ic.js";
import { poly } from "./slides/poly.js";
import { classProp } from "./slides/classprop.js";
//import { classPred } from "./slides/classpred.js";
import { cliff } from "./slides/cliff.js";
import { ctor, ctorarg } from "./slides/ctor.js";
import { objectives } from "./slides/objectives.js";
import { sealed } from "./slides/sealed.js";
import { obj } from "./slides/obj.js";
import { ox } from "./slides/ox.js";
import { oxaxs } from "./slides/oxaxs.js";
import { sealedProp } from "./slides/sealedprop.js";
import { om } from "./slides/om.js";
import { sealedMet } from "./slides/sealedmet.js";
import { news } from "./slides/news.js";
import { newscomp } from "./slides/newscomp.js";
import { bench } from "./slides/bench.js";
import { benchchart } from "./slides/benchchart.js";
import { conclusion } from "./slides/conclusion.js";
   
console.log(`"http://localhost:${hop.port}/hop/icfp24" ready...`);
