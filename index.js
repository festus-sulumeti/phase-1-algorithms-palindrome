function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  1. Split the word into an array of characters
  2. Reverse the array
  3. Join the array back into a string
  4. Compare the original word to the reversed word
*/

/*
  Add written explanation of your solution here
  I used the built-in methods split, reverse, and join to reverse the word.
  I then compared the original word to the reversed word.
  If they are the same, the word is a palindrome.
  If they are different, the word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
