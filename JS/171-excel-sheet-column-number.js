/*
https://leetcode.com/problems/excel-sheet-column-number/

Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnTitle = "A"
Output: 1
Example 2:

Input: columnTitle = "AB"
Output: 28
Example 3:

Input: columnTitle = "ZY"
Output: 701
 

Constraints:

1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].
*/



/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let total = 0
  for (let i = 0; i < columnTitle.length; i += 1) {
    total = total * 26 + columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1
  }
  return total
};



/*
EXPLANATION

Base-26 conversion
*/