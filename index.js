/*
Вывести название кнопки с помощью события слушателя
*/

const btn = document.querySelector("#messBtn");

const listener = (e) => {
  console.log(e.target.innerText);
};

btn.addEventListener("click", listener);
