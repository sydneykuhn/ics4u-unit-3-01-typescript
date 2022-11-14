/**
 * The program reverses a string using recursion.
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2022-11-14
 */

/**
 *
 *
 * @param {string} aString accepts a string
 * @returns {string} the string backwards, using recursion
 */
function reverseString(aString: string): string {
  // Reversing the string using recursion
  if (aString === '') {
    return aString
  } else {
    return reverseString(aString.substr(1)) + aString.charAt(0)
  }
}

// Input
// This will be the string that is reversed
const aString = 'recursion'

// Process
const reversedString = reverseString(aString)

// Output
console.log(`\nThe original string is: ${aString}`)
console.log(`The reversed string is: ${reversedString}`)

console.log('\nDone.')
