// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 02 **SOLUTION**

function createCounter(count) {
  return {
    increment: function() {
      count = count + 1
    },

    currentValue: function() {
      return count
    }
  }
}

const myCounterStartAt5 = createCounter(5)

console.log(myCounterStartAt5.currentValue())

myCounterStartAt5.increment()
myCounterStartAt5.increment()

console.log(myCounterStartAt5.currentValue())
