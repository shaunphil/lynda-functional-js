// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 02 **SOLUTION**

callWith2Arguments(2, 7, add) // => add(2, 7) => 2 + 7
callWith2Arguments(5, 3, subtract) // => subtract(5, 3) => 5 - 3
callWith2Arguments(1, 8, function(x, y) {
  return x * x + y * y
}) // => 1 * 1 + 8 * 8

function callWith2Arguments(arg1, arg2, aFunction) {
  return aFunction(arg1, arg2)
}

function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}
