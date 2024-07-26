/*=====================================================================*/
/*    serrano/diffusion/talk/FOO/slides/ilcode.js                      */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Jul 25 23:11:28 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    I Love CODE                                                      */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import { inriaSVG } from "../config.js";
import * as impress from "hopimpress-0.6.*.hz";

export { ilcode };

/*---------------------------------------------------------------------*/
/*    ilcode ...                                                       */
/*---------------------------------------------------------------------*/
const ilcode = <impress.slide title="I Love FP">
   <table>
     <tr><td>I</td><td class="love"><img src=${require.resolve("../svg/heart.svg")}/></td></tr>
   <tr><td class="code" colspan=2><div>CODE</div></td></tr>
   </table>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
ilcode.css = <style>
.body {
   margin-top: 2ex;
   margin-left: 2ex;
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

td.code {
   font-size: 60%;
   letter-spacing: 0;
}

td.code div {
   transform: scaleX(0.8) translateX(-0.2em);
}   

</style>;

