const tasksString = localStorage.getItem("tasks");
const tasks = JSON.parse(tasksString);
const div = document.querySelector('.main');
const input = document.querySelector('.search');
const timeDelay = 1500;

input.addEventListener('input', debounce(() => {
  const serchSymbols = input.value;
  const foundedTasks = tasks.filter((element) => {
    if (element.name.indexOf(serchSymbols) === 0) {
      return true;
    }

    return false;
  });

  render(foundedTasks);
}, timeDelay));

render(tasks);

function render(foundedTasks) {
  deleteChilds();
  foundedTasks.forEach(task => {
    const taskElem = document.createElement('textarea');
    taskElem.setAttribute('readonly', true);
    taskElem.innerText = task.name;
    taskElem.id = task.id;
    taskElem.className = 'task';
    div.appendChild(taskElem);
  })
}

function deleteChilds() {
  while (div.children[1]) {
    div.children[1].remove();
  }
}

function debounce(func, delay, args) {
  let isTime = false;

  return function() {
    if (isTime) {
      return undefined;
    }

    func.apply(this, args);
    isTime = true;

    setTimeout(() => {
      isTime = false;
      func.apply(this, args);
    }, delay);

  return undefined;  
  };
}
