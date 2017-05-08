// Learning Functional Programming with Javascript
// Chapter 02, Video 05, Exercise 02

function createSafeVersion(func) {
  return function(arg1, arg2) {
    if (n != null && typeof n === ‘number’) {
      if (message != null && typeof message === ‘string’) {
        return func(arg1, arg2)
      }
    }
  }
}

function printMessageNTimes(n, message) {
  for (var i = 0; i < n; i++) { console.log(message) }
}

function getNthLetter(n, string) {
  return string.charAt(n)
}

function getSubstringOfLength(n, string) {
  return string.substring(0, n)
}

const getNthLetterSafe = createSafeVersion(getNthLetter)
getNthLetterSafe(2, “Hello”) // e
getNthLetterSafe(“one”, “hello”) // null
getNthLetterSafe(null, null) // null
