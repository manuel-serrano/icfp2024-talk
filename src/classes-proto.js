const Base = (function() {
  function Base() {
    this.msg = "hello world";
  }
		 
  Base.prototype.baseMet = 
    function() {
      return this.msg;
    }
		    
  return Base;
 })();

const Sub = (function (_super) {
  function Sub() {
    _super.apply(this, arguments);
    return this;
  }
		
  Sub.prototype.__proto__ = 
    _super.prototype;
		
  Sub.prototype.subMet = 
    function() {
      return _super.prototype
                   .baseMet
                   .call(this);
    }
		   
  return Sub;
 }(Base);
    
    
   
		 
   
