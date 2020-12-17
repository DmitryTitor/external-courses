export const addButtons = {
  backlog: document.querySelector('.main__backlog > .task_block__div_Button_Menu > .task_block__add_task'),
  ready: document.querySelector('.main__ready > .task_block__div_Button_Menu > .task_block__add_task'),
  inProgress: document.querySelector('.main__in_progress > .task_block__div_Button_Menu > .task_block__add_task'),
  finished: document.querySelector('.main__finished > .task_block__div_Button_Menu > .task_block__add_task'),
};

export const disableEnableAddButtons = (taskBlocksOrder, tasks) => {
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
  });  
}

export function deleteDropDownMenus(taskBlocksOrder, taskFooters,isClose = true, keyNotClose) {
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
