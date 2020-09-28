function checkPrimeNumber(num) {
    if (typeof num !== 'number' || isNaN(num) || num !== Math.round(num) || num > 1000) {
        return 'Данные неверны';
    }

    if (num < 2) {
        return `Число ${num} - не простое число`;
    }

    for (let i = 2; i < num; i++) {
        if (i !== num && num % i === 0) {
            return `Число ${num} - составное число`;
        }
    }

    return `Число ${num} - простое число`;
}

module.exports = checkPrimeNumber;
