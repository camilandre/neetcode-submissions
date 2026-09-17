class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = {
            '(': ')',
            '{': '}',
            '[': ']'
        };

        for (const char of s) {
            if (char in pairs) {
                stack.push(char);
            } else {
                const last = stack.pop();
                if (pairs[last] !== char) {
                    return false;
                }
            }
        }

        return !stack.length;
    }
}
