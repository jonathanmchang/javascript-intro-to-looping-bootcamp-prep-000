function forLoop(arr) {
  for (var i = 0; i < 25; i++) {
    if (arr[i] === 1 ) {
      arr.push('I am 1 strange loop.')
    } else {
      arr.push('I am ${i} strange loops.')
    }
  }
  return arr
}

function whileLoop(n) {
  var counter = n
  while (counter > 0) {
    console.log('counter')
    counter--
  }
  return 'done'
}
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 || maybeTrue() )
  return array
}
