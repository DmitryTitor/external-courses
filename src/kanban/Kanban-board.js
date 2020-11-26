const tasksString = localStorage.getItem("tasks");
const tasks = JSON.parse(tasksString);
let idCount = +localStorage.getItem("id-count");

const blocks = {
  backlog: document.querySelector('.main__backlog .task_block__div'),
  ready: document.querySelector('.main__ready .task_block__div'),
  inProgress: document.querySelector('.main__in_progress .task_block__div'),
  finished: document.querySelector('.main__finished .task_block__div'),
};

const addButtons = {
  backlog: document.querySelector('.main__backlog > .task_block__div_Button_Menu > .task_block__add_task'),
  ready: document.querySelector('.main__ready > .task_block__div_Button_Menu > .task_block__add_task'),
  inProgress: document.querySelector('.main__in_progress > .task_block__div_Button_Menu > .task_block__add_task'),
  finished: document.querySelector('.main__finished > .task_block__div_Button_Menu > .task_block__add_task'),
};

const taskFooters = {
  backlog: document.querySelector('.main__backlog > .task_block__div_Button_Menu'),
  ready: document.querySelector('.main__ready > .task_block__div_Button_Menu'),
  inProgress: document.querySelector('.main__in_progress > .task_block__div_Button_Menu'),
  finished: document.querySelector('.main__finished > .task_block__div_Button_Menu'),
};

const taskBlocksOrder = ['backlog', 'ready', 'inProgress', 'finished'];
const itemTextArray = ['Some text', 'Your Profile', 'Settings', 'Sign out', 'Help'];
const parent = document.querySelector('.header__right');
const arrow = document.querySelector('.header__arrow');
const menu = document.createElement('div');

menu.classList.add('header__drop_down');

for (let i = 0; i < itemTextArray.length; i++) {
  menu.appendChild(createMainMenuItem(itemTextArray[i], 'drop_down__item', 'div'));

}

arrow.addEventListener('click', () => changeMenuStatus(parent, arrow, menu, 'rotate_element'), false);
arrow.addEventListener('blur', () => {
  if (arrow.classList.contains('rotate_element')) {
    parent.removeChild(menu);
    arrow.classList.remove('rotate_element');
  }
})

function changeMenuStatus(divMenu, buttonsWithDropDown, menu, className) {
  if (buttonsWithDropDown.classList.contains(className)) {
    divMenu.removeChild(menu);
    buttonsWithDropDown.classList.remove(className);
  } else {
    divMenu.appendChild(menu);
    buttonsWithDropDown.classList.add(className);
  }
}

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

  taskBlocksOrder.forEach((key, i) => {
    const nextKey = taskBlocksOrder[i + 1];

    if (!nextKey) {
      return undefined;
    }

    if (tasks[key].length) {
      addButtons[nextKey].disabled = false;
    } else {
      addButtons[nextKey].disabled = true;
    }

    return undefined;
  })
}

taskBlocksOrder.forEach(key => {
  if (key === 'backlog') {
    initionalBacklogButtonClick(key);
  } else {
    addButtons[key].addEventListener('click', () => {
      deleteDropDownMenus(false, key);
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

function createMainMenuItem(text, className, containerClass) {
  const newElement = document.createElement(containerClass);

  newElement.classList.add(className);
  newElement.innerHTML = text;

  return newElement;
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

    deleteDropDownMenus();
    renderTasks();
  })

  return newElement;
}

function deleteDropDownMenus(isClose = true, keyNotClose) {
  taskBlocksOrder.forEach(key => {
    if ((key === 'backlog') || !(taskFooters[key].children[1] && taskFooters[key].children[1].getAttribute('class') === 'main__drop_down')
      || (!isClose && keyNotClose === key)) {
      return false;
    }

    taskFooters[key].removeChild(taskFooters[key].children[1]);
    addButtons[key].classList.remove('task_block__add_task_selected');

    return undefined;
  })
}

renderTasks();
