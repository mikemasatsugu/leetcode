/*
https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.

 

Example 1:

Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
Example 2:

Input: sentences = ["please wait", "continue to fight", "continue to win"]
Output: 3
Explanation: It is possible that multiple sentences contain the same number of words. 
In this example, the second and third sentences (underlined) have the same number of words.
 

Constraints:

1 <= sentences.length <= 100
1 <= sentences[i].length <= 100
sentences[i] consists only of lowercase English letters and ' ' only.
sentences[i] does not have leading or trailing spaces.
All the words in sentences[i] are separated by a single space.
*/

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  const wordCount = sentences.map((sentence) => sentence.split(' ').length);
  return Math.max(...wordCount);
};


/*
EXPLANATION

We create a new array that holds the lengths of the sentences in the input array
We do that by mapping the original array and splitting each sentence, and returning its length

We return the maximum value of our wordCount array
*/

var mostWordsFoundCommented = function (sentences) {
  // Initialize wordCount array and change sentences into an array of sentence lengths
  const wordCount = sentences.map((sentence) => sentence.split(' ').length);
  // Return the maximum value in wordCount array
  return Math.max(...wordCount);
};