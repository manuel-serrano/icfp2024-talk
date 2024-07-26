/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/utils.js                          */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Thu May 26 16:19:55 2022                          */
/*    Last change :  Tue May 31 08:15:07 2022 (serrano)                */
/*    Copyright   :  2022 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    Utilities                                                        */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    Module ...                                                       */
/*---------------------------------------------------------------------*/
import * as fs from "fs";
import * as path from "path";
import { system, systemSync } from "hop:system";

export { gnuplot, tikz, fpx };

/*---------------------------------------------------------------------*/
/*    gnuplot ...                                                      */
/*---------------------------------------------------------------------*/
function gnuplot(file) {
   const svg = file.replace(/[.]plot$/,".svg");
   const dir = path.dirname(file);
   
   if (!fs.existsSync(svg) || fs.statSync(file).ctime > fs.statSync(svg).ctime) {
      console.log("Generating", svg, `[(cd ${dir}; gnuplot ${file} > ${svg})]`);
      systemSync(`sh -c "(cd ${dir}; gnuplot ${file} > ${svg})"`);
   }
      
   return svg;
}
   
/*---------------------------------------------------------------------*/
/*    tikz ...                                                         */
/*---------------------------------------------------------------------*/
function tikz(file) {
   const svg = file.replace(/[.]tex$/,".svg");
   if (!fs.existsSync(svg) || fs.statSync(file).ctime > fs.statSync(svg).ctime) {
      console.log("Generating", svg, `[tikz2svg ${file} ${svg}]`);
      systemSync(`tikz2svg ${file} ${svg}`);
   }
      
   return svg;
}
   
/*---------------------------------------------------------------------*/
/*    fpx ...                                                          */
/*---------------------------------------------------------------------*/
function fpx(fsz) { 
   return Math.round(fsz * 1.8) + "px";
}
