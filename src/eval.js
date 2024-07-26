class Node {
   loc;
   constructor(loc) {
      this.loc = loc;
   }
}

class Number extends Node {
   #val;
   constructor(loc, v) {
      super(loc);
      this.#val = v;
   }
   eval(env) {
      return this.#val;
   }
}

class Var extends Node {
   #id;
   constructor(loc, id) {
      super(loc);
      this.#id = id;
   }
   eval(env) {
      return env[this.#id];
   }
}

class Unary extends Node {
   #op;
   #expr;
   constructor(loc, op, expr) {
      super(loc);
      this.#op = op;
      this.#expr = expr;
   }
   eval(env) {
      switch (this.#op) {
        case "-": return -this.#expr./*#<div>[step=0-2]@eval#*/eval(env)/*#/<div>[step=0-2]@eval#*/;
	case "+": return +this.#expr./*#[step=0-1]@eval#*/eval(env)/*#/[step=0-1]@eval#*/;
        default: throw(New TypeError(this.loc));
      }
   }
}
     
class Binary extends Node {
   #op;
   #left;
   #right;
   constructor(loc, op, left, right) {
      super(loc);
      this.#op = op;
      this.#left = left;
      this.#right = left;
   }
   eval(env) {
      switch (this.#op) {
	case "-": return this.#left./*#[step=0-1]@eval#*/eval(env)/*#/[step=0-1]@eval#*/ - this.#right./*#[step=0-1]@eval#*/eval(env)/*#/[step=0-1]@eval#*/;
	case "+": return this.#left./*#[step=0-1]@eval#*/eval(env)/*#/[step=0-1]@eval#*/ + this.#right./*#[step=0-1]@eval#*/eval(env)/*#/[step=0-1]@eval#*/;
	case "*": return this.#left./*#[step=0-1]@eval#*/eval(env)/*#/[step=0-1]@eval#*/ * this.#right./*#[step=0-1]@eval#*/eval(env)/*#/[step=0-1]@eval#*/;
	case "/": return this.#left./*#[step=0-1]@eval#*/eval(env)/*#/[step=0-1]@eval#*/ / this.#right./*#[step=0-1]@eval#*/eval(env)/*#/[step=0-1]@eval#*/;
        default: throw(New TypeError(this.loc));
      }
   }
}
     
  

 
