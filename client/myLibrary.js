
// here's a function
function say(text) {
  console.log(text);
};

// we attach the function to exports, letting anyone who 'require's us to use it
exports.say = say;

// we can also attach functions straight to exports
exports.doSomething = function (func) {
  console.log('doSomething called ' + ++this.count + ' times.');
  func();
};

// can be any value
exports.count = 0;
