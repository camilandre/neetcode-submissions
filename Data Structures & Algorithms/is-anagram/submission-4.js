class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let freq = new Map();

        for (let char of s) {
            let count = freq.get(char) ?? 0;
            freq.set(char, count + 1);
        }

        for (let char of t) {
            if (!freq.has(char)) {
                return false;
            }
            freq.set(char, freq.get(char) - 1);

            if (freq.get(char) < 0) {
                return false;
            }
        }

        return true;
    }
}
