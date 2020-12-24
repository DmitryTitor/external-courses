import { renderTasks, initionalBacklogButtonClick, taskViewCalc, calcActiveTasks, calcFinishedTasks} from "./main.js";
import { addButtons, disableEnableAddButtons, deleteDropDownMenus } from './addButtons.js';
import { createMenuItem } from './createMenu.js';

const main = document.querySelector('.main');
let blocks2;
let taskFooters2;
let addButtons2;
let tasks2;

const createOptionsList = (container, icon, className) => {
  if (icon.classList.contains(className)) {
    if (container.children[1]) {      
      icon.classList.remove(className);
      container.children[1].remove();
    }

    return;
  }

  let optionsMenu = document.createElement('div');
  let pointDelete = document.createElement('div');

  optionsMenu.classList.add('task_header__options');
  pointDelete.classList.add('drop_down__item');
  pointDelete.innerHTML = 'Delete list';
  pointDelete.classList.add('header_option_open');
  optionsMenu.appendChild(pointDelete);
  container.appendChild(optionsMenu);
  icon.classList.add(className);

  pointDelete.addEventListener('click', () => {
    container.parentNode.remove();
  });
}

export function getTaskOrder(tasks, firstTask, lastTask) {
  let order = [];

  order.push(firstTask);
  Object.keys(tasks).forEach(key => {
    if (key !== firstTask && key !== lastTask) {
        order.push(key);
    }
  });
  order.push(lastTask);

  return order;
}

export function addNewList(listName, tasks, blocks, taskBlocksOrder, addButtons, taskFooters, isFirst = false, isNew = false) {
  blocks2 = blocks;
  taskFooters2 = taskFooters;
  addButtons2 = addButtons;  
  tasks2 = tasks;
  let newList = document.createElement('div');  
  let newListHeaderCont = document.createElement('div');
  let newListHeader = document.createElement('div');
  let newListTaskBlock = document.createElement('div');
  let newListAddButtonMenu = document.createElement('div');
  let newListAddButton = document.createElement('button');

  newListHeader.innerHTML = `
  <span class="task_block__title">${listName}</span>
  <svg class="task_block__menu" width="16" height="5" viewBox="0 0 16 5" xmlns="http://www.w3.org/2000/svg"><path d="M0.212891 2.21484C0.212891 1.70508 0.374023 1.28613 0.696289 0.958008C1.02441 0.629883 1.45801 0.46582 1.99707 0.46582C2.53027 0.46582 2.96387 0.626953 3.29785 0.949219C3.63184 1.26562 3.79883 1.69629 3.79883 2.24121V2.56641C3.79883 3.07617 3.6377 3.49219 3.31543 3.81445C2.99316 4.13672 2.55664 4.29785 2.00586 4.29785C1.46094 4.29785 1.02441 4.13672 0.696289 3.81445C0.374023 3.48633 0.212891 3.06445 0.212891 2.54883V2.21484ZM6.27734 2.21484C6.27734 1.70508 6.43848 1.28613 6.76074 0.958008C7.08887 0.629883 7.52246 0.46582 8.06152 0.46582C8.59473 0.46582 9.02832 0.626953 9.3623 0.949219C9.69629 1.26562 9.86328 1.69629 9.86328 2.24121V2.56641C9.86328 3.07617 9.70215 3.49219 9.37988 3.81445C9.05762 4.13672 8.62109 4.29785 8.07031 4.29785C7.52539 4.29785 7.08887 4.13672 6.76074 3.81445C6.43848 3.48633 6.27734 3.06445 6.27734 2.54883V2.21484ZM12.3418 2.21484C12.3418 1.70508 12.5029 1.28613 12.8252 0.958008C13.1533 0.629883 13.5869 0.46582 14.126 0.46582C14.6592 0.46582 15.0928 0.626953 15.4268 0.949219C15.7607 1.26562 15.9277 1.69629 15.9277 2.24121V2.56641C15.9277 3.07617 15.7666 3.49219 15.4443 3.81445C15.1221 4.13672 14.6855 4.29785 14.1348 4.29785C13.5898 4.29785 13.1533 4.13672 12.8252 3.81445C12.5029 3.48633 12.3418 3.06445 12.3418 2.54883V2.21484Z"/></svg>
  `;
  newListHeaderCont.classList.add('task_header_container');
  newListAddButton.textContent = '+ Add card';
  newListAddButtonMenu.appendChild(newListAddButton);
  newListHeaderCont.appendChild(newListHeader);
  newList.appendChild(newListHeaderCont);  
  newList.appendChild(newListTaskBlock);  
  newList.appendChild(newListAddButtonMenu);  
  newList.classList.add('main__task_block');
  newListHeader.classList.add('task_block__header');
  newListTaskBlock.classList.add('task_block__div');
  if (isFirst) {    
    if (document.querySelector('.first_button')) {
      document.querySelector('.first_button').classList.remove('first_button');
    }
    newListTaskBlock.classList.add('main__backlog');
    newListAddButtonMenu.classList.add('first_button');
    newListAddButton.classList.add('first');
    if (addButtons2[taskBlocksOrder[0]]) {
      addButtons2[taskBlocksOrder[0]].classList.remove('first');
    }
  }
  newListAddButtonMenu.classList.add('task_block__div_Button_Menu');
  newListAddButton.classList.add('task_block__add_task');
  
  if (isNew) {
    taskBlocksOrder.unshift(listName);  
    main.insertBefore(newList, main.children[0]);
  } else {
    taskBlocksOrder.push(listName);
    main.appendChild(newList);
  }
  blocks2 = document.querySelectorAll('.task_block__div');
  addButtons2[listName] = newListAddButton;
  taskFooters2[listName] = newListAddButtonMenu;
  let optionsList = document.querySelectorAll('.task_block__menu');
  console.log(optionsList);
  if (isNew) {
    optionsList[0].addEventListener('click', () => createOptionsList(newListHeaderCont, optionsList[0],
      'header_option_open'));
    } else {
    optionsList[optionsList.length - 1].addEventListener('click', () => createOptionsList(newListHeaderCont, optionsList[optionsList.length - 1],
      'header_option_open'));
  }
  if (isNew) {
    tasks2[listName] = [];
    localStorage.setItem('tasks', JSON.stringify(tasks2));
  }
  if (isFirst && !isNew) {
    newListAddButton.onclick = () => initionalBacklogButtonClick(listName); 
    // newListAddButton.removeEventListener('click', initionalBacklogButtonClick(listName));
  }
  if (isNew) {
    newListAddButton.addEventListener('click', () => initionalBacklogButtonClick(listName));
    console.log(addButtons2[taskBlocksOrder[1]]);
    addButtons2[taskBlocksOrder[1]].removeEventListener('click', () => initionalBacklogButtonClick(listName), false);
    addButtons2[taskBlocksOrder[1]].onclick = () => {
      deleteDropDownMenus(taskBlocksOrder, taskFooters2, false, taskBlocksOrder[1]);
      if (taskFooters2[taskBlocksOrder[1]].children[1] && taskFooters2[taskBlocksOrder[1]].children[1].getAttribute('class') === 'main__drop_down') {
        taskFooters2[taskBlocksOrder[1]].removeChild(taskFooters2[taskBlocksOrder[1]].children[1]);
        addButtons2[taskBlocksOrder[1]].classList.remove('task_block__add_task_selected');
      } else {
        const menu = document.createElement('div');
        const taskView = taskBlocksOrder[taskViewCalc(taskBlocksOrder[1]) - 1];
        const arr = tasks2[taskView];

        addButtons2[taskBlocksOrder[1]].classList.add('task_block__add_task_selected');
        menu.classList.add('main__drop_down');

        arr.forEach(element => {
          menu.appendChild(createMenuItem(element.title, 'main_drop_down__item', 'div', element.id, taskBlocksOrder[1], taskView, tasks2, taskBlocksOrder, taskFooters2));
        })
        taskFooters2[taskBlocksOrder[1]].appendChild(menu);
      }
    }
  }
  calcActiveTasks(); 
  calcFinishedTasks();
}

export function getTasks() {
  return tasks2;
};

export function getBlocks() {
  return blocks2;
};

export function getTaskFooters() {
  return taskFooters2;
};

export function getAddButtons() {
  return addButtons2;
};
