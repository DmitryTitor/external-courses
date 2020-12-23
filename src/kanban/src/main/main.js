import { parent, arrow, menu, itemTextArray, createDropDownHeaderMenu } from '../header/header.js';
import { addButtons, disableEnableAddButtons, deleteDropDownMenus } from './addButtons.js';
import { createMenuItem } from './createMenu.js';
import { getTaskOrder, addNewList, getTasks, getBlocks, getTaskFooters, getAddButtons } from './listOrderOperation.js';

createDropDownHeaderMenu(parent, arrow, menu, itemTextArray);

const tasksString = localStorage.getItem("tasks");
let tasks = JSON.parse(tasksString);
export let taskBlocksOrder = [];
const createListButton = document.querySelector('.header__create-list-div');
let idCount = +localStorage.getItem("id-count");
let blocks = {};
let taskFooters = {};

addNewList('backlog', tasks, blocks, taskBlocksOrder, addButtons, taskFooters, true);
getValues();
addNewList('ready', tasks, blocks, taskBlocksOrder, addButtons, taskFooters, false);
getValues();
addNewList('inProgress', tasks, blocks, taskBlocksOrder, addButtons, taskFooters, false);
getValues();
addNewList('finished', tasks, blocks, taskBlocksOrder, addButtons, taskFooters, false);
getValues();
blocks = document.querySelectorAll('.task_block__div');

createListButton.addEventListener("click", () => {
  if (createListButton.classList.contains('input_list') && document.querySelector('.input_list_area').textLength === 0) {
    document.querySelector('.input_list_area').remove();
    createListButton.classList.remove('input_list');

    return;
  }

  if (createListButton.classList.contains('input_list')) {    
    addNewList(newElement.value, tasks, blocks, taskBlocksOrder, addButtons, taskFooters, true, true);

    return;
  }

  createListButton.classList.add('input_list');
  let newElement = document.createElement('textarea');

  newElement.classList.add('input_list_area');
  newElement.setAttribute('placeholder', 'Введите название нового списка');
  newElement.addEventListener("blur", () => {
    if (createListButton.classList.contains('input_list')) {
      if (newElement.textLength !== 0) {
        addNewList(newElement.value, tasks, blocks, taskBlocksOrder, addButtons, taskFooters, true, true);
        document.querySelector('.input_list_area').remove();
        createListButton.classList.remove('input_list');

        return;
      }
      document.querySelector('.input_list_area').remove();
      createListButton.classList.remove('input_list');
      
      return;
    }
  })
  parent.appendChild(newElement);
  newElement.focus();
})

function getValues() {
  tasks = getTasks();
  blocks = getBlocks();
  taskFooters = getTaskFooters();
  // addButtons = getAddButtons();
}

export const renderTasks = () => {
  localStorage.setItem('id-count', `${idCount}`);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  Object.keys(tasks).forEach((key) => {    
    let index = taskBlocksOrder.findIndex(value => value === key);
    blocks = document.querySelectorAll('.task_block__div');
    blocks[index].innerHTML = '';
    tasks[key].forEach(task => {
      const taskElem = document.createElement('textarea');
      taskElem.setAttribute('readonly', true);
      taskElem.innerText = task.title;
      taskElem.id = task.id;
      taskElem.className = 'task_block__task';
      blocks[index].appendChild(taskElem);
    })
  })

  calcActiveTasks();
  calcFinishedTasks();
  disableEnableAddButtons(taskBlocksOrder, tasks);
}

taskBlocksOrder.forEach(key => {
  if (key === taskBlocksOrder[0]) {
    //initionalBacklogButtonClick(key);
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
        if (arr) {
          addButtons[key].classList.add('task_block__add_task_selected');
          menu.classList.add('main__drop_down');
          
          arr.forEach(element => {
            menu.appendChild(createMenuItem(element.title, 'main_drop_down__item', 'div', element.id, key, taskView, tasks, taskBlocksOrder, taskFooters));
          })
          taskFooters[key].appendChild(menu);
        }
      }
    })
  }
});

export function taskViewCalc(key) {
  return taskBlocksOrder.findIndex((element) => {
    if (element !== key) {
      return false;
    }

    return element;
  });
}

export function initionalBacklogButtonClick(key) {
  addButtons[key].addEventListener('click', () => {
    if (taskFooters[key].children[0].getAttribute('class') === 'create_task') {
      pushCreatedTask(key, event.target);
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

export function calcActiveTasks() {
  let activeNum = 0;
  let active = document.querySelector('.footer__active_tasks');

  for (let i = 1; i < taskBlocksOrder.length-1; i++) {
    activeNum += tasks[taskBlocksOrder[i]].length;
  }

  active.innerHTML = `Active tasks: &lt;${activeNum}&gt;`
}

export function calcFinishedTasks() {
  let finished = document.querySelector('.footer__finished_tasks');
  let finishedNum = tasks[taskBlocksOrder[taskBlocksOrder.length - 1]].length;
  finished.innerHTML = `Finished tasks: &lt;${finishedNum}&gt;`
}

function createTaskTextareaToInput(key) {
  if (addButtons[key].classList.contains('first')) {
    const textarea = document.createElement('textarea');
    textarea.classList.add('create_task');
    addButtons[key].parentElement.insertBefore(textarea, addButtons[key]);
    textarea.addEventListener('blur', ({ target: { value } }) => {
      if (!value) {
        return undefined;
      }
  
      idCount += 1;
      tasks[key].push({ id: idCount, title: value });
      textarea.remove();
      renderTasks();
  
      return undefined;
    })
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
        if (arr) {
          addButtons[key].classList.add('task_block__add_task_selected');
          menu.classList.add('main__drop_down');
          
          arr.forEach(element => {
            menu.appendChild(createMenuItem(element.title, 'main_drop_down__item', 'div', element.id, key, taskView, tasks, taskBlocksOrder, taskFooters));
          })
          taskFooters[key].appendChild(menu);
        }
      }
    })
    let menuItems = addButtons[key].parentNode.children[1];
    if (menuItems && menuItems.value) {
      menuItems.addEventListener('click', () => {
        if (menuItems.parentNode.children[0].classList.contains('task_block__add_task_selected')) {
          menuItems.parentNode.children[0].classList.remove('task_block__add_task_selected');
        }
      })
    }
  }
}

renderTasks();
