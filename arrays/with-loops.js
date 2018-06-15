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


//Exercise: I want to double every number in numbers.

//const doubled = numbers.map((element, index) => {
//    return element = 2 * element;
//});

const doubled = numbers.map((element, index) => 2 * element);


console.log(numbers);
console.log(doubled);


//Exercise: I want to add a "." to evey element of letters

const withPeriod = letters.map((element, index) => {
    return element = element + ".";
});
console.log(withPeriod);


const otherNumbers = [10, 11, 12, 13, 14];

//Exercise: I want to find the elements that are divisible by 2
//hint: % operator (modulus/modulo) returns the remainder

const evens = otherNumbers.filter((element) => element % 2 === 0);
console.log(evens);

const odds = otherNumbers.filter((element) => element % 2 === 1);
console.log(odds);


const words = ['cat', 'dog', 'cheese', 'ham', 'burrito'];

//Exercise: I want to find the elements of words that are three letters long
//hint check the board and use the %

const threeLetters = words.filter((word) => word.length / 3 === 1);
console.log(threeLetters);

