class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] | Error {
        if(!Array.isArray(nums)) throw new Error('Parameter nums undefined'); 

        let mapNumber = new Map<number, number>; 

        for(let i= 0; i < nums.length; i++) {
            let dif = target - nums[i];

            if(mapNumber.has(dif)) {
                return [mapNumber.get(dif), i];
            }
            mapNumber.set(nums[i],i);
        }

    }
}
