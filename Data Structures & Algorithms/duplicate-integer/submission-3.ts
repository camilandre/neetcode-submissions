class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        
        const numbersMap = new Map (); 
        
        for(let i=0; i < nums.length; i++) {
            if(numbersMap.has(nums[i])){
                return true;

            }
            numbersMap.set(nums[i], i); 
        }
        return false;
    }
}
