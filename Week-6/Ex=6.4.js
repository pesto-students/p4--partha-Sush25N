let prices = [7, 1, 5, 3, 6, 4];

function calculateMaxProfit(stock_prices) {
    const n = stock_prices.length;

    if (n == 0) {
        return 0;
    }

    let profit = 0;
    for (let i = 0; i < n - 1; i++) {
        let price = stock_prices[i];

        for (let j = i; j < n; j++) {
            let nextPrice = stock_prices[j];

            profit = Math.max(profit, nextPrice - price);
        }
    }
    return profit;
}

console.log(calculateMaxProfit([7, 1, 5, 3, 6, 4]));
console.log(calculateMaxProfit([7, 6, 4, 3, 1]));