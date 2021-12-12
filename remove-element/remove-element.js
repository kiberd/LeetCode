/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let count = 0;
    
    nums.map((num,index) => {
        if(num === val) {
            nums[index] = "_";
            count++;
        }
    })
    
    nums.sort();
    
    return nums.length - count;
    
};