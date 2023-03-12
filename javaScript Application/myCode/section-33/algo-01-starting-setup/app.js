function findMin(numbersArr) {
  if (!numbersArr.length) {
    throw new Error('Should not be an embty array');
  }
  let currentNum = numbersArr[0];

  for (let i = 1; i < numbersArr.length; i++) {
    if (numbersArr[i] < currentNum) {
      currentNum = numbersArr[i];
    }
  }

  return currentNum;
}

function findMin2(numbersArr) {
  if (!numbersArr.length) {
    throw new Error('Should not be an embty array');
  }

  let sortedNumbers;

  for (let i = 0; i < numbersArr.length; i++) {
    let outerElement = numbersArr[i];
    for (let j = i + 1; j < numbersArr.length; j++) {
      let innerElement = numbersArr[j];

      if (outerElement > innerElement) {
        numbersArr[i] = innerElement;
        numbersArr[j] = outerElement;

        outerElement = numbersArr[i];
        innerElement = numbersArr[j];
      }
    }
  }

  return numbersArr[0];
}

const testNums = [5, 3, 12, 8, 2];

const min = findMin(testNums);
const min2 = findMin2(testNums);

console.log(min);
console.log(min2);
