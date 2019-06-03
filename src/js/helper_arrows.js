

class Arrow {
  constructor(positionX, positionY, width, height, imgSrc) {

    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.imgSrc = imgSrc;

  }
  static createArrow() {
    return new Arrow("Гость", "Сайта");
  }



}
