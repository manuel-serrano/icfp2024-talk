/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/howto.js                    */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Mar 18 09:27:18 2025                          */
/*    Last change :  Wed Mar 19 10:36:31 2025 (serrano)                */
/*    Copyright   :  2025 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    Sudoku howto implement it in HH                                  */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import * as boards from "../src/boards.js";
import * as utils from "../src/utils.mjs";

export { howto };

/*---------------------------------------------------------------------*/
/*    GRID ...                                                         */
/*---------------------------------------------------------------------*/
function GRID(attrs, ...nodes) {
   const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
   const givens = utils.parseBoard(attrs.board);
   return <table class="grid">
      ${indices.map(j => <tr> ${indices.map(i => <td id=${`cell${i}${j}`}> ${givens[`must${i}${j}`] ? givens[`must${i}${j}`].value() : "&nbsp;"} </td>)} </tr>)}
   </table>;
}

/*---------------------------------------------------------------------*/
/*    howto ...                                                        */
/*---------------------------------------------------------------------*/
const howto = <impress.slide title="Sudoku Howto">
   <script type="module">
      import tippy from "tippy.js";
      tippy('#cell05', { content: '<div class="tooltip">4x6 you <span class="sig">cannot</span> be 2</div>', allowHTML: true });
      tippy('#cell15', { content: '<div class="tooltip">4x6 you <span class="sig">cannot</span> be 5</div>', allowHTML: true });
      tippy('#cell25', { content: '<div class="tooltip">4x6 you <span class="sig">cannot</span> be 3</div>', allowHTML: true });
      tippy('#cell45', { content: '<div class="tooltip">4x6 you <span class="sig">cannot</span> be 9</div>', allowHTML: true });
      tippy('#cell55', { content: '<div class="tooltip">4x6 you <span class="sig">cannot</span> be 4</div>', allowHTML: true });
      tippy('#cell65', { content: '<div class="tooltip">4x6 you <span class="sig">cannot</span> be 1</div>', allowHTML: true });
      tippy('#cell75', { content: '<div class="tooltip">4x6 you <span class="sig">cannot</span> be 8</div>', allowHTML: true });
      tippy('#cell54', { content: '<div class="tooltip">4x6 you <span class="sig">cannot</span> be 7</div>', allowHTML: true });
      document.getElementById("cell35").innerHTML = "?";
   </script>
   <div class="container grid">
     <grid board=${boards.easy}/>
   </div>
   <div class="principles">
      <div class="principle" step="1-">
         two signals by cell <ul><li><span class="sig">must</span><li><span class="sig">cannot</span></ul>
      </div>
      <div class="principle" step="2-">
         <span class="sig">must</span> tells a cell what it is
      </div>
      <div class="principle" step="2-">
         <span class="sig">cannot</span> tells what it is not
      </div>
      <div class="principle" step="3-">
         cells listen to and emit signals
      </div>
      <div class="principle" step="4-">
         cells run in threads
      </div>
      <div class="principle" step="5-">
         strategies run in threads too!
      </div>
   </div>
   <div id="what-cell35">
      <span step="7"><span class="sig">cannot46</span> = {2}</span>
      <span step="8"><span class="sig">cannot46</span> = {2, 5}</span>
      <span step="9"><span class="sig">cannot46</span> = {2, 5, 3}</span>
      <span step="10"><span class="sig">cannot46</span> = {2, 5, 3, 9}</span>
      <span step="11"><span class="sig">cannot46</span> = {2, 5, 3, 9, 4}</span>
      <span step="12"><span class="sig">cannot46</span> = {2, 5, 3, 9, 4, 1}</span>
      <span step="13"><span class="sig">cannot46</span> = {2, 5, 3, 9, 4, 1, 8}</span>
      <span step="14"><span class="sig">cannot46</span> = {2, 5, 3, 9, 4, 1, 8, 7}</span>
      <span step="15-"><span class="sig">cannot46</span> = {2, 5, 3, 9, 4, 1, 8, 7} &rArr; <span class="sig">must46</span> = {6}</span>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
howto.css = <style>
.body {
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   padding: 0;
}

.container {
   position: absolute;
   top: 2ex;
   left: 1em;
}

table.grid {
   font-size: 50%;
   font-family: courier;
   border-collapse: collapse;
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

.principles {
   position: absolute;
   right: 1em;
   color: var(--greydark);
   font-size: 70%;
   padding-top: 2ex;
}

.principle:before {
   content: "\2738";
   font-size: 60%;
   color: var(--red);
}

.principle {
   padding-left: 0.2em;
   padding-right: 0.2em;
   margin-bottom: 1ex;
   text-align: left;
   line-height: 60%;
}

.principle ul {
   padding-top: 0;
   margin-top: 0;
   margin-left: 1em;
   font-size: 80%;
}

.sig {
   font-weight: bold;
}

.principle ::marker {
   color: var(--red);
}

#cell35 {
   visibility: hidden;
}

[data-step="6"] #cell35,
[data-step="7"] #cell35,
[data-step="8"] #cell35,
[data-step="9"] #cell35,
[data-step="10"] #cell35,
[data-step="11"] #cell35,
[data-step="12"] #cell35,
[data-step="13"] #cell35,
[data-step="14"] #cell35,
[data-step="15"] #cell35 {
   visibility: visible;
   background-color: var(--blueverydark);
   color: white;
   font-weight: bold;
}

#what-cell35 > span {
   position: absolute;
   bottom: 1ex;
   left: 2em;
   font-size: 60%;
}

.strike {
   text-decoration: line-through red;
   
}

.youare {
   color: var(--blueverydark);
   
}
</style>
