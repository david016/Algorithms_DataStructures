function knapsack(profits, weights, remainingWeight, numOfElemets) {
  if (numOfElemets === 0 || remainingWeight === 0) {
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
// console.log(
//   knapsack(
//     [
//       10, 40, 30, 50, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 10, 40,
//       30, 50, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 30, 50, 5, 5, 5,
//       5, 5, 5, 5, 5, 7, 8, 5,
//     ],
//     [
//       5, 4, 6, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 3, 4, 5, 5, 4, 6, 3, 2,
//       2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 3, 4, 5, 5, 4, 6, 3, 2, 2, 2, 2, 2, 2,
//       1, 2, 3, 2,
//     ],
//     20,
//     53
//   )
// );

// memo
function knapsackMemo(profits, weights, remainingWeight, numOfElemets, memo) {
  if (numOfElemets === 0 || remainingWeight === 0) {
    return 0;
  }

  if (`${remainingWeight}|${numOfElemets}` in memo) {
    return memo[`${remainingWeight}|${numOfElemets}`];
  }

  if (weights[numOfElemets - 1] > remainingWeight) {
    memo[`${remainingWeight}|${numOfElemets}`] = knapsackMemo(
      profits,
      weights,
      remainingWeight,
      numOfElemets - 1,
      memo
    );
    return memo[`${remainingWeight}|${numOfElemets}`];
  } else {
    let exclude = knapsackMemo(
      profits,
      weights,
      remainingWeight,
      numOfElemets - 1,
      memo
    );
    let include =
      profits[numOfElemets - 1] +
      knapsackMemo(
        profits,
        weights,
        remainingWeight - weights[numOfElemets - 1],
        numOfElemets - 1,
        memo
      );
    memo[`${remainingWeight}|${numOfElemets}`] = Math.max(exclude, include);
    return Math.max(exclude, include);
  }
}

console.log(
  knapsackMemo(
    [
      10, 40, 30, 50, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 10, 40,
      30, 50, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 30, 50, 5, 5, 5,
      5, 5, 5, 5, 5, 7, 8, 5,
    ],
    [
      5, 4, 6, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 3, 4, 5, 5, 4, 6, 3, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 3, 4, 5, 5, 4, 6, 3, 2, 2, 2, 2, 2, 2,
      1, 2, 3, 2,
    ],
    20,
    53,
    {}
  )
);
