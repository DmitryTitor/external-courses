
export const itemTextArray = ['Some text', 'Your Profile', 'Settings', 'Sign out', 'Help'];
export const parent = document.querySelector('.header__right');
export const arrow = document.querySelector('.header__arrow');
export const menu = document.createElement('div');

export function createDropDownHeaderMenu(parent, arrow, menu, itemTextArray) {
  function createMainMenuItem(text, className, containerClass) {
    const newElement = document.createElement(containerClass);
  
    newElement.classList.add(className);
    newElement.innerHTML = text;
  
    return newElement;
  }

  function changeMenuStatus(divMenu, buttonsWithDropDown, menu, className) {
    if (buttonsWithDropDown.classList.contains(className)) {
      divMenu.removeChild(menu);
      buttonsWithDropDown.classList.remove(className);
    } else {
      divMenu.appendChild(menu);
      buttonsWithDropDown.classList.add(className);
    }
  }

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
}



