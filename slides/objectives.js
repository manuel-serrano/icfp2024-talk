/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/objectives.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Jun  2 13:28:02 2022 (serrano)                */
/*    Copyright   :  2015-22 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Sealed Classes objectives                                        */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";

export { objectives };

/*---------------------------------------------------------------------*/
/*    objectives ...                                                   */
/*---------------------------------------------------------------------*/
const objectives = <impress.slide title="objectives">
   <table>
     <tr>
       <td class="title">
	 <div step="0-3">
	   <div class="title-block-top">
	     <div>JavaScript</div>
	     <div class="jsclass">
	       <div><span>Sealed</span></div>
 	     </div>
	     <div>Classes</div>
	   </div>
 	 </div>
	 <div class="aot" step="3">
	   <div>
	     AoT
 	   </div>
	 </div>
       </td>
       <td class="author" step="1-3">
	 Trade a little bit of flexibility 
         for <span class="faster">faster</span> and more <span class="faster">predictable</span>...
 	 <div class="ulcontainer" step="2-3">
	   <ul>
	     <li>property accesses </li>
	     <li>type predicates </li>
	     <li>method invocations</li>
	     <li>object creations</li>
 	   </ul>
 	 </div>
       </td>
     </tr>
   </table>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
objectives.css = <style>
.body {
   color: var(--grey);
   background-color: var(--background);
   position: absolute;
}

[data-step="on"] {
   transition: 1s all;
}

.delayed {
   transition-delay: 1s;
}

table {
   width: 100%;
   border-collapse: collapse;
}

table td {
   vertical-align: top;
}

table td.title {
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   width: 50%;
   position: relative;
}
      
table td.author {
   margin-left: auto;
   margin-right: auto;
   text-align: left;
   width: 50%;
   position: relative;
   margin-right: 0;
   padding-top: 1.2ex;
   font-size: 80%;
   font-weight: bold;
}
      
td.author .ulcontainer {
   background-color: white;
   width: 90%;
}

td.author ul {
   font-size: 80%;
   margin-left: 1em;
   list-style: none;
}

td.author li {
   color: var(--greydark);
}

td.author li:before {
   color: var(--red);
   content: "\25cf";
   display: inline-block;
   width: 1em;
   margin-left: -1.5em;
   font-size: 75%;
}

.title-block-top {
   width: 100%;
   margin-top: 1ex;
   font-size: 120%;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   transition: 1s all;
   transition-delay: 1s;
}

.title-block-top div {
   text-align: center;
}

.title-block-top div:nth-child(1),
.title-block-top div:nth-child(2),
.title-block-top div:nth-child(3) {
   font-weight: bold;
   transform: scale(1.2, 1.1);
   letter-spacing: 0.1em;
}

.title-block-top div:nth-child(1),
.title-block-top div:nth-child(3) {
   color: var(--grey);
}

.jsclass {
  position: relative;
  height: 2.5ex;
  width: 100%;
}

.jsclass > div {
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.faster {
   color: var(--red);
}

.jsclass div:nth-child(1) {
   color: var(--red);
}

.jsclass div:nth-child(3) {
   color: var(--greydark);
}

div.aot {
   position: absolute;
   bottom: 1.3ex;
   width: 100%;
   font-size: 100%;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
}

div.aot div {
   font-weight: bold;
   display: inline-block;
   width: 2em;
   border-radius: 0.2ex;
   background-color: var(--greydark);
   color: white;
}
</style>;

