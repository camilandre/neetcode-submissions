class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let str: string = ''
        
        for (let s of strs) {
            str += `${s.length}#${s}`
        }

        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result: string[] = [];
        let i=0;

        while(i < str.length) {
            let j=i; 

            while(str[j] !== '#'){
                j++
            }

            let length = Number(str.slice(i, j));
            let start = j+1;
            let end = start + length;

            result.push(str.slice(start, end));
            i=end;
        }

        return result;
    }
}
