const todoState = [];

const form = document.querySelector('#addTask');
const taskList = document.querySelector('#taskList');

function listener(e) {
  e.preventDefault();
  
  todoState.push(form.elements.task.value);
  
  const message = document.createElement('li');
  message.textContent = form.elements.task.value;
  taskList.append(message);

  form.reset();
}

form.addEventListener('submit', listener);