function isEvenOrOdd(number) {
  // const result = number % 2;

  // if (result === 0) {
  //   return number + ' is even number';
  // } else {
  //   return number + ' is odd number';
  // }

  return number % 2 ? 'Odd' : 'Even';
}

// constant time complexity => O(1)

console.log(isEvenOrOdd());
console.log(isEvenOrOdd());
