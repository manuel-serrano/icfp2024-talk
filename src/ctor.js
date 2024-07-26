class Point2d {
   x; y;
   constructor(/*#[step=0-3]argeX@arge#*/x/*#/[step=0-3]argeX@arge#*/, /*#[step=0-3]argeY@arge#*/y/*#/[step=0-3]argeY@arge#*/) {
      this.x = x; this.y = y;
   }
}

class Point3d extends Point2d {
   z;
   constructor(/*#[step=0-3]argX@arg#*/x/*#/[step=0-3]margX@arg#*/, /*#[step=0-3]argY@arg#*/y/*#/[step=0-3]argY@arg#*/, /*#[step=0-3]argZ@arg#*/z/*#/[step=0-3]argZ@arg#*/) {
      super(/*#[step=0-3]formalX@arge#*/x/*#/[step=0-3]formalX@arge#*/, /*#[step=0-3]formalY@arge#*/y/*#/[step=0-3]formalY@arge#*/);
      this.z = z;
   }
}

/*#[step=2-3]@ctor#*/class /*#mypoint#*/NamedPoint/*#/mypoint#*/ extends (config.2d ? Point2d : Point3d) {/*#/[step=2-3]@ctor#*/
   /*#[step=2-3]#*/name;/*#/[step=2-3]#*/
/*#[step=2-3]#*/}/*#/[step=2-3]#*/

/*#[step=2-3]@ctor#*/new NamedPoint(/*#[step=2-3]myargX@arg#*/1/*#/[step=0-3]myargX@arg#*/, /*#[step=2-3]myargY@arg#*/20/*#/[step=0-3]myargY@arg#*/, /*#[step=2-3]myargZ@arg#*/-1/*#/[step=2-3]myargZ@arg#*/, /*#[step=2-3]myargN@arg#*/"end"/*#/[step=2-3]myargN@arg#*/);/*#/[step=2-3]@ctor#*/
