// @sealed
class /*#@math#*/C/*#/@math#*/ {
   /*#@math#*/M/*#/@math#*/(a0, a1, ...) { /*#@metbody#*/body/*#/@metbody#*/ }
}

class /*#@math#*/C/*#/@math#*/ {
   /*#@math#*/M/*#/@math#*/(a0, a1, ...) { 
     if (isa(this, /*#@math#*/C/*#/@math#*/)) { return /*#unsafec@math#*/M/*#/unsafec@math#*/(a0, a1, ...); }
     if (this instanceof /*#@math#*/C/*#/@math#*/) {
       /*#@metbody#*/body optimized /*#@nofor#*/for/*#/@nofor#*/ size, /*#/@metbody#*/this:Proxy
     } else { /*#@metbody#*/raise an error/*#/@metbody#*/ }
   }

   /*#unsafe@math#*/M/*#/unsafe@math#*/(a0, a1, ...) { /*#@metbody#*/body optimized /*#@nofor#*/for/*#/@nofor#*/ speed, /*#/@metbody#*//*#thisC#*/this/*#/thisC#*/:/*#@math#*/C/*#/@math#*/ }
}
