function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (complement === array[j]) return true;
    }
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Loop through each element of the array of numbers
  for the current number, identify a complementary number that adds to our target
  Loop through the other numbers in the array
    check if any of the remaining numbers equal to the complement
      if yes, return true
  if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  we start by looping through every single item in the array
  for every number we have, we calculate its complement by subtracting it from the target
  then we loop through the rest of the array and see if any number equals this complement
  once we find such pair, return true
  If after going through all elements of the array, we don't find such a pair, we return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

   console.log("Expecting: true");
   console.log("=>", hasTargetSum([4, 7, 1, 12, 18, 8], 11));

   console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
