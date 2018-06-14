
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

//Exercise: I want to print the numbers 3-13 to the screen (one per line with a for loop)

for(let i = 3; i < 14; i += 1){
    console.log(i);
    }
// With a WHILE LOOP 3-13

let y = 3;
while(y < 14){
    console.log(y);
    y += 1;
}

//Exercise: I want to print every OTHER number starting at 4 and ending at 16 (one per line)

let z = 4;
while(z <= 16){
    console.log(z);
    z += 2;
}

