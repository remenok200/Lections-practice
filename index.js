const ans = prompt('Выберите язык, RU, UA или EN');

const greetings = new Map();
greetings.set('RU', 'Привет');
greetings.set('UA', 'Витаю');
greetings.set('EN', 'Hello');

if(greetings.has(ans)) {
  alert(greetings.get(ans));
} else {
  alert(greetings.get('EN'));
}