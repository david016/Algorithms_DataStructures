function knapsack(profits, weights, remainingWeight, numOfElemets) {
  if (numOfElemets <= 0 || remainingWeight <= 0) {
    return 0;
  }

  if (weights[numOfElemets - 1] > remainingWeight) {
    return knapsack(profits, weights, remainingWeight, numOfElemets - 1);
  } else {
    let exclude = knapsack(profits, weights, remainingWeight, numOfElemets - 1);
    let include =
      profits[numOfElemets - 1] +
      knapsack(
        profits,
        weights,
        remainingWeight - weights[numOfElemets - 1],
        numOfElemets - 1
      );
    return Math.max(exclude, include);
  }
}
console.log(knapsack([10, 40, 30, 50], [5, 4, 6, 3], 10, 4));
