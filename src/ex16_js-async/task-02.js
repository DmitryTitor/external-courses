const tasksString = localStorage.getItem("tasks");
const tasks = JSON.parse(tasksString);
const div = document.querySelector('.main');
const input = document.querySelector('.search');
const timeDelay = 1500;
let timer;

input.addEventListener('input', debounce((tasksArray) => {
  const foundedTasks = tasksArray.filter((element) => {
    if (element.name.indexOf(input.value) === 0) {
      return true;
    }

    return false;
  });

  render(foundedTasks);
}, timeDelay, [tasks]));

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
      clearTimeout(timer);
      timer = setTimeout(() => {
        isTime = false;
        func.apply(this, args);
      }, delay);

      return undefined;
    }
    
    isTime = true;

  return undefined;  
  };
}
