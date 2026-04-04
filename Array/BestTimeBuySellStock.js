//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
   let maxPro = 0;
   let small = prices[0];

  for (let i = 1; i < prices.length; i++){
      if(prices[i] > small){
        maxPro = Math.max(prices[i] - small, maxPro);
      }else{
        small = prices[i];
      }
  }  
  return maxPro;
};