/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/calibration.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Sat Jul 27 16:13:03 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23 title                                                    */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";

/*---------------------------------------------------------------------*/
/*    calibration ...                                                  */
/*---------------------------------------------------------------------*/
export const calibration = <impress.slide title="calibration">
   <div>The End</div>
</impress.slide>

calibration.css = <style>
.body {
   background-color: #eee;
   border: 4px solid black;
   positon: absolute;
}

div {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   text-align: center;
   padding-top: 4ex;
   font-size: 120%;
   font-weight: bold;
   color: var(--greydark);
}
</style>
