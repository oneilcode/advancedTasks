// задание 1

const num = 266219;

// задание 2
const array = ('' + num).split('');

console.log(array);

const result = array.reduce((acc, rec) => acc * rec);

console.log(result);

// задание 3

const resultMath = result ** 3;

// задание 4
console.log(String(resultMath).slice(0, 2));