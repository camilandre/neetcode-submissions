class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counter = new Map(); 
        let frequency = Array.from({length: nums.length + 1}, () => []);

        for(let num of nums) {
            let count = counter.get(num) || 0;
            counter.set(num, count + 1);
        }

        for(let [num, freq] of counter) {
            frequency[freq].push(num);
        }

        let res = [];

        for(let i = frequency.length-1; i > 0; i--) {
            for(let n of frequency[i]){
                res.push(n);
                if(res.length === k) {
                    return res;
                }
            }
        }

        return res; 

    }
}
