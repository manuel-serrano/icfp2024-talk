/* regular */
if (o->hclass == ic.iclass) {         
   v = *(o+ic.index);                 /* inline property    */
} else if (o->hclass == ic.hclass) {  
   v = o->elements[ic.index];         /* extended property  */
} else if (o->hclass == ic.aclass) {  
   v = o->elements[ic.index](o);      /* accessor           */
} else if (o->hclass == ic.pclass) {  
   v = ic->owner->elements[ic.index]; /* prototype property */
} else if (ic.vindex < o->hclass->vtableLen) {  
   v = o->elements[o->hclass->vtable(ic.vindex)]; /* PIC    */
} else {
   v = icReadMiss(o, "x", &ic);       /* cache miss         */
}


/* sealed */
v = *(o+/*#@cnst#*/k/*#/@cnst#*/);
