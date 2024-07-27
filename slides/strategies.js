/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/strategies.js               */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Fri Jul 26 13:42:09 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Sudoku strategies                                                */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "hopimpress-0.6.*.hz";

export { strategies };

/*---------------------------------------------------------------------*/
/*    strategies ...                                                   */
/*---------------------------------------------------------------------*/
const strategies = <impress.slide title="Sudoku Strategies">
   <div step="0"><img src=${require.resolve("../img/fullhouse.png")}/></div>
   <div step="1"><img src=${require.resolve("../img/hiddensingle.png")}/></div>
   <div step="2"><img src=${require.resolve("../img/lastressort.png")}/></div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
strategies.css = <style>
.body {
   background-color: #fefefe;
}

img {
   height: 95%;
}

div {
   padding-top: 2%;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   text-align: center;
   margin-left: auto;
   margin-right: auto;
}
</style>;

