// задание 1

let num = 266219;

// задание 2
let array = ('' + num).split('');

console.log(array);

let result = array.reduce((acc, rec) => acc * rec);

console.log(result);

// задание 3

let resultMath = result ** 3;

// задание 4
console.log(String(resultMath).slice(0, 2));