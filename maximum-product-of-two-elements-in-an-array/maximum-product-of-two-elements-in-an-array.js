/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    const sortedNums = nums.sort((a, b) => {
        return b - a;
    });
    
    const answer = (sortedNums[0] - 1) * (sortedNums[1] - 1);
    
    return answer;
    
};