/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/ilfi.js                     */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Sun Jul 28 15:32:32 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    I Love FP                                                        */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import { inriaSVG } from "../config.js";
import * as impress from "hopimpress-0.6.*.hz";

export { ilfi };

/*---------------------------------------------------------------------*/
/*    ilfi ...                                                         */
/*---------------------------------------------------------------------*/
const ilfi = <impress.slide title="I Love Function + Imperative">
   <table>
     <tr><td>I</td><td class="love"><img src=${require.resolve("../svg/heart.svg")}/></td></tr>
     <tr><td>F</td><td>I</td></tr>
   </table>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
ilfi.css = <style>
.body {
   margin-top: 2ex;
}

table {
   font-size: 350%;
   font-family: amtw;
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   line-height: 50%;
   letter-spacing: -0.2em;
}

table td {
   text-align: center;
}

.love {
   color: var(--red);
   font-family: Courier;
}

.love img {
   font-size: 160%;
   width: 0.6em;
   height: 1ex;
   margin-bottom: 0.3ex;
}
</style>;

