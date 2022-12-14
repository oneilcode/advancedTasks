'use strict';

const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "<i>Суббота</i>", "<i>Воскресенье</i>"];

let today = (6 + new Date().getDay()) % 7;
week[today] = `<b>${ week[today] }</b>`;

document.body.insertAdjacentHTML("afterbegin", week.join("<br>"));