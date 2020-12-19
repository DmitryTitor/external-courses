import { renderTasks } from "./main.js"
import { deleteDropDownMenus } from './addButtons.js';

export function createMenuItem(text, className, containerClass, id, key, previousKey, tasks, taskBlocksOrder, taskFooters) {
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