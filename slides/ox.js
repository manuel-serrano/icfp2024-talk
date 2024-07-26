/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/ox.js                      */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Jun  1 06:44:43 2022                          */
/*    Last change :  Thu Jun  2 14:14:50 2022 (serrano)                */
/*    Copyright   :  2022 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    o.x                                                              */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";

export { ox };

/*---------------------------------------------------------------------*/
/*    ox                                                               */
/*---------------------------------------------------------------------*/
const ox = <impress.slide title="o.x">
   <div class="center">o.x</div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
ox.css = <style>
.body {
  color: var(--greydark);
  font-weight: bold;
  font-size: 350%;
  margin-top: 1ex;
}
</style>

