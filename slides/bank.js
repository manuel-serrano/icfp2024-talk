/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/bank.js                     */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Fri Jul 26 14:47:18 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Sudoku bank                                                      */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import * as impress from "hopimpress-0.6.*.hz";

export { bank };

/*---------------------------------------------------------------------*/
/*    bank ...                                                         */
/*---------------------------------------------------------------------*/
const bank = <impress.slide title="Sudoku Bank">
   <img src=${require.resolve("../img/bank.png")}/>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
bank.css = <style>
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

