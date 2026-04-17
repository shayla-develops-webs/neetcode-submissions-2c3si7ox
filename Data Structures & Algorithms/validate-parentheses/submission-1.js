class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      const array = [...s];
      const map = new Map ([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"]
      ]);
      const stack = [];
      
      for (const char of array) {
        if (map.has(char)) {
          stack.push(char);
        } else {
          const top = stack.pop();
          if (map.get(top) !== char) {
          return false;
        }
      }
      
      }
      return stack.length === 0;

    }
}
