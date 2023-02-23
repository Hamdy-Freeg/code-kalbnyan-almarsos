// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log(add(4, 5));

// function addRandom(num1) {
//   return num1 + Math.random();
// }

// console.log(addRandom(5));

// let previousResult = 0;

// function addMoreNum(n1, n2) {
//   const sum = n1 + n2;
//   previousResult = sum;
//   return sum;
// }

// console.log(addMoreNum(5, 9));

// factory function
/*
 */

// closures

let multiplier = 1.1;

function createTaxCalculator(tax) {
  console.log(multiplier);
  function calculateTax(amount) {
    return amount * tax * multiplier;
  }

  return calculateTax;
}

// const vatAmount = calculateTax(100, 0.33);
// const incomeTax = calculateTax(100, 0.2);

const VatAmount = createTaxCalculator(0.19);
const incomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 1.2;

console.log(VatAmount(100));
console.log(incomeTaxAmount(200));

let userName = "hamdy";

function greetUser() {
  let name = userName;
  console.log("hi " + name);
}

userName = "freeg";

greetUser();

// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOf(x, n) {
  if (n === 1) {
    return;
  }
  return x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

const myself = {
  name: "hamdy",
  friends: [
    {
      name: "freeg",
      friends: [
        {
          name: "ibrahem",
          friends: [
            {
              name: "hari",
            },
            {
              name: "amilia",
            },
          ],
        },
      ],
    },
    {
      name: "julia",
    },
  ],
};

/* function printFriendNames(perosn) {
  for (const friend of perosn.friends) {
    for (const friendsFriends of friend.friends) {
      for (const)
    }
  }
}
 */

function getFriendNames(perosn) {
  const collectedNames = [];

  if (!perosn.friends) {
    return [];
  }

  for (const friend of perosn.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }
  return collectedNames;
}

console.log(getFriendNames(myself));
