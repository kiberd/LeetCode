/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    const length = nums1.length;
    for (let i = 0; i < length - m; i++){
        nums1.pop()
    };
    
    const secondArry = nums2.slice(0, n);
    secondArry.map((item) => {
        nums1.push(item);
    });
    
    nums1.sort((a,b) => {
        return (a-b)
    });
    
};