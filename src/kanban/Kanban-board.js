function createMenu() {
  const parent = document.querySelector('.header__right');
  const menu = document.createElement('div');
  const itemTextArray = ['Some text','Your Profile', 'Settings', 'Sign out', 'Help'];
  const arrow = document.querySelector('.header__arrow');

  menu.classList.add('header__drop_down');

  for(let i = 0; i < itemTextArray.length; i++) {
    menu.appendChild(createMenuItem(itemTextArray[i]));
  }

  arrow.addEventListener("click", changeMenuStatus, false);

  function changeMenuStatus() {
    if (arrow.classList.contains('rotate_element')) {
      parent.removeChild(menu);
      arrow.classList.remove('rotate_element');
    } else {
      parent.appendChild(menu);
      arrow.classList.add('rotate_element');
    }
  }
  
  function createMenuItem(text) {
    const newElement = document.createElement('div');
  
    newElement.classList.add('drop_down__item');
    newElement.innerHTML = text; 
  
    return newElement;
  }
}

createMenu();
