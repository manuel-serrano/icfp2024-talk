/*#[step=1-7]sealed@dyn#*/// @sealed/*#/[step=1-7]sealed@dyn#*/
class Base {
  /*#prop#*/msg;/*#/prop#*/
  constructor() {
    /*#noreturn#*/this.msg = 'hello world';/*#/noreturn#*/
  }
  baseMet() {
    return /*#welltyped#*/this.msg;/*#/welltyped#*/
  }
}

const i = new Base();
/*#[step=1-7]unconf@strike3#*/delete i.msg;/*#/[step=1-7]unconf@strike3#*/
/*#[step=2-7]@strike3#*/i.name = "foo";/*#/[step=2-7]@strike3#*/
Base.prototype./*#[step=3-7]@strike4#*//*#metproto#*/extMet/*#/metproto#*/ = function() { };/*#/[step=3-7]@strike4#*/
/*#[step=2-7]#*/// @sealed/*#/[step=2-7]#*/
class Other extends /*#[step=6]@strike2#*//*#superclass#*/i.baseMet/*#/superclass#*/ { }/*#/[step=6]@strike2#*/

/*#@extend#*/class/*#/@extend#*/ Unsealed extends Base { }

/*#@extend#*/const i = new Unsealed();/*#/@extend#*/
/*#@extend#*/i.name = "foo"; /*#/@extend#*/
/*#@extend#*/Unsealed.prototype.extMet = function() { };/*#/@extend#*//*#[step=7]#*/ /*#/[step=7]#*/
