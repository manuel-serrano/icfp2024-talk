sealed class Base {
   a0;
   constructor(a0) { this.a0 = 0; }
}

sealed class Sub1 extends Base {
   a1;
}

sealed class Sub2 extends Sub1 {
   a2;
   /*#@src3#*/constructor/*#/@src3#*/(a0, a1, a2) {
      super(a0);
      this.a1 = a1; this.a2 = a2;
   }
}

/*#@src#*/new Sub2(0, 1, 2)/*#/@src#*/;
