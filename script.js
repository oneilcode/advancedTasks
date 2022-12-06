'use strict';

//задание 1
//способ 1

let lang = 'ru';

let ruArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let enArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if (lang === 'ru') {
   console.log(ruArray);
} else {
   console.log(enArray);
}

//способ 2

switch (lang) {
   case 'ru':
      console.log(ruArray);
      break;
   default:
      console.log(enArray);
}

//способ 3

let langArray = [
   ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
   ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];

let langResult = lang === 'ru' ? console.log(langArray[0]) : console.log(langArray[1]);



//задание 2
let namePerson = prompt('Введите ваше имя');

let result = namePerson === 'Артем' ? console.log('директор') : namePerson === 'Александр' ?
   console.log('преподаватель') : console.log('студент');