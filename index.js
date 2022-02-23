let counter = 0;

function clickHandler() {
    alert(`На кнопку нажали. Количество нажатий: ${++counter}`);
}

const [button] = document.getElementsByTagName('button');

button.addEventListener('click', clickHandler);