class /*#@es6class#*/Base/*#/@es6class#*/ {
  /*#@es6var#*/msg/*#/@es6var#*/;
  /*#@es6ctor#*/constructor()/*#/@es6ctor#*/ {
    this.msg = 'hello world';
  }
  /*#@es6met#*/baseMet()/*#/@es6met#*/ {
    return this.msg;
  }
}

class /*#@es6class#*/Sub/*#/@es6class#*/ extends /*#@es6sub#*/Base/*#/@es6sub#*/ {
  /*#@es6met#*/subMet()/*#/@es6met#*/ {
    return /*#@es6super#*/super/*#/@es6super#*/.baseMet();
  }
}

const i = new Sub();
i.subMet();
