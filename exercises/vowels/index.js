// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const VOWELS = 'aeiou'
    return str.split('').reduce((accumulator, ele) => {
        if (VOWELS.includes(ele.toLowerCase())) {
            return accumulator+=1
        }
        return accumulator
     }, 0)
}

module.exports = vowels;
