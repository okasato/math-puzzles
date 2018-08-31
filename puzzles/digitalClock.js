/*
math puzzle 4
digital clock
*/

const numberOfOnInDisplay = {
  0: 6,
  1: 2,
  2: 5,
  3: 5,
  4: 4,
  5: 5,
  6: 6,
  7: 3,
  8: 7,
  9: 6
};

const countTime = input => {
  let result = 0;

  for (let i = 0; i < 24; i += 1){
    let hour = numberOfOnInDisplay[Math.floor(i / 10)] + numberOfOnInDisplay[i % 10];
    for (let j = 0; j < 60; j += 1){
      let minute = numberOfOnInDisplay[Math.floor(j / 10)] + numberOfOnInDisplay[j % 10];
      for (let k = 0; k < 60; k += 1){
        let second = numberOfOnInDisplay[Math.floor(k / 10)] + numberOfOnInDisplay[k % 10];
        let sum = hour + minute + second;       
        if (sum === input) {
          result += 1;
        }
      }
    }
  }
  return result;
}


// const SEVEN_SEGMENT_DISPLAY = {
//   0: {
//     'a': true,
//     'b': true,
//     'c': true,
//     'd': true,
//     'e': true,
//     'f': true,
//     'g': false
//   },
//   1: {
//     'a': false,
//     'b': true,
//     'c': true,
//     'd': false,
//     'e': false,
//     'f': false,
//     'g': false
//   },
//   2: {
//     'a': true,
//     'b': true,
//     'c': false,
//     'd': true,
//     'e': true,
//     'f': false,
//     'g': true
//   },
//   3: {
//     'a': true,
//     'b': true,
//     'c': true,
//     'd': true,
//     'e': false,
//     'f': false,
//     'g': true
//   },
//   4: {
//     'a': false,
//     'b': true,
//     'c': true,
//     'd': false,
//     'e': false,
//     'f': true,
//     'g': true
//   },
//   5: {
//     'a': true,
//     'b': false,
//     'c': true,
//     'd': true,
//     'e': false,
//     'f': true,
//     'g': true
//   },
//   6: {
//     'a': true,
//     'b': false,
//     'c': true,
//     'd': true,
//     'e': true,
//     'f': true,
//     'g': true
//   },
//   7: {
//     'a': true,
//     'b': true,
//     'c': true,
//     'd': false,
//     'e': false,
//     'f': false,
//     'g': false
//   },
//   8: {
//     'a': true,
//     'b': true,
//     'c': true,
//     'd': true,
//     'e': true,
//     'f': true,
//     'g': true
//   },
//   9: {
//     'a': true,
//     'b': true,
//     'c': true,
//     'd': true,
//     'e': false,
//     'f': true,
//     'g': true
//   }
// }