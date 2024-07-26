/*=====================================================================*/
/*    serrano/diffusion/talk/ecoop22/slides/bench.js                   */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Thu Jun  2 14:26:54 2022 (serrano)                */
/*    Copyright   :  2015-22 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Inline Caches                                                    */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";

export { bench };

/*---------------------------------------------------------------------*/
/*    bench ...                                                        */
/*---------------------------------------------------------------------*/
const bench = <impress.slide title="benchmarks">
   <div class="center">
     <div class="bench">BENCHMARKS</div>
     <div class="ref"><span class="suite">Octane*</span> (&times; 4)</div>
     <div class="ref"><span class="suite">JetStream2*</span> (&times; 3)</div>
     <div class="ref"><span class="suite">BglStone</span> (&times; 1)</div>
     <div class="ref"><span class="suite">PyPerformance</span> (&times; 5)</div>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
bench.css = <style>
.bench:nth-child(1) {
   letter-spacing: 0.2em;
   margin-top: 1ex;
}

.bench {
  font-weight: bold;
  color: var(--greydark);
  font-size: 180%;
  line-height: 90%;
}
.ref { 
  color: var(--grey);
  font-size: 60%;
  margin-top: 1ex;
  line-height: 1.5ex;
}
.suite {
  font-weight: bold;
}
</style>;
