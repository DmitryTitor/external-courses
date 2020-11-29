function Sweets(name, weight) {
  this.name = name;
  this.weight = weight;
}

function SweetmeatsCandy(candyShape) {
  this.candyShape = candyShape;
}

function CaramelCandy(syrupView) {
  this.syrupView = syrupView;
}

function Chocolate(bitterness) {
  this.bitterness = bitterness;
}

function CollectChildrenGift(nameSweetmeats, weightSweetmeats, candyShape, nameCaramel, weightCaramel, syrupView, nameChocolate,
  weightChocolate, bitterness) {
  SweetmeatsCandy.prototype = new Sweets(nameSweetmeats, weightSweetmeats);
  CaramelCandy.prototype = new Sweets(nameCaramel, weightCaramel);
  Chocolate.prototype = new Sweets(nameChocolate, weightChocolate);

  this.sweetsArray = [
    new SweetmeatsCandy(candyShape),
    new CaramelCandy(syrupView),
    new Chocolate(bitterness),
  ];
  this.weightGift = +weightSweetmeats + +weightCaramel + +weightChocolate;

  this.sortSweets = () => {
    this.sweetsArray = this.sweetsArray.sort(this.compareWeight);

    return this.sweetsArray;
  }

  this.compareWeight = (obj1, obj2) => {
    if (obj1.weight > obj2.weight) return 1;
    if (obj1.weight === obj2.weight) return 0;
    return -1;
  }

  this.findCandy = (name) => {
    return this.sweetsArray.find((element) => {
      if (element.name === name) {
        return true;
      }

      return false;
    })
  }
}
