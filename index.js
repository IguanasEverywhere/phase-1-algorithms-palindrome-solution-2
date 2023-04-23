function isPalindrome(word) {
  // Write your algorithm here
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    if (word[start] !== word[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}

/*
  Add your pseudocode here

  have variable pointer at beginning of word
  have variable pointer at end of word
  have while loop: while start ptr is less than end ptr:
    check if char at start is same as char at end
      if not, return false
  if loop finishes, return true
*/

/*
  Add written explanation of your solution here

  In a single while loop, we can use two pointers at beginning and end of the string to compare first
  to last character, second to second-from-last character, etc. If there's a mismatch, we know we don't
  have a palindrome, so we exit the function by returning false. If the loop finishes, this means our
  first pointer is now larger than our second pointer, meaning we've crossed the halfway point. This means
  we have a palindrome because all the first half characters matched the appropriate second half characters.
  This is more efficient and saves time and space over a solution which iteraters over the entire string
  and creates new arrays and/or strings to solve the problem.
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
