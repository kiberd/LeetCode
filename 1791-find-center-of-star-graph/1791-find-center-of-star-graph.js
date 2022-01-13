/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    
    const obj = {};
    
    edges.map((edge) => {
        edge.map((e) => {
            obj[e] ? obj[e]++ : obj[e] = 1;
        })
    })
    
    let answer;
    Object.keys(obj).map((key) => {
        if(obj[key] > 1) {
            answer = key;
        }
    });
    
    return answer;
    
};