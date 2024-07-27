/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/api.js                      */
/*    -------------------------------------------------------------    */
/*    Author      :  manuel serrano                                    */
/*    Creation    :  Fri Jul 26 16:08:42 2024                          */
/*    Last change :  Sat Jul 27 00:27:13 2024 (serrano)                */
/*    Copyright   :  2024 manuel serrano                               */
/*    -------------------------------------------------------------    */
/*    Sudoku solver API                                                */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import * as boards from "../boards.js";
import * as utils from "../utils.js";

export { api };

/*---------------------------------------------------------------------*/
/*    GRID ...                                                         */
/*---------------------------------------------------------------------*/
function GRID(attrs, ...nodes) {
   const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
   const givens = utils.parseBoard(attrs.board);
   return <table class="grid">
      ${indices.map(j => <tr> ${indices.map(i => <td> ${givens[`must${i}${j}`] ? givens[`must${i}${j}`].value() : "&nbsp;"} </td>)} </tr>)}
   </table>;
}

/*---------------------------------------------------------------------*/
/*    api ...                                                          */
/*---------------------------------------------------------------------*/
const api = <impress.slide title="Sudoku API">
   <div class="container" step="0-1">
     <grid board=${boards.hiddensingle}/>
   </div>
   <div class="container" id="stuck" step="2-3">
     <grid board=${boards.hiddensinglestuck}/>
   </div>
   <div class="container" id="stuckguess" step="4-">
     <grid board=${boards.hiddensinglestuckguess}/>
   </div>
   <div class="container2 container21" id="stuckguessstuck" step="7-8">
     <grid board=${boards.hiddensinglestuckguessstuck}/>
   </div>
   <div class="container2 container22" id="stuckguessstuckguess" step="9-">
     <grid board=${boards.hiddensinglestuckguessstuckguess}/>
   </div>
   <div class="container3" id="stuckguessstuckguessreject" step="10-">
     <grid board=${boards.hiddensinglestuckguessstuckguessreject}/>
   </div>
   <div class="container2b" id="stuckguessstuck" step="11-">
     <grid board=${boards.hiddensinglestuckguessstuck}/>
   </div>
   <div class="strategies" step="1-11">
      <div class="strategie" step="1-">1. Hidden Single</div>
      <div class="strategie" step="3-">2. Guess</div>
      <div class="strategie" step="6-">3. Hidden Single</div>
      <div class="strategie" step="8-">4. Guess</div>
      <div class="strategie" step="10-">5. Reject</div>
      <div class="strategie" step="11-">...</div>
   </div>
   <div class="stepback" step="12-">
     <ul>
       <li step="12-">state</li>
       <li step="13-">parallelism</li>
       <li step="14-">abortion</li>
     </ul>
   </div>
</impress.slide>
   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
api.css = <style>
.body {
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   padding: 0;
}

.strategies {
   position: absolute;
   right: 0.5em;
   color: var(--greydark);
   font-size: 60%;
   padding-top: 2ex;
}

.stepback {
   position: absolute;
   right: 0.5em;
   font-size: 80%;
   font-weight: bold;
   padding-top: 2ex;
   text-align: left;
}

.stepback li {
   background-color: var(--greydark);
   color: white;
   border-radius: 16px;
   list-style-type: none;
   padding-left: 0.2em;
   padding-right: 0.2em;
   margin-bottom: 0.5ex;
}

.stepback li:before {
   content: "\27a4";
   font-size: 80%;
   margin-right: 0.2em;
   color: var(--red);
}

.stepback li::marker {
   color: var(--red);
}

.strategie {
   border: 8px solid var(--red);
   border-radius: 4px;
   padding-left: 0.2em;
   padding-right: 0.2em;
   margin-bottom: 1ex;
   text-align: left;
}

.strategie:nth-child(1) {
   border-color: var(--purple);		
}

.strategie:nth-child(3) {
   border-color: var(--orange);		
}

.strategie:nth-child(4) {
   border-color: var(--blueverydark);
}

.strategie:nth-child(5) {
   border-color: var(--green);
}

.strategie:nth-child(6) {
   border-color: var(--yellow);
}

.container {
   position: absolute;
   top: 0.5ex;
   left: 3.5em;
}

.container2 {
   position: absolute;
   top: 6ex;
   left: 1.8em;
}

.container3 {
   position: absolute;
   bottom: 0.5ex;
   left: 0.5em;
}

.container2b {
   position: absolute;
   top: 6ex;
   left: 5.2em;
}

table.grid {
   font-size: 50%;
   font-family: courier;
   border-collapse: collapse;
   transition: 1s all;
   margin-left: auto;
   margin-right: auto;
   position: relative;
}

#stuck tr:nth-child(3) td:nth-child(4),
#stuckguess tr:nth-child(3) td:nth-child(4),
#stuckguessstuck tr:nth-child(3) td:nth-child(4),
#stuckguessstuckguess tr:nth-child(3) td:nth-child(4),
#stuckguessstuckguessreject tr:nth-child(3) td:nth-child(4) {
   font-weight: bold;
   background-color: var(--purple);
   color: white;
}

#stuckguess tr:nth-child(1) td:nth-child(1),
#stuckguessstuck tr:nth-child(1) td:nth-child(1),
#stuckguessstuckguess tr:nth-child(1) td:nth-child(1),
#stuckguessstuckguessreject tr:nth-child(1) td:nth-child(1) {
   font-weight: bold;
   background-color: var(--red);
   color: white;
}

#stuckguessstuck tr:nth-child(2) td:nth-child(1),
#stuckguessstuckguess tr:nth-child(2) td:nth-child(1),
#stuckguessstuckguessreject tr:nth-child(2) td:nth-child(1) {
   font-weight: bold;
   background-color: var(--orange);
   color: white;
}

#stuckguessstuckguess tr:nth-child(3) td:nth-child(1),
#stuckguessstuckguessreject tr:nth-child(3) td:nth-child(1) {
   font-weight: bold;
   background-color: var(--blueverydark);
   color: white;
}

#stuckguessstuckguessreject tr:nth-child(8) td:nth-child(1),
#stuckguessstuckguessreject tr:nth-child(8) td:nth-child(2) {
   font-weight: bold;
   background-color: var(--green);
   color: white;
}

[data-step="5"] table.grid,
[data-step="6"] table.grid,
[data-step="7"] table.grid,
[data-step="8"] table.grid,
[data-step="9"] table.grid,
[data-step="10"] table.grid,
[data-step="11"] table.grid,
[data-step="12"] table.grid,
[data-step="13"] table.grid,
[data-step="14"] table.grid {
   font-size: 20%;
}

[data-step="11"] .container21,
[data-step="12"] .container21,
[data-step="13"] .container21,
[data-step="14"] .container21 {
   display: none;
}

[data-step="11"] .container2,
[data-step="12"] .container2,
[data-step="13"] .container2,
[data-step="14"] .container2,
[data-step="11"] .container3,
[data-step="12"] .container3,
[data-step="13"] .container3,
[data-step="14"] .container3 {
   opacity: 0.6;
   filter: blur(5px);
}

table.grid td {
   width: 1em;
   height: 1em;
}

table.grid tr:nth-child(1) td,
table.grid tr:nth-child(4) td,
table.grid tr:nth-child(7) td {
   border-top: 4px solid black;
}
table.grid tr:nth-child(9) td {
   border-bottom: 4px solid black;
}
table.grid tr:nth-child(2) td,
table.grid tr:nth-child(3) td,
table.grid tr:nth-child(5) td,
table.grid tr:nth-child(6) td,
table.grid tr:nth-child(8) td,
table.grid tr:nth-child(9) td {
   border-top: 1px solid black;
}
table.grid tr td:nth-child(1),
table.grid tr td:nth-child(4),
table.grid tr td:nth-child(7) {
   border-left: 4px solid black;
}
table.grid tr td:nth-child(9) {
   border-right: 4px solid black;
}
table.grid tr td:nth-child(2),
table.grid tr td:nth-child(3),
table.grid tr td:nth-child(5),
table.grid tr td:nth-child(6),
table.grid tr td:nth-child(8),
table.grid tr td:nth-child(9) {
   border-left: 1px solid black;
}

</style>
