// this file, 'main.js', gets run right away.

// this exposes require to your jade. it lets us
// require 'render.js' which is in the requires folder
window.require = require;

// load some libraries
var myLibrary   = require('./myLibrary')
  , yourLibrary = require('./yourLibrary')
  ;

// call some functions on my library
myLibrary.say('something');

for (var i = 0; i < 5; ++i) {
  myLibrary.doSomething(function () {
    console.log('hi there');
  });
}

// because I exposed count, I can get to it here
console.log(myLibrary.count);

// notice how 'yourLibrary' IS the function that you created in 'yourLibrary.js'
var counter = yourLibrary();
console.log(counter.get());
counter.add();
counter.add();
console.log(counter.get());
counter.sub();
console.log(counter.get());

var counter = yourLibrary(2);
console.log(counter.get());
counter.sub();
counter.sub();
counter.sub();
counter.sub();
counter.sub();
console.log(counter.get());
