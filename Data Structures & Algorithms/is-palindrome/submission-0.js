class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase()
        let chars = []
        for(let char of s){
            if(/[a-z0-9]/.test(char)){
                chars.push(char)
            }
        }
        let reversed = chars.slice().reverse().join("")
        let cleaned = chars.join("")
        return cleaned === reversed
    }
}
