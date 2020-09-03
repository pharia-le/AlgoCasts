// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    function charMap(str) {
        const mod = str.replace(/[^\w]/g,'').toLowerCase()
        let charMap = {}
        mod.split('').reduce((chars, char) => {
            charMap[char] = charMap + 1 || 1;
            return chars
        }, {})
        return charMap
    }
    let charMapA = charMap(stringA)
    let charMapB = charMap(stringB)
    let longerMap = charMapB
    let shorterMap = charMapA
    if (Object.keys(charMapA).length >= Object.keys(charMapB).length) {
        longerMap = charMapA
        shorterMap = charMapB
    }
    for (let char in longerMap) {
        if (!shorterMap[char] || shorterMap[char] !== longerMap[char]) return false
    }
    return true
}

module.exports = anagrams;
