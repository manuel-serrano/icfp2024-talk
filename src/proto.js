class Base {
  msg;
  constructor() {
    this.msg = 'hello world';
  }
  baseMet() {
    return this.msg;
  }
}

const i = new Base();
/*#[step=1-4]@dyn#*/delete i.msg;/*#/[step=1-3]@dyn#*/
/*#[step=2-4]@dyn#*/i.name = "foo";/*#/[step=2-3]@dyn#*/
/*#[step=3-4]@dyn#*/Base.prototype.extMet = function() { } ;/*#/[step=3]@dyn#*/

/*#[step=4]@dyn#*/class Other extends i.baseMet { }/*#/[step=4]@dyn#*/
