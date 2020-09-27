function checkPrimeNumber(num) {
    if (typeof num !== 'number' || num !== num || num > 1000 || num < 2) {
        console.log('Incorrect data entered! Please enter a number between 2 and 1000');
        return;
    }
    for (let i = 2; i < num; i++) {
        if (i !== num && num % i === 0) {
            console.log(`Число ${num} - составное число`);
            return;
        }
    }
    console.log(`Число ${num} - простое число`);

}

module.exports = checkPrimeNumber;