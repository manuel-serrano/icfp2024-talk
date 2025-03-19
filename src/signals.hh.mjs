const SudokuMachine = strategies => hiphop module() {
   inout must00 = new Set() combine (x, y) => x.union(y);
   inout must01 = new Set() combine (x, y) => x.union(y);
   /**&vellip;**/
   inout must88 = new Set() combine (x, y) => x.union(y);
   inout cannot00 = new Set() combine (x, y) => x.union(y);
   /**&vellip;**/
