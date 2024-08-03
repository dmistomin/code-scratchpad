/** ///// NOTES /////
  *
  * PROBLEM
  *
  * Given an array of prices, get the max difference out of that array. You can only 'buy' before selling
  *
  * EXAMPLES
  *
  * [7,1,5,3,6,4] -> 5 (buy on day 2, sell on day 5)
  * [7,6,4,3,1] -> 0 (no buy possible without going into negatives)
  *
  * SOLUTION:
  *
  * Naive solution is to take price and the compare every subsequent price, then return max.
  *
  * Better solution:
  *
  * Keep track of lowest buy price encountered so far
  * Keep track of max profit encountered so far
  * Compare (current price - lowest buyprice), if it is more than max profit, update
  * Return max profit
*/

function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let profit = 0;

  for (let n of prices) {
    profit = Math.max(profit, n - minPrice);
    minPrice = Math.min(minPrice, n);
  }

  return profit;
}

console.log('[7,1,5,3,6,4] -> 5: ', maxProfit([7, 1, 5, 3, 6, 4]));
console.log('[7,1,5,3,6,4] -> 0: ', maxProfit([7, 6, 4, 3, 1]));

