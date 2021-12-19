/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    
    
     function fork(index, target) {
        if (index === nums.length) {
            result.push(target);
            return;
        }
        fork(index + 1, target.concat([nums[index]]));
        fork(index + 1, target);
    }

    const result = [];
    
    fork(0, []);
    
    return result;
    

};