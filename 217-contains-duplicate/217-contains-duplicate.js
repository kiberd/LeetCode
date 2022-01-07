/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    
    const numObj = {};
    
    nums.map((num) => {
        if(numObj[num]){
            numObj[num]++;
        } else{
            numObj[num] = 1;
        }; 
    });
    
    let answer = false;
    
    Object.values(numObj).map((value) => {
        if(value > 1){
            answer = true;
        }
    });
    
    return answer;
    
    
};