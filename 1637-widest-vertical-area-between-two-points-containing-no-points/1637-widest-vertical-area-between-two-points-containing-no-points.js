/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    
    points.sort((a,b) => {
        return a[0] - b[0];
    });
    
    let max = -1
    
    for(let i = 1; i < points.length; i++) {
        if(max < points[i][0] - points[i-1][0]) {
            max = points[i][0] - points[i-1][0];
        }
    }
    
    return max
    
};