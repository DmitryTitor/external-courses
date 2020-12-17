import { parent, arrow, menu, itemTextArray, createDropDownHeaderMenu } from '../header/header.js';
import { addButtons, disableEnableAddButtons, deleteDropDownMenus } from './addButtons.js';

createDropDownHeaderMenu(parent, arrow, menu, itemTextArray);

const tasksString = localStorage.getItem("tasks");
const tasks = JSON.parse(tasksString);
let idCount = +localStorage.getItem("id-count");

const blocks = {
  backlog: document.querySelector('.main__backlog .task_block__div'),
  ready: document.querySelector('.main__ready .task_block__div'),
  inProgress: document.querySelector('.main__in_progress .task_block__div'),
  finished: document.querySelector('.main__finished .task_block__div'),
};

const taskFooters = {
  backlog: document.querySelector('.main__backlog > .task_block__div_Button_Menu'),
  ready: document.querySelector('.main__ready > .task_block__div_Button_Menu'),
  inProgress: document.querySelector('.main__in_progress > .task_block__div_Button_Menu'),
  finished: document.querySelector('.main__finished > .task_block__div_Button_Menu'),
};

const taskBlocksOrder = ['backlog', 'ready', 'inProgress', 'finished'];

const renderTasks = () => {
  localStorage.setItem('id-count', `${idCount}`);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  Object.keys(tasks).forEach(key => {
    blocks[key].innerHTML = '';
    tasks[key].forEach(task => {
      const taskElem = document.createElement('textarea');
      taskElem.setAttribute('readonly', true);
      taskElem.innerText = task.title;
      taskElem.id = task.id;
      taskElem.className = 'task_block__task';
      blocks[key].appendChild(taskElem)
    })
  })

  disableEnableAddButtons(taskBlocksOrder, tasks);
}

taskBlocksOrder.forEach(key => {
  if (key === 'backlog') {
    initionalBacklogButtonClick(key);
  } else {
    addButtons[key].addEventListener('click', () => {
      deleteDropDownMenus(taskBlocksOrder, taskFooters, false, key);
      if (taskFooters[key].children[1] && taskFooters[key].children[1].getAttribute('class') === 'main__drop_down') {
        taskFooters[key].removeChild(taskFooters[key].children[1]);
        addButtons[key].classList.remove('task_block__add_task_selected');
      } else {
        const menu = document.createElement('div');
        const taskView = taskBlocksOrder[taskViewCalc(key) - 1];
        const arr = tasks[taskView];

        addButtons[key].classList.add('task_block__add_task_selected');
        menu.classList.add('main__drop_down');

        arr.forEach(element => {
          menu.appendChild(createMenuItem(element.title, 'main_drop_down__item', 'div', element.id, key, taskView));
        })

        taskFooters[key].appendChild(menu);
      }
    })
  }
});

function taskViewCalc(key) {
  return taskBlocksOrder.findIndex((element) => {
    if (element !== key) {
      return false;
    }

    return element;
  });
}

function initionalBacklogButtonClick(key) {
  addButtons[key].addEventListener('click', () => {
    if (taskFooters[key].children[0].getAttribute('class') === 'create_task') {
      pushCreatedTask(key, target);
    } else {
      createTaskTextareaToInput(key);
    }
  });

  return undefined;
}

function pushCreatedTask(key, eventTarget) {
  if (!eventTarget || !eventTarget.value) {
    return undefined;
  }

  idCount += 1;
  tasks[key].push({ id: idCount, title: eventTarget.value })
  renderTasks();

  return undefined;
}

function createTaskTextareaToInput(key) {
  const textarea = document.createElement('textarea');
  textarea.classList.add('create_task');
  addButtons[key].parentElement.insertBefore(textarea, addButtons[key]);
  textarea.addEventListener('blur', ({ target: { value } }) => {
    if (!value) {
      return undefined;
    }

    idCount += 1;
    tasks[key].push({ id: idCount, title: value })
    textarea.remove();
    renderTasks();

    return undefined;
  })
}

function createMenuItem(text, className, containerClass, id, key, previousKey) {
  const newElement = document.createElement(containerClass);

  newElement.classList.add(className);
  newElement.innerHTML = text;
  newElement.id = id;
  newElement.addEventListener('click', ({ target }) => {
    let id2 = target.getAttribute('id');
    let text2 = target.innerHTML;

    tasks[key].push({ id: id2, title: text2 })
    target.remove();

    const spliceIndex = tasks[previousKey].findIndex(element => {
      if (+element.id === +id2) {
        return true;
      }

      return false;
    });

    tasks[previousKey].splice(spliceIndex, 1);

    deleteDropDownMenus(taskBlocksOrder, taskFooters);
    renderTasks();
  })

  return newElement;
}

renderTasks();
