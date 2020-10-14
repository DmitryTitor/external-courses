class Calculator {
  constructor() {
    this.currentValue = 0;

    this.add = (num) => {
      if (typeof num === 'number' && num !== NaN) {
            this.currentValue += num;  
      }
  
      return this.add;
    };
  
    this.subtract = (num) => {
      if (typeof num === 'number' && num !== NaN) {
            this.currentValue -= num;  
      }
  
      return this.subtract;
    };
  
    this.divide = (num) => {
      if (typeof num === 'number' && num !== NaN) {
            this.currentValue /= num;  
      }
  
      return this.divide;
    };
  
    this.multiply = (num) => {
      if (typeof num === 'number' && num !== NaN) {
            this.currentValue *= num;  
      }
  
      return this.multiply;
    };
  }

  getResult() {
    return this.currentValue;
  }

  reset() {
    this.currentValue = 0;

    return this.currentValue;
  }
}  
  
calc = new Calculator();

module.exports = calc;
