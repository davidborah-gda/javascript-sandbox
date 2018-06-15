const numbers = [1, 2, 3];
const letters = ['a', 'b','c'];

//Exercise: I want to print every element of numbers to the screen (one per line)

for (let i = 0; i < numbers.length; i += 1){
    const element = numbers[i]
    console.log(element); 
}

//Exercise: I want to print every element of letters to the screen (One per line)

for (let i = 0; i < letters.length; i += 1){
    const element = letters[i]
    console.log(element); 
}

//some built in methods

//Exercise: I want to print every element of numbers with forEach
// With an anonymous function
const result = numbers.forEach(function(element, index){
    console.log(element);
});
console.log(result);

//with a FAT ARROW 

numbers.forEach((element, index) => {
    console.log(element);
});