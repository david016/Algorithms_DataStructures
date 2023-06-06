function knapsack2(profits, weights, numOfElements, targetWeight) {
  if (numOfElements <= 0) return 0;
  if (targetWeight <= 0) return 0;

  let actualProfit = profits[numOfElements - 1];
  let actualWeight = targetWeight - weights[numOfElements - 1];

  if (actualWeight < 0) {
    return knapsack2(profits, weights, numOfElements - 1, targetWeight);
  }
  return Math.max(
    actualProfit + knapsack2(profits, weights, numOfElements - 1, actualWeight),
    knapsack2(profits, weights, numOfElements - 1, targetWeight)
  );
}

let weights2 = [
  2, 3, 4, 5, 11, 19, 21, 21, 23, 23, 2, 3, 4, 5, 11, 19, 21, 21, 23, 23,
];
let profits2 = [
  1, 2, 5, 6, 8, 13, 15, 16, 200, 300, 1, 2, 5, 6, 8, 13, 15, 16, 200, 300,
];
let targetWeight2 = 1000;
// console.log(knapsack2([1, 2, 5, 6], [2, 3, 4, 5], 4, 2000));
// console.log(knapsack2(profits2, weights2, weights2.length, targetWeight2));

const profits = [
  100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 100, 90, 80, 70, 60, 50, 40, 30, 20,
  10, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 100, 90, 80, 70, 60, 50, 40, 30,
  20, 10, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10,
];
const weights = [
  10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6,
  5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];
const numOfElements = profits.length;
const targetWeight = 50;

console.time("knapsack2");
console.log(knapsack2(profits, weights, numOfElements, targetWeight));
console.timeEnd("knapsack2");

function knapsack2Memo(profits, weights, numOfElements, targetWeight, table) {
  if (numOfElements <= 0) return 0;
  if (targetWeight <= 0) return 0;

  let actualProfit = profits[numOfElements - 1];
  let actualWeight = targetWeight - weights[numOfElements - 1];

  if (actualWeight < 0) {
    return knapsack2(profits, weights, numOfElements - 1, targetWeight);
  }
  return Math.max(
    actualProfit + knapsack2(profits, weights, numOfElements - 1, actualWeight),
    knapsack2(profits, weights, numOfElements - 1, targetWeight)
  );
}
