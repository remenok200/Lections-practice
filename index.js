const div = document.querySelector('#root');

function listener(e) {
  div.style.backgroundColor = e.target.dataset.color;
}

div.addEventListener('click', listener);