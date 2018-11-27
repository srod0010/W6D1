function sum() {
  let nums = Array.prototype.slice.apply(arguments);
  return nums.reduce((sum, num) => sum + num);
}

function newSum(...args) {
  return args.reduce((sum,num) => sum + num);
}


Function.prototype.myBind = function (context) {
  let args = Array.prototype.slice.apply(arguments);
  let that = this;
  return function () {
    let newArgs = Array.prototype.slice.apply(arguments);
    that.apply(context, args.slice(1).concat(newArgs));
  };
}; 

Function.prototype.newBind = function (context,...bindArgs) {
  return (...callArgs) => {
    this.apply(context, (bindArgs.concat(callArgs)));
  };
};


function curriedSum(numArgs) {
  let numbers = [];
  let _curriedSum = (num) => {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((sum, num) => sum + num);
    } else {
      return _curriedSum;
    }
  };
  
  return _curriedSum;
}

Function.prototype.curry = function (numArgs) {
  let that = this;
  let args = [];
  let _curry = (arg) => {
    args.push(arg);
    
    if (args.length === numArgs) {
      return that.apply(this, args);
    } else {
      return _curry;
    }
  };
  
  return _curry;
};

Function.prototype.newCurry = function (numArgs) {
  let that = this;
  let args = [];
  let _curry = (arg) => {
    args.push(arg);
    
    if (args.length === numArgs) {
      return that(...args);
    } else {
      return _curry;
    }
  };
  
  return _curry;
};

