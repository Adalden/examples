// instead of using exports.function_name, you can use module.exports

function createThing(initial) {
  // default value is 0
  var count = initial || 0;

  return {
    add: function () {
      ++count;
    },
    sub: function () {
      --count;
    },
    get: function () {
      return count;
    }
  }
};

module.exports = createThing;
// if you do this, then you may NOT use exports.func_name anywhere else in the file
