void Sub2_CTOR(Sub2 *this, jsobj *a0, jsobj *a1, jsobj *a2) {
   { // super base class CTOR inlining
      Sub1 *super = (Sub1 *)this;
      *(&(super->inline0) + 0 * sizeof(jsobj *)) = a0;
   } // CTOR body
   *(&(this->inline0) + 1 * sizeof(jsobj *)) = a1;
   *(&(this->inline0) + 2 * sizeof(jsobj *)) = a2;
}


jsobj *o = GC_malloc(sizeof(jsobj) + 3 * sizeof(jsobj *));

o->__proto__ = Sub2_PROTOTYPE;
o->cmap = Sub2_HIDDENCLASS;
o->elements = 0L;
o->length = 3;

Sub2_CTOR(o, 0, 1, 2);
