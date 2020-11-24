function Hangman(word) {
  this.word = word.toLowerCase();
  this.guessedLetters = '';
  this.attempts = 6;
  this.wrongInputSymbolsArr = [];

  for (let i = 0; i < this.word.length; i++) {
    this.guessedLetters += '_';
  }

  this.guess = function (symbol) {
    const symbolLowerCase = symbol.toLowerCase();

    if (this.checkForLose() || this.checkForWin()) {
      return this;
    }

    if (!this.word.includes(symbolLowerCase)) {
      this.attempts -= 1;

      if (this.checkForLose()) {
        return this;
      }

      this.wrongInputSymbolsArr.push(symbolLowerCase);

      let wrongSymbolStr = this.wrongInputSymbolsArr[0];

      for (let k = 1; k < this.wrongInputSymbolsArr.length; k++) {
        wrongSymbolStr += ',' + this.wrongInputSymbolsArr[k];
      }

      console.log(`Буквы ${symbol} нету! Осталось попыток: ${this.attempts} | ${wrongSymbolStr}`);
    } else {
      let newString = '';

      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === symbolLowerCase) {
          newString += symbolLowerCase;
        } else {
          newString += this.guessedLetters[i];
        }
      }

      this.guessedLetters = newString;
      console.log(this.guessedLetters);
      this.checkForWin();
    }

    return this;
  }

  this.checkForLose = function () {
    if (this.attempts <= 0) {
      console.log('Вы проиграли! Начните новую игру, чтобы попытать удачу еще раз!');

      return true;
    }

    return false;
  }

  this.checkForWin = function () {
    if (this.word === this.guessedLetters) {
      console.log('Вы выиграли! Поздравляем!');

      return true;
    }

    return false;
  }

  this.getGuessedString = function() {
    return this.guessedLetters;
  }

  this.getErrorsLeft = function() {
    return this.attempts;
  }

  this.getWrongSymbols = function() {
    return this.wrongInputSymbolsArr;
  }

  this.getStatus = function() {
    return this.getGuessedString() + ' | попыток осталось:' + this.getErrorsLeft();
  }
  
  this.startAgain = function(word) {
    this.word = word.toLowerCase();
    this.guessedLetters = '';
    this.attempts = 6;
    this.wrongInputSymbolsArr = [];

    for (let i = 0; i < this.word.length; i++) {
      this.guessedLetters += '_';
    }

    return this;
  }
}

module.exports = new Hangman;
