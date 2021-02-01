let array1 = [25, 90];
console.log(`Array 1: ${array1}`);
let array2 = [55, 22];
console.log(`Array 2: ${array2}`);

[array2, array1] = [array1, array2];

console.log(`Array 1 new values: ${array1}`);

console.log(`Array 2 new values: ${array2}`);