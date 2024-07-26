/*=====================================================================*/
/*    serrano/diffusion/talk/jsaot17/math.js                           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Sat Aug 26 14:50:17 2017                          */
/*    Last change :  Mon Aug 28 15:07:23 2017 (serrano)                */
/*    Copyright   :  2017 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    Match facilities                                                 */
/*=====================================================================*/
"use strict";

// https://www.w3schools.com/charsets/ref_utf_math.asp
// https://www.w3schools.com/charsets/ref_utf_misc_symbols.asp
// https://www.w3schools.com/charsets/ref_utf_geometric.asp
// https://www.w3schools.com/charsets/ref_utf_letterlike.asp

exports.GAMMA = function( attrs = {}, nodes = undefined ) {
   if( nodes ) {
      return <span id=${attrs.id || false} class=${attrs.class || "sym"}>
        &Gamma;${nodes}
      </span>;
   } else {
      return <span id=${attrs.id || false} class=${attrs.class || "sym"}>&Gamma;</span>;
   }
}

exports.SQCUP = function( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "op"}>&#x2294</span>;
}

exports.BIGTRIANGLEDOWN = function( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "op"}>&#x26DB</span>;
}

exports.VDASH = function( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "op"}>&#x22A2;</span>;
}

exports.BOTTOM = function( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "op"}>&perp;</span>;
}

exports.TOP = function( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "op"}>&#x22a4;</span>;
}

exports.OPLUS = function( attrs = {}, nodes ) {
   return <span id=${attrs.id || false} class=${attrs.class || "op"}>&oplus;</span>;
}

exports.TAU = function( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "greek"}>&tau;</span>;
}

exports.DELTA = function( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "greek"}>&delta;</span>;
}

exports.KAPPA = function( attrs = {}, _ = undefined ) {
   return <span id=${attrs.id || false} class=${attrs.class || "greek"}>&kappa;</span>;
}

exports.VAR = function( attrs = {}, ... nodes ) {
   return <span id=${attrs.id || false} class=${attrs.class || "var"}>${nodes}</span>;
}

exports.ARROWRIGHT = function( attrs = {}, nodes ) {
   return <span id=${attrs.id || false} class=${attrs.class || "arrow"}>&rarr;</span>;
}

exports.DARROWRIGHT = function( attrs = {}, nodes ) {
   return <span id=${attrs.id || false} class=${attrs.class || "arrow"}>&#x21d2;</span>;
}

exports.KEYWORD = function( attrs = {}, nodes ) {
   return <span id=${attrs.id || false} class=${attrs.class || "keyword"}>${nodes}</span>;
}

exports.LANGLE = function( attrs = {}, nodes ) {
   return <span style="font-size: 80%" id=${attrs.id || false} class=${attrs.class || "angle"}>&#x3008;</span>;
}

exports.RANGLE = function( attrs = {}, nodes ) {
   return <span style="font-size: 80%" id=${attrs.id || false} class=${attrs.class || "angle"}>&#x3009;</span>;
}

exports.TYRULE = function( attrs = {}, ... body ) {
   var nodes = body.filter( n => typeof n == "xml-element" );
   return <table class="tyrule math">
     <tr>
       <td class="fraq">
	 ${nodes[ 0 ]}
       </td>
       <td class="tyrule-name" rowspan="2">
	 (${attrs.name})
       </td>
     </tr>
     <tr>
       <td>
         ${nodes[ 1 ] }
       </td>
     </tr>
   </table>
}
