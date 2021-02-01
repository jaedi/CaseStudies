//Swap the values of two arrays


//Array assignment and declaration of arrays
let array1 = [25, 90];
console.log(`Array 1: ${array1}`);
let array2 = [55, 22];
console.log(`Array 2: ${array2}`);

//Swap
//array2 = array1
//array 1 = array2

/*
Normally we do have to declare temp variable to store the arrays. 

let temp;
temp = array1;
array1 = array2;
array2 = temp;

But we can now do this...
*/
[array2, array1] = [array1, array2];


//Display Results
console.log(`Array 1 new values: ${array1}`);

console.log(`Array 2 new values: ${array2}`);





//Personal log

/* 
There's a lot to learn... so excited!
*/