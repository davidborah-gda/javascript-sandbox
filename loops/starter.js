
// For loops are good when you know "how many"
//  While loops are good when you need to do something "until a condition changes"


//  Exercise: I want to print the numbers 1-10 with each number on a new line.
//  WITHOUT a loop

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

//WITH a FOR LOOP
//     start    stop    step
for(let i = 1; i < 11; i += 1){  //could be i <= 10 also
console.log(i);
}

//  console.log(i);  // doesn't exist becuase of the use of let

//With a WHILE LOOP
let x = 1;
while(x < 11){
    console.log(x);
    x += 1;   // this is just opinion
    // alternative to above  x++ or ++x
}