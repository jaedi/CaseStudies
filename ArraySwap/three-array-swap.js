//We want array1 to be at array3
//array 2 to be at array 1
//array 3 to be at array 2


//array1 = array3
//array2 = array1
//array3 = array2

let array1 = [25, 90];
console.log(`Array 1: ${array1}`);
let array2 = [55, 22];
console.log(`Array 2: ${array2}`);
let array3 = [88, 13];
console.log(`Array 3: ${array3}`);

[array1, array2, array3] = [array3, array1, array2];

console.log(`Array 1 new values: ${array1}`);

console.log(`Array 2 new values: ${array2}`);

console.log(`Array 3 new values: ${array3}`);