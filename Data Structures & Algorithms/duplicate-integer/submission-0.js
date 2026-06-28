class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let store = new Set()
        for(let num of nums){
            if(!store.has(num)){
                store.add(num)
            }
            else{return true}
        }
    return false
    }
}
