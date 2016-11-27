const DotBoxClass = function(val) {
  this.value = val;
};


DotBoxClass.prototype = {
  map(f) {
    let newItem;
    if(Array.isArray(this.value)) {
      newItem = this.value.map((val, index, arr) => f(val, index, arr));
    } else {
      newItem = f(this.value);
    }
    return new DotBoxClass(newItem);
  },
  mapTo(val) {
    return new DotBoxClass(val);
  },
  reduce(func, initVal) {
    let newItem;
    if(Array.isArray(this.value)) {
      newItem = this.value.reduce(func, initVal);
    } else {
      newItem = [this.value].reduce(func, initVal);
    }
    return new DotBoxClass(newItem);
  },
  fork(condition, error, success) {
    return condition(this.value)?
      success(this.value) :
      error(this.value);
  },
  print() {
    return this.value;
  }
};









const DotBox = {
  of(val){
    return new DotBoxClass(val)
  }
};

module.exports = DotBox;






