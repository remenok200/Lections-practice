const messBtn = document.querySelector('#messBtn');
const body = document.querySelector('body');

messBtn.addEventListener('click', addMessage);

function addMessage() {
    const message = document.createElement('p');
    message.style.color = 'blue';
    message.style.fontSize = '20px';
    message.textContent = prompt('Введите сообщение:');
    body.append(message);
}