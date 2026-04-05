//https://leetcode.com/problems/missing-number/submissions/1969711106/

//1+2+3+4+5.....+n = (n*(n+1))/2

var missingNumber = function(nums) {
    let n = nums.length;
    let actualSum = (n*(n+1))/2;
    let curSum = 0
    for (let i = 0; i < n; i++){
        curSum = curSum + nums[i];
    }
    return actualSum-curSum;
};


