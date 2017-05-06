// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 03 **SOLUTION**

function ifElse(condition, trueFunction, falseFunction) {
  if (condition) {
    trueFunction()
  } else {
    falseFunction()
  }
}

const x = 1

ifElse(x === 1, function() {
  console.log("x is 1")
}, function() {
  console.log("x is not 1")
})
