/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/news.js                    */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Jun  1 06:44:43 2022                          */
/*    Last change :  Thu Jun  2 14:14:16 2022 (serrano)                */
/*    Copyright   :  2022 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    o.m                                                              */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";

export { news };

/*---------------------------------------------------------------------*/
/*    news                                                             */
/*---------------------------------------------------------------------*/
const news = <impress.slide title="o.m()">
   <div class="center">new <span>S</span><div class="scaled">()</div></div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css                                                              */
/*---------------------------------------------------------------------*/
news.css = <style>
.body {
  color: var(--greydark);
  font-weight: bold;
  font-size: 350%;
  margin-top: 1ex;
}

div > span {
  color: var(--red);
}

.scaled {
  display: inline-block;
  transform: scaleY(0.8);
}
</style>

