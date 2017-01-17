// function breakOut(array, changeValue, stopValue) {
//   for (i = 0; i = array.length; i++) {
//     if (array[i] === stopValue) {
//       break
//     }
//     array[i] = changeValue
//   }
//   return array
// }


function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array
}


// function keepGoing (array, changeValue, skipValue) {
//   for (i = 0; i = array.length; i++) {
//     if (array[i] === skipValue) {
//       break
//     }
//     array[i] = changeValue
//   }
//   return array
// }


function keepGoing (array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}

// function findBy(array, findFn) {
//   for (i = 0; i = array.length; i++) {
//     var element = array[i]
//     if (findFn(element)) {
//       return element
//     }
//   }
//   return null
// }


function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    var element = array[i]
    if (findFn(element)) {
      return element
    }
  }
  return null
}
