class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const setsCheckForDuplicatesAutomatically = new Set(nums);
        if (setsCheckForDuplicatesAutomatically.size < nums.length) {
          return true;
        } else {
          return false;
        }
    }
}