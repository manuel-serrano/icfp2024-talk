/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/oxaxs.js                   */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Jun  1 06:44:43 2022                          */
/*    Last change :  Thu Jun  2 13:46:24 2022 (serrano)                */
/*    Copyright   :  2022 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    o.x                                                              */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import { LSTINPUTLISTING } from "../listings.js";

export { oxaxs };

/*---------------------------------------------------------------------*/
/*    oxaxs                                                            */
/*---------------------------------------------------------------------*/
const oxaxs = <impress.slide title="o.x access">
   <table>
     <tr>
       <th> 
       	 <div class="unsealed javascript" step="0-1">
 	   <tt class="unsealed fontifier-prog">o.x <span class="fontifier-prog-comment">/* regular */</span></tt>
 	 </div>
       	 <div class="sealed hopscript" step="2-3">
 	   <tt class="unsealed fontifier-prog">o.x <span class="fontifier-prog-comment">/* sealed */</span></tt>
 	 </div>
       	 <div step="1" class="downarrow">&#129175;</div>
       	 <div step="3" class="downarrow">&#129175;</div>
       </th>
     </tr>
   </table>
   <table>
     <tr>
       <td>
       	 <div class="unsealed" step="1">
       	   <lstinputlisting language="c" src="src/oxaxs.c" linerange="2-14"/>
       	 </div>
       	 <div class="sealed" step="3">
       	   <lstinputlisting language="c" src="src/oxaxs.c" linerange="18-18"/>
       	 </div>
       </td>
     </tr>
   </table>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
oxaxs.css = <style>
table {
  font-size: 40%;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  border-collapse: separate;
  border-spacing: 0.5em;
}

table td, table th {
  width: 48%;
  background-color: white;
  text-align: left;
  position: relative;
}

th {
  height: 3ex;
}

td {
  height: 26ex;
}

div.unsealed, div.sealed {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transition: 1s all;
}

div.javascript {
  border-left: 8px solid var(--javascript-color);
}

div.hopscript {
  border-left: 8px solid var(--hopscript-color);
}

tt {
  font-family: CourierMono;
  font-weight: bold;
  padding-left: 0.2em;
}
  
.listings {
  padding: 0 0 0 0.4ex;
  border-top: 0;
  border-bottom: 0;
  border-right: 0;
  margin: 0 0 0 0;
  font-size: var(--listingFontSize);
}

.cnst {
  font-family: cmmi;
  font-size: 120%;
  font-weight: bold;
  color: var(--red);
}

.downarrow {
   position: absolute;
   text-align: left;
   margin-left: 1em;
   bottom: -2ex;
   line-height: 2ex;
   z-index: 1;
   color: var(--hopscript-color);
   font-size: 150%;
}
</style>

