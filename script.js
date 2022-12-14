'use strict';

const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const body = document.body;
const today = new Date().getDay() - 1;

week.forEach((item, index) => {
   let newDay = document.createElement('div');
   switch (index) {
      case today:
         newDay.style.fontWeight = 'bold';
         break;
      case 5:
      case 6:
         newDay.style.fontStyle = 'italic';
         break;
   }
   newDay.textContent = item;
   body.appendChild(newDay);
});