/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        // 불량이 나온 최소 번째 수를 찾는 것이므로 (좌측에서 우측)
        // left, right를 잡은다음 (1 ~ n) -> 중간값 isBadVersion 체크
        // 중간값(mid)가 불량이 아니면, 중간값보다 왼쪽은 모두 불량이 아니니까 -> left = mid + 1
        // 중간값 불량이면 right = mid -> 탈출 조건
        
        let left = 1;
        let right = n;
        
        while(left < right) {
            
            const mid = left + Math.floor( (right - left) / 2 );
            
            isBadVersion(mid) ? right = mid : left = mid + 1;
            
            console.log("left : ", left);
            console.log("right : ", right);
        }
        
        return left
        
        
        
    };
    
    
};