/**
 * @param {string} s
 * @return {number}
 */


var firstUniqChar = function(s) {
    
//     // First solution
//     const wordArry = s.split('');
//     const wordCountObj = {};
    
//     wordArry.map((word) => {
//         if (wordCountObj[word]) wordCountObj[word]++;
//         else wordCountObj[word] = 1;
//     })
    
//     for (let i = 0; i < s.length; i++){
//         if (wordCountObj[s[i]] === 1) return i;
//     }
    
//     return -1;
    
    // Second solution
    const wordArry = s.split('');
    
    for (let i = 0; i < wordArry.length; i++){
        if (s.indexOf(wordArry[i]) === s.lastIndexOf(wordArry[i])) return i;
    }
    
    return -1;
};