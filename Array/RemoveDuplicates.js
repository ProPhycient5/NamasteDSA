//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

function removeDuplicate(nums){
    let j = 0;
    for (let i = 1; i < nums.length; i++){
        if (nums[i] !== nums[j]){
            j++;
            nums[j]=nums[i];
        }
    }
    return j+1;
}

console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]))