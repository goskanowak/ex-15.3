'use strict';

// Ex 1
var hello = 'Hello';
var world = 'World!';

console.log(hello + ', ' + world);

// Ex 2
var multiply = function multiply() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};

console.log(multiply(2, 5));
console.log(multiply(6, 9));
console.log(multiply(2));

// Ex 3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (x, y) {
    return (x + y) / args.length;
  });
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 9, 1, 8));

//Ex 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

//Ex 5 
var data = [1, 4, 'Iwona', false, 'Nowak'];
var id = data[0],
    firstname = data[2],
    lastname = data[4];


console.log(id + ', ' + firstname + ', ' + lastname);
