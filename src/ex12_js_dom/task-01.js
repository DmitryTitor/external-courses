function createDefaultElement() {
  const newElement = document.createElement('img');
  const divSlider = document.querySelector('.slider__pictures');

  newElement.classList.add('img');
  newElement.setAttribute('src', 'img/img1.jpg');
  divSlider.appendChild(newElement);
}

function changeImg(imgArray, currentIndex, isNextImg) {

  const divSlider = document.querySelector('.slider__pictures');
  const oldImg = document.querySelector('.img');
  const newImg = document.createElement('img');
  let index;

  if(isNextImg) {
    index = currentIndex >= imgArray.length - 1 ? 0 : (currentIndex + 1);
  } else {
    index = currentIndex <= 0 ? imgArray.length - 1 : (currentIndex - 1);
  }

  newImg.classList.add('img');
  newImg.setAttribute('src', imgArray[index]);
  divSlider.classList.add('div-animation');
  newImg.classList.add('img-animation-to');
  divSlider.replaceChild(newImg, oldImg);

  return index;
}

const butBack = document.querySelector('.slider__button_back');
const butForth = document.querySelector('.slider__button_forth');
const imgArray = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];
let currentIndex = 0;

butBack.addEventListener("click", () => {
  return (currentIndex = changeImg(imgArray, currentIndex, false))
}, false);
butForth.addEventListener("click", () => {
  return (currentIndex = changeImg(imgArray, currentIndex, true));
}, false);

createDefaultElement();
