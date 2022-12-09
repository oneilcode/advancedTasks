'use strict';

//Усложненное задание Урока 5 номер 2 (2.1)
let arr = ['253', '145', '48', '347', '792', '111', '220'];

for (let i = 0; i < arr.length; i++) {
   if (arr[i].startsWith(2) || arr[i].startsWith(4)) {
      console.log(arr[i]);
   }
}

//Усложненное задание Урока 5 номер 2 (2.2)

const n = 100;
for (let i = 1; i <= n; i++) {
   for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j < i) {
         break;
      } else if (j === i) {
         console.log("Делители этого числа 1 и  " + i);
      }
   }
}