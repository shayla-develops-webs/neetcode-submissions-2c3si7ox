class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
twoSum(nums, target) {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // what do I need?

    if (numsMap.has(complement)) {         // have I seen it?
      return [numsMap.get(complement), i]; // yes → return indices
    }

    numsMap.set(nums[i], i); // no → store current number + index
  }
}
      





    }

