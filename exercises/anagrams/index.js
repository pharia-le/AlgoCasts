// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     function charMap(str) {
        // const mod = str.replace(/[^\w]/g,'').toLowerCase()
        // let charMap = {}
        // mod.split('').reduce((chars, char) => {
        //     charMap[char] = charMap + 1 || 1;
        //     return chars
        // }, {})
        // return charMap
//     }
    // let charMapA = charMap(stringA)
    // let charMapB = charMap(stringB)
//     let longerMap = charMapB
//     let shorterMap = charMapA
//     if (Object.keys(charMapA).length >= Object.keys(charMapB).length) {
//         longerMap = charMapA
//         shorterMap = charMapB
//     }
//     for (let char in longerMap) {
//         if (!shorterMap[char] || shorterMap[char] !== longerMap[char]) return false
//     }
//     return true
// }

// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA)
//     const bCharMap = buildCharMap(stringB)

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false
//     }

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) return false
//     }

//     return true
// }

// function buildCharMap(str) {
//     let charMap = {}

//     str.replace(/[^\w]/g,'').toLowerCase().split('')
//         .reduce((chars, char) => {
//             charMap[char] = charMap + 1 || 1;
//             return chars
//         }, {})
        
//     return charMap
// }

function anagrams(stringA, stringB) {
    return cleanStr(stringA) === cleanStr(stringB)
}

function cleanStr(str) {
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
}

module.exports = anagrams;
