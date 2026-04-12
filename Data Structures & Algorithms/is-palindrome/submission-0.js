class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
isPalindrome(s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let leftSide = 0;
  let rightSide = cleaned.length - 1;

  while (leftSide < rightSide) {
    if (cleaned[leftSide] !== cleaned[rightSide]) {
      return false;
    }
    leftSide++;
    rightSide--;
  }

  return true;
}
}