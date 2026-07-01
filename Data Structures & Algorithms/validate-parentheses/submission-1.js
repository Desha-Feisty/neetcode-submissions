class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let bracketStack = []
        for(let b of s){
            if(b === "(" || b === "{" || b === "["){
                bracketStack.push(b)
            }
            else if(b === "]"){
                if(bracketStack.pop() !== "[") return false;
            }
            else if(b === "}"){
                if(bracketStack.pop() !== "{") return false;
            }
            else if(b === ")"){
                if(bracketStack.pop() !== "(") return false;
            }
        }
    return bracketStack.length === 0;    }
}
