class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char) {
        return char >= 'a' && char <= 'z' || 
        char >= 'A' && char <= 'Z' ||
        char >= '0' && char <= '9' 
    }

    isPalindrome(s) {
        let left = 0;
        let rigth = s.length - 1;

        while(left < rigth) {

            while( left < rigth && !this.isAlphanumeric(s[left])){
                left++;
            }

            while( rigth > left && !this.isAlphanumeric(s[rigth])){
                rigth--;
            }

            if(s[left].toLowerCase() !== s[rigth].toLowerCase() ) {
                return false;
            }

             rigth--;
             left++;

        }

        return true;

    }
}
