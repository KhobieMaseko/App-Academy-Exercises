// function multiplyBiggerNumByTwo(num1, num2) {
//   let bigNum;
//   if (num1 > num2) {
//     bigNum = num1;
//     return bigNum * 2;
//   } else {
//     bigNum = num2;
//     return bigNum * 2;
//   }
// }

// function divideBiggerNumByThree(num1, num2) {
//   let bigNum;
//   if (num1 > num2) {
//     bigNum = num1;
//     return bigNum / 3;
//   } else {
//     bigNum = num2;
//     return bigNum / 3;
//   }
// }

// function eatMostTacos(sum1, sum2) {
//   let bigNum;
//   if (sum1 > sum2) {
//     bigNum = sum1;
//     return `I ate ${bigNum} tacos.`;
//   } else {
//     bigNum = sum2;
//     return `I ate ${bigNum} tacos.`;
//   }
// }

// function adoptSmallerDog(weight1, weight2) {
//   let smallDog;
//   if (weight1 < weight2) {
//     smallDog = weight1;
//     return `I adopted a dog that weighs ${smallDog} pounds.`;
//   } else {
//     smallDog = weight2;
//     return `I adopted a dog that weighs ${smallDog} pounds.`;
//   }
// }

// my DRY solution:

function getBiggerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function getSmallerNumber(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

function multiplyByTwo(num) {
  return num * 2;
}

function divideByThree(num) {
  return num / 3;
}

function multiplyBiggerNumByTwo(num1, num2) {
  const bigNum = getBiggerNumber(num1, num2);
  return multiplyByTwo(bigNum);
}

function divideBiggerNumByThree(num1, num2) {
  const bigNum = getBiggerNumber(num1, num2);
  return divideByThree(bigNum);
}

function eatMostTacos(sum1, sum2) {
  const bigNum = getBiggerNumber(sum1, sum2);
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  const smallDog = getSmallerNumber(weight1, weight2);
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

// tests:
console.log(multiplyBiggerNumByTwo(3, 5)); // 10
console.log(multiplyBiggerNumByTwo(24, 13)); // 48
console.log(divideBiggerNumByThree(3, 6)); // 2
console.log(divideBiggerNumByThree(24, 18)); // 8
console.log(eatMostTacos(6, 12)); // I ate 12 tacos.
console.log(eatMostTacos(16, 11)); // I ate 16 tacos.
console.log(adoptSmallerDog(16, 11)); // I adopted a dog that weighs 11 pounds.
console.log(adoptSmallerDog(8, 19)); // I adopted a dog that weighs 8 pounds.


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
