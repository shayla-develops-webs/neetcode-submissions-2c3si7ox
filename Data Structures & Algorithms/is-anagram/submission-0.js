class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const stringOne = s.split('').sort().join('');
        const stringTwo = t.split('').sort().join('');
        if (stringOne === stringTwo) {
            return true;
        }
        return false;
    }
}