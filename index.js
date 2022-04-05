"use strict";

function counter() {
  let i = 0;

  function getCounter() {
    return i;
  }

  function increment() {
    i++;
    return i;
  }

  function decrement() {
    i--;
    return i;
  }

  return {
    getCounter: getCounter,
    increment: increment,
    decrement: decrement,
  };
}

// TEST
const obj = new counter();
console.log(`Счетчик до манипуляций: ${obj.getCounter()}`);
obj.increment();
console.log(`Счетчик после инкремента: ${obj.getCounter()}`);
obj.decrement();
console.log(`Счетчик после декремента: ${obj.getCounter()}`);
