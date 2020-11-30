const compareWeight = (obj1, obj2) => {
  if (obj1.weight > obj2.weight) return 1;
  if (obj1.weight === obj2.weight) return 0;
  return -1;
}

function Sweets(name, weight) {
  this.name = name;
  this.weight = weight;
}

function SweetmeatsCandy(nameSweetmeats, weightSweetmeats, candyShape) {
  Sweets.call(this, nameSweetmeats, weightSweetmeats);

  this.candyShape = candyShape;
}

function CaramelCandy(nameCaramel, weightCaramel, syrupView) {
  Sweets.call(this, nameCaramel, weightCaramel);

  this.syrupView = syrupView;
}

function Chocolate(nameChocolate, weightChocolate, bitterness) {
  Sweets.call(this, nameChocolate, weightChocolate);

  this.bitterness = bitterness;
}

function CollectChildrenGift({nameSweetmeats, weightSweetmeats, candyShape}, {nameCaramel, weightCaramel, syrupView}, {nameChocolate,
  weightChocolate, bitterness}) {
  this.sweetsArray = [
    new SweetmeatsCandy(nameSweetmeats, weightSweetmeats, candyShape),
    new CaramelCandy(nameCaramel, weightCaramel, syrupView),
    new Chocolate(nameChocolate, weightChocolate, bitterness),
  ];
  this.weightGift = +weightSweetmeats + +weightCaramel + +weightChocolate;

  this.sortSweets = () => {
    this.sweetsArray = this.sweetsArray.sort(compareWeight);

    return this.sweetsArray;
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
