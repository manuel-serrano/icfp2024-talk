/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/funimp.js                   */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Sat Jul 27 15:54:25 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Sudoku                                                           */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";

export { funimp };

/*---------------------------------------------------------------------*/
/*    funimp ...                                                       */
/*---------------------------------------------------------------------*/
const funimp = <impress.slide title="Functional + Imperative">
   <div id="lhs">
      <div step="0">s <span class="plus">+</span> p <span class="plus">+</span> a <span class="plus">+</span> d <span class="plus">+</span> c</div>
      <div step="1">functional <span class="plus">+</span> imperative <sup>*</sup> </div>
      <div step="2">javascript <span class="plus">+</span> esterel </div>
   </div>
   <span class="egal">=</span>
   <span class="hiphop">hiphop</span>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
funimp.css = <style>
.body {
   padding-top: 8ex;
   padding-right: 0.6em;
   font-size: 130%;
   font-weight: bold;
   background-color: var(--greyverydark);
   color: var(--greylight);
   text-align: center;
}

sup {
   font-size: 50%;
}

div#lhs {
   display: inline-block;
   position: relative;
   width: 8em;
   height: 2ex;
   text-align: right;
}

div#lhs div {
   position: absolute;
   display: inline;
   top: 0;
   right: 0;
   text-align: right;
   transition: 1s all;
}

span.egal {
   color: var(--red);
}

span.plus {
   color: var(--grey);
}

span.hiphop {
   color: white;
}
</style>;

