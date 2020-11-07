class Slider {
  constructor() {
    
    this.imgArray = this.getImgArray();
    this.currentIndexImg = 0;
    this.currentImg = this.imgArray[this.currentIndexImg];

    this.init();
  }
  
  init() {
    this.createDefaultElement();
    const butBack = document.querySelector('.slider__button_back');
    const butForth = document.querySelector('.slider__button_forth');

    butBack.addEventListener("click", () => this.changeImg(false) , false);
    butForth.addEventListener("click", () => this.changeImg(true) , false);
  }

  createDefaultElement() {
    const newElement = document.createElement('img');
    const divSlider = document.querySelector('.slider__pictures');

    newElement.classList.add('img');
    newElement.setAttribute('src', this.currentImg.src);
    
    divSlider.appendChild(newElement);
  }
  
  getImgArray() {
    const imgArray = [];
    const arrImgPathArray = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];
    
    for(let i = 0; i < arrImgPathArray.length; i++) {
      this.pushImgInArray(imgArray, arrImgPathArray[i]);
    }
    
    return imgArray;
  }
  
  pushImgInArray(imgArray, imgPath) {
    const img = new Image();
    
    img.src = imgPath;
    imgArray.push(img);
  }
  
  changeImg(nextImg) {
    const divSlider = document.querySelector('.slider__pictures');
    const oldImg = document.querySelector('.img');
    const newImg = document.createElement('img');

    newImg.classList.add('img');
    this.changeImgIndex(nextImg);
    this.currentImg = this.imgArray[this.currentIndexImg];
    newImg.setAttribute('src', this.currentImg.src);
    divSlider.classList.add('div-animation');
    newImg.classList.add('img-animation-to');
    divSlider.replaceChild(newImg, oldImg);
    
  }
  
  changeImgIndex(nextImg) {
    if (nextImg) {
      if (this.imgArray[this.currentIndexImg+1] !== undefined) {
        return this.currentIndexImg++;
      }

      this.currentIndexImg = 0;

      return this.currentIndexImg;
    }

    if (this.imgArray[this.currentIndexImg-1] !== undefined) {
      return this.currentIndexImg--;
    }

    this.currentIndexImg = this.imgArray.length-1;

    return this.currentIndexImg;
  }
}

slider = new Slider();
