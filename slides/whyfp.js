/*=====================================================================*/
/*    serrano/diffusion/talk/FOO/slides/whyfp.js                       */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Jul 25 21:40:59 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Why do we love FP?                                               */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import { inriaSVG } from "../config.js";
import * as impress from "hopimpress-0.6.*.hz";

export { whyfp };

/*---------------------------------------------------------------------*/
/*    whyfp ...                                                        */
/*---------------------------------------------------------------------*/
const whyfp = <impress.slide title="Why FP?" onstep=~{whyfponstep(event)}>
   <script>
      whyfponstep = function(e) {
	 const el = document.getElementById("whyfpbg");
	 if (e.value < 2) {
	    el.innerHTML = "";
	 } else if (e.value === 2) {
	    let i = 0;
	    setInterval(() => {
	       if (i < 400) {
		  el.innerHTML += " <span>code</span>";
		  i++;
	       }
	    }, 10);
	 }
      }
   </script>
   <div class="bottom">
     <div> functions<span step="1-2" class="important">?</span> </div>
     <div step="2"> read and understand <span class="important">code</span>...</div>
   </div>
   <div step="2" id="whyfpbg"/>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
whyfp.css = <style>
.body {
   font-size: 120%;
   font-weight: bold;
   color: var(--greydark);
   text-align: center;
}

.bottom {
   margin-top: 3ex;
}

.important {
   color: var(--red);
}

#whyfpbg {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: -1;
   width: 100%;
   height: 100%;
   color: var(--greyverylight);
   font-size: 40%;
}
</style>;

