const LiarParadox = hiphop module() {
   signal whatIsThisSignal;

   if (whatIsThisSignal.nowval) {
      ;
   } else {
      emit whatIsThisSignal(true);
   }
}

const Ambiguous = hiphop module() {
   signal whatIsThisSignal;

   if (whatIsThisSignal.nowval) {
      emit whatIsThisSignal(true);
   }
}

const SuperAmbiguous = hiphop module() {
   signal whatIsThisSignal;

   if (whatIsThisSignal.nowval) {
      emit whatIsThisSignal(true);
   } else {
      emit whatIsThisSignal(true);
   }
}
