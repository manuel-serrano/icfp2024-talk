/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/slides/demo.js                     */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Wed Mar 19 13:43:43 2025 (serrano)                */
/*    Copyright   :  2015-25 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    HipHop Sudoku demo                                               */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { demo };

/*---------------------------------------------------------------------*/
/*    demo ...                                                         */
/*---------------------------------------------------------------------*/
const demo = <impress.slide title="Demo">
   <script>
      function htmlConsoleLog(id) {
         const el = document.getElementById(id);
         el.innerHTML = "";
         return function log(...args) {
	    el.innerHTML += String.prototype.concat.apply([], args.map(n => n.toString()));
	    el.innerHTML += "\n";
	    el.parentNode.scrollBy(0, el.scrollHeight);
         }
      }
   </script>
   <table>
      <tr>
         <td class="buttons">
            <div><button onclick=~{ s.solve([], boards.hard, { console: { log: htmlConsoleLog("console")} }); }>no strategy</button></div>
            <div><button onclick=~{ s.solve([s.SudokuHiddenSingle], boards.hard, { console: { log: htmlConsoleLog("console")} }) }>HiddenSingle</button></div>
            <div><button onclick=~{ s.solve([s.SudokuHiddenSingle, s.SudokuNakedSingle, s.SudokuNakedPair], boards.hard, { console: { log: htmlConsoleLog("console")} }) }>HS+NS+NP</button></div>
         </td>
         <td class="console">
            <div class="console"><pre id="console">&nbsp;</pre></div>
         </td>
      </tr>
   </table>
</impress.slide>;

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
demo.css = <style>
button {
   font-size: 35%;
}

table {
   width: 100%;
   margin-top: 0.5em;
   padding: 16px;
   border-collapse: separate;
   border-spacing: 16px;
}

td.buttons {
   width: 8em;
   text-align: left;
   vertical-align: top;
}

td.buttons button {
   width: 100%;
}

td.console {
   text-align: right;
   font-size: 24%;
   font-family: monospace;
}

td.console div.console {
   background: #222;
   border-radius: 8px;
   width: 50em;
   height: 52ex;
   color: white;
   overflow: auto;
   text-align: left;
}
</style>
