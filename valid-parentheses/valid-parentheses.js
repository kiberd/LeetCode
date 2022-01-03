/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
   const stringArry = s.split('');
   const stringMap = {
       "(" : ")",
       "{" : "}",
       "[" : "]",
   };
    
   const keys = Object.keys(stringMap); 
   const stack = [];
   let answer = true;
    
   stringArry.map((string, index) => {
       
       if(keys.includes(string)) {
           stack.push(string);
       } else {
           
           if(stringMap[stack[stack.length-1]] === string) {
               stack.pop();
           } else {
               answer = false;
           }
       }
       
       
       
   }); 
    
    
   if(!answer) {
       return false;
   } else {
       return !stack.length;
   }
      
    
};