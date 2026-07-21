class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length
        if(m === 0)return false;
        const n = matrix[0].length
        if(n === 0)return false;

        let low = 0
        let high = m * n - 1
        while(low <= high){
            const mid = low + Math.floor((high - low) / 2)
            const row = Math.floor(mid / n)
            const col = mid % n
            const val = matrix[row][col]

            if (val === target) return true;
            if (val < target) low = mid + 1;
            else high = mid - 1
        }
        return false;
    }
}
