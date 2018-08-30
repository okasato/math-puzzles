/*
math puzzle 1
majorityDecision

*/

const majorityDecision = (numberOfVoters, count) => {
  for (let left = 0; left <= numberOfVoters; left += 1) {
    for (let right = left; right <= numberOfVoters; right += 1) {
      if (left > right - left) {
        if (left !== numberOfVoters - right) {
          count += 1;
        }
      } else if (left < right - left) {
        if (right - left !== numberOfVoters - right) {
          count += 1;
        }
      } else {
        if (left < numberOfVoters - right) {
          count += 1;
        }
      }
    }
  }
  console.log(left, right - left, numberOfVoters - right);
  return count;
}