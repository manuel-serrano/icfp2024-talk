/*=====================================================================*/
/*    serrano/diffusion/talk/FOO/slides/title.js                       */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Jul 25 18:16:55 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Talk title                                                       */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import { inriaSVG } from "../config.js";
import * as impress from "hopimpress-0.6.*.hz";

export { title };

/*---------------------------------------------------------------------*/
/*    title ...                                                        */
/*---------------------------------------------------------------------*/
const title = <impress.slide title="title">
   <div class="title-block-title">
      <div>The Functional</div>
      <div>The Imperative</div>
      <div>... and the <span class="sudoku">Sudoku</span></div>
   </div>
   
   <div class="title-block-authors">
      <span class="title-conf">Manuel Serrano - Robby Findler</span>
   </div>
   
   <div class="title-block-location">
      <span class="title-conf">ICFP&#39;24 - MILAN</span>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
title.css = <style>
.body {
   color: var(--grey);
   background-color: var(--background);
   position: absolute;
}

.sudoku {
   color: var(--red);
}

.title-block-title {
   color: var(--greydark);
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   margin-top: 1ex;
   font-size: 130%;
   font-weight: bold;
}

.title-block-authors {
   color: var(--grey);
   border-top: 2px solid var(--grey);
   width: 10em;
   right: 0;
   left: 0;
   font-size: 50%;
   height: 2ex;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   bottom: 4ex;
   position: absolute;
}

.title-block-location {
   color: var(--grey);
   bottom: 0;
   right: 0;
   font-size: 50%;
   width: 100%;
   height: 1ex;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   bottom: 3ex;
   position: absolute;
}
</style>;

