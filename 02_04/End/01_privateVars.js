// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 01 **SOLUTION**

function createCounter() {
  var count = 0

  return {
    increment: function() {
      count = count + 1
    },

    currentValue: function() {
      return count
    }
  }
}

const myCounter = createCounter()
console.log(myCounter.currentValue())

myCounter.increment()
myCounter.increment()

console.log(myCounter.currentValue())

// myCounter.count = 999 // => ERROR: myCounter does not have property 'count'
