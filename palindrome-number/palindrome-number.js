/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    const numberString = x.toString();
    const length = numberString.length;
    
    let reverseStringArry = [];
    for (let i=0; i<length; i++) {
        reverseStringArry.unshift(numberString[i]);
    }
    
    let reverseString = "";
    reverseStringArry.map((string) => {
        reverseString += string;
    })
    
    return numberString === reverseString ? true : false;

};
