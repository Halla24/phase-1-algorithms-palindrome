function isPalindrome(str) {
  // Remove any non-alphabet characters and convert to lowercase
  str = str.replace(/[^a-z]/g, "").toLowerCase();

  // Compare the original string with its reverse
  return str === str.split("").reverse().join("");
}

/*
 Function isPalindrome(str)
  // Step 1: Remove non-alphabet characters and convert to lowercase
  str = str.replace(/[^a-z]/g, '').toLowerCase()

  // Step 2: Compare the original string with its reverse
  If str equals str.split('').reverse().join('')
    Return true
  Else
    Return false
  End If
End Function
*/

/*
  Start by defining the isPalindrome function that takes a single argument, str, which is the
   string we want to check for palindromes.

In Step 1, remove non-alphabet characters from the input string and convert it to lowercase.
This is done using the replace() method with a regular expression that matches any character
not in the range 'a' to 'z' (inclusive). Then, toLowerCase() is called to ensure that the string
is entirely in lowercase.

In Step 2, compare the modified str with its reverse. This is done by splitting the string into an
array of characters using split(''), reversing the array using reverse(), and then joining the
reversed array back into a string using join('').

Finally, if the modified string is equal to its reverse, the function returns true, indicating that
 the input string is a palindrome. Otherwise, it returns false, indicating that the input string is
  not a palindrom.(Chatgpt explanation)
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
