class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map.set(num, (map.get(num) || 0) + 1);
  }

  const entryCount = [...map.entries()];

  return entryCount
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(entry => entry[0]);
}
}