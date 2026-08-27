class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let lettersMap = new Map();
        const sLength = s.length;
        const tLength = t.length;

        if (sLength !== tLength) return false;

        for (let i = 0; i < sLength; i++) {
            let char = s[i];

            if (lettersMap.has(s[i])) {
                lettersMap.set(char, lettersMap.get(char) + 1);
            } else {
                lettersMap.set(s[i], 1);
            }
        }
        
        for (let i = 0; i < tLength; i++) {
            let char = t[i];
            if (!lettersMap.has(char)) {
                return false;
            }

            if(lettersMap.get(char) <= 0) {
               return false
            }
            lettersMap.set(char, lettersMap.get(char) - 1);

        }
        return true
    }
}
