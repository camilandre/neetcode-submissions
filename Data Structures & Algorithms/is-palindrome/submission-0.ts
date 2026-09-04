class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(chart: string): boolean {
        return chart >= 'A' && chart <= 'Z' ||
        chart >= 'a' && chart <= 'z' ||
        chart >= '0' && chart <= '9'; 
    }

    isPalindrome(s: string): boolean {

        let l = 0;  
        let r = s.length - 1;
        

        while(l < r) {
            while(l < r && !this.isAlphanumeric(s[l])){
                l++;
            }

            while(r > l && !this.isAlphanumeric(s[r]) ){
                r--;
            }

            if(s[l].toLowerCase() !== s[r].toLowerCase()){
                return false;
            }

            l++;
            r--;
        }
        
        return true;
    }
    
}
