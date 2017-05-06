// Learning Functional Programming with Javascript
// Chapter 02, Video 02, Exercise 02 **SOLUTION**

const DEBUG_ENABLED = true

var debug = null

if (DEBUG_ENABLED)
  debug = printDebugMessage
else
  debug = doNothing

// ...

debug("Some debug message")

// ...

function printDebugMessage(message) {
  console.log("DEBUG: " + message)
}

function doNothing() { }
