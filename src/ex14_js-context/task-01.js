const isValidValue = (num) => typeof num === 'number' && num !== NaN;

const Calculator = {
  currentValue: 0,
  
  add: function(num) {
    if (isValidValue(num)) {
      this.currentValue += num;  
    }

    return this;
  },

  subtract: function(num) {
    if (isValidValue(num)) {
      this.currentValue -= num;  
    }

    return this;
  },

  divide: function(num) {
    if (isValidValue(num)) {
      this.currentValue /= num;  
    }

    return this;
  },

  multiply: function(num) {
    if (isValidValue(num)) {
      this.currentValue *= num;  
    }

    return this;
  },

  setState: function(num) {
    if (isValidValue(num)) {
      this.currentValue = num;
    }

    return this;
  },

  getResult: function() {
    return this.currentValue;
  },

  reset: function() {
    this.currentValue = 0;

    return this;
  },

  fetchData: function(callback) {
    setTimeout(() => {
      callback(500);
    }, 1000);

    return this;
  },
}

module.exports = Calculator;
