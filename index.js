'use strict';

/*
Даны 2 кнопки
При наведении на кнопку нужно поменять текст на текст с другой кнопки
*/

const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");

const listener = (e) => {
  if(btnOpen.innerText !== btnClose.innerText) {
    let temp = btnOpen.innerText;
    btnOpen.innerText = btnClose.innerText;
    btnClose.innerText = temp;
  }
};

btnClose.addEventListener("mouseover", listener);
btnOpen.addEventListener("mouseover", listener);