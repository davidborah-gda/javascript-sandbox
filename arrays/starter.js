const nums = [1, 2, 3];
const letters = ['a', 'b', 'c'];

console.log('nums', nums);
console.log('letters', letters);

//Grab an element
//arrays are zero (0) indexed
console.log('The 0th element of nums is ', nums[0]);
console.log('The index 2 element of letters ', letters[2]);
console.log(letters[5]);  //this will return undefined


//change an element
nums[0] = 4;
letters[10] = q;  //This is BAD because we now have a gap
console.log('nums: ', nums);
console.log('letters: ', letters);

console.log(letters[5]);  // still undefined because the array doesn't have an element there
