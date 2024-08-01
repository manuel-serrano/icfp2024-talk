/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/lunch.js                    */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Aug  1 10:10:23 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    No such thing as a free lunch                                    */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import { inriaSVG } from "../config.js";
import * as impress from "hopimpress-0.6.*.hz";

export { lunch };

/*---------------------------------------------------------------------*/
/*    lunch ...                                                        */
/*---------------------------------------------------------------------*/
const lunch = <impress.slide title="Free Lunch">
   <div class="background" step="0-1">
     <svg viewBox="0 0 425 300">
       <path id="curve" d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145" />
       <text x="25">
         <textPath xlink:href="#curve">
            no <tspan id="lunch-such" step="1">such</tspan> <tspan id="lunch-thing" step="1">thing</tspan> as a <tspan id="lunch-free" step="1">free</tspan> <tspan id="lunch-lunch" step="1">lunch</tspan>!
         </textPath>
       </text>
     </svg>
   </div>
</impress.slide>;
   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
lunch.css = <style>
.body {
   font-size: 30%;
   font-weight: bold;
   text-align: center;
}

div.background {
   padding-top: 3ex;
   background-color: var(--background);
   transition: 2s;
}

[data-step="1"] div.background {
   background-color: var(--greydark);
}
   
path {
   fill: transparent;
}

text {
   fill: var(--background);
   letter-spacing: 5px;
   transition: 1s;
}

[data-step="1"] text {
   fill: var(--greyverylight);
}

tspan {
   fill: var(--background);
}

tspan#lunch-lunch {
   transition: 3s;
}

tspan#lunch-such {
   transition: 2.5s;
}

tspan#lunch-free {
   transition: 1s;
}

tspan#lunch-thing {
   transition: 1.5s;
}

[data-step="1"] tspan#lunch-lunch {
   fill: var(--red);
}
</style>;

