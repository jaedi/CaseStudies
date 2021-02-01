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

//Swap arrays

// Array swapped is executed like this
    //setA[0] = setB[0]
    //setA[1] = setB[1]
    //setA[2] = setB[2]
//or
    //setA[array1] = setB[array3]  ----- Array 1 is given the value of Array 3
    //setA[array2] = setB[array1]  ----- Array 2 is given the value of Array 1
    //setA[array3] = setB[array2]  ----- Array 3 is given the value of Array 2
//Array swap complete
[array1, array2, array3] = [array3, array1, array2];


//Display Results
console.log(`Array 1 new values: ${array1}`);

console.log(`Array 2 new values: ${array2}`);

console.log(`Array 3 new values: ${array3}`);