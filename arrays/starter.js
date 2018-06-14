const nums = [1, 2, 3];
const letters = ['a', 'b', 'c'];

console.log('nums: ', nums);
console.log('letters: ', letters);
console.log('length of nums', nums.length);
console.log('length of letters', letters.length);
//grab an element
//arrays are zero indexed
console.log('The 0th element of nums is ', nums[0]);
console.log('The index 2 element of letters  ', letters[2]);
console.log(letters[5]); //this will return undefined

//change an element
nums[0] = 4;
letters[10] = 'q'; //this is BAD!!!! because we now have a gap
console.log('nums: ', nums);
console.log('letters: ', letters);
console.log(letters[5]); // still undefined because the array doesn't have element there

console.log('length of nums', nums.length);
console.log('length of letters', letters.length);