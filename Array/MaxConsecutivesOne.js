//https://leetcode.com/problems/max-consecutive-ones/description/


var findMaxConsecutiveOnes = function(nums) {
    let count = 0; max = 0
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            count++;
        }else{
            max = Math.max(count, max);
            count = 0;
        }
    }
    return Math.max(max, count);
};