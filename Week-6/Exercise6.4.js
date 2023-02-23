function maxProfit(prices) {
    let minimum_price = prices[0];
    let maximum_profit = 0;
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minimum_price) {
        minimum_price = prices[i];
      } else {
        let difference = prices[i] - minimum_price;
        if (difference > maximum_profit) {
          maximum_profit = difference;
        }
      }
    }
    return maximum_profit;
  }
  
console.log(maxProfit([7, 1, 5, 3, 6, 4])); 
console.log(maxProfit([7, 6, 4, 3, 1])); 
