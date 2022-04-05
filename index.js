const arr = [];

func(prompt('Сколько раз вызываем функцию?'));

function func(count) {
  if(count > 0) {
  arr.push(prompt(`Какую строку Вы хотите докинуть в массив? Осталось ${count - 1} раз.`));
  func(count - 1);
  }
}

console.log(arr);