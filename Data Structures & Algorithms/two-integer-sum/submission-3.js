class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map(); 
        for(let i = 0; i < nums.length; i++) {
            const dif = target - nums[i];
            if(numsMap.has(dif)) {
                return [numsMap.get(dif), i];
            }
            numsMap.set(nums[i], i);
        }
    }
}
