class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphaNum(ch) {
        const code = ch.charCodeAt(0);
        return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);        }
        let i = 0
        let j = s.length - 1
        while(i < j){
            while(i < j && !isAlphaNum(s[i])) i++;
            while(i < j && !isAlphaNum(s[j])) j--;
            if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;
            i++;
            j--;
        }
        return true;
    }
}
