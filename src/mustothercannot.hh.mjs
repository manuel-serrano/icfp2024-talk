const MustOtherCannot = () => hiphop {
   loop {
      let c_must = must00.nowval;
      fork { // house 1: row propagation
	 emit cannot01(c_must);
	 /**&vellip;**/
	 emit cannot08(c_must);
      } par { // house 2: column propagation
	 emit cannot10(c_must);
	 /**&vellip;**/
	 emit cannot80(c_must);
      } par { // house 3: chute propagation
	 emit cannot01(c_must);
	 /**&vellip;**/
	 emit cannot22(c_must);
      }
      yield;
   }
}
      
