const numbersWindow = [];
const windowSize = 10;

exports.updateNumbers = (newNumbers) => {
  newNumbers.forEach((num) => {
    if (!numbersWindow.includes(num)) {
      if (numbersWindow.length >= windowSize) {
        numbersWindow.shift();
      }
      numbersWindow.push(num);
    }
  });
  return [...numbersWindow];
};

exports.calculateAverage = (numbers) => {
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
};

exports.getPreviousState = () => {
  return [...numbersWindow];
};
