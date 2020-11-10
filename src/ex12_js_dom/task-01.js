const divSlider = document.querySelector('.slider__pictures');
const newImg = document.querySelector('.img');
const butBack = document.querySelector('.slider__button_back');
const butForth = document.querySelector('.slider__button_forth');
const imgArray = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];
let currentIndex = 0;

newImg.setAttribute('src', 'img/img1.jpg');
butBack.addEventListener("click", () => {return (changeImg(false))}, false);
butForth.addEventListener("click", () => {return (changeImg(true));}, false);

function changeImg(isNextImg) { 
  if (newImg.classList.contains('img-animation-to')) {
    newImg.classList.remove('img-animation-to');
  } 

  if (newImg.classList.contains('img-animation-to-reverted')) {
    newImg.classList.remove('img-animation-to-reverted');
  } 

  if(isNextImg) {
    currentIndex = currentIndex >= imgArray.length - 1 ? 0 : (currentIndex + 1);
  } else {
    currentIndex = currentIndex <= 0 ? imgArray.length - 1 : (currentIndex - 1);
  }

  setTimeout(() => {
    butBack.removeAttribute('disabled');
    butForth.removeAttribute('disabled'); 
  }, 2000);

  newImg.setAttribute('src', imgArray[currentIndex]);
  butBack.setAttribute('disabled', 'true');
  butForth.setAttribute('disabled', 'true');

  if (isNextImg) {
    newImg.classList.add('img-animation-to');
  } else {
    newImg.classList.add('img-animation-to-reverted');
  }
}
