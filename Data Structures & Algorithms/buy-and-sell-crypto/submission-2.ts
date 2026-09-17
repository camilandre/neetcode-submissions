class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice: number = prices[0];
        let maxProfit: number = 0;

        for(let i = 0; i < prices.length; i++) {
            let profit = prices[i] - minPrice;
            maxProfit= Math.max(maxProfit, profit)
            minPrice= Math.min(minPrice, prices[i]);
          

        }

        return maxProfit;

    }
}
