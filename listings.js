/*=====================================================================*/
/*    serrano/diffusion/talk/icfp24/listings.js                        */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Sat Nov 14 08:32:31 2015                          */
/*    Last change :  Tue Jul 23 22:43:06 2024 (serrano)                */
/*    Copyright   :  2015-24 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Listings                                                         */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    The module                                                       */
/*---------------------------------------------------------------------*/
import * as md from "@hop/markdown";
import * as fontifier from "@hop/fontifier";

export { LSTINPUTLISTING };

/*---------------------------------------------------------------------*/
/*    range ...                                                        */
/*---------------------------------------------------------------------*/
function range(linerange) {
   const s = linerange.split(",");
      
   return s.map(function(p) {
      const m = p.match(/[ ]*([0-9]+)-([0-9]+)[ ]*/);
      return { beg: parseInt(m[1]), end: parseInt(m[2]) };
   });
}
   
/*---------------------------------------------------------------------*/
/*    LSTINPUTLISTING ...                                              */
/*---------------------------------------------------------------------*/
function LSTINPUTLISTING(attrs, ...nodes) {
   const path = attrs.src;
   const lang = attrs.language ? fontifier[attrs.language] : fontifier.hopscript;

   const ip = #:open-input-file(#:js-tostring(path, #:%this));
   const clazz = attrs.class ? attrs.class + " listings" : (attrs.language ? attrs.language + " listings" : "listings");

   if (!ip) {
      throw new Error('Cannot find file "' + path + '"');
   }

   try {
      if (!attrs.linerange) {
      	 return <PRE class=${clazz} step=${attrs.step}><CODE class="fontifier-prog">${lang(ip, undefined, undefined)}</CODE>${nodes}</PRE>;
      } else {
 	 return <PRE class=${clazz} step=${attrs.step}><CODE class="fontifier-prog">${range(attrs.linerange).map(({beg, end}) => lang(ip, beg, end))}</CODE>${nodes}</PRE>;
      }
   } finally {
      #:close-input-port(ip);
   }
}

/*---------------------------------------------------------------------*/
/*    include ...                                                      */
/*---------------------------------------------------------------------*/
export function include( path, lang = undefined, beg = undefined, end = undefined ) {
   const ip = #:open-input-file( #:js-tostring( path, #:%this ) );
   
   if( !ip ) {
      throw new Error( 'Cannot find file "' + path + '"' );
   }

   if( lang == undefined ) {
      lang = fontifier.hopscript;
   }

   try {
      return <md.PRE><md.CODE class="fontifier-prog">${lang( ip, beg, end )}</md.CODE></md.PRE>
   } finally {
      #:close-input-port( ip );
   }
}
