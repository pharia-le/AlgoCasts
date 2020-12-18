// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = str.split('')
        .reduce((chars, char) => {
            chars[char] = chars[char] + 1 || 1
            return chars
        },{})
    return Object.keys(charMap).sort((a,b) => charMap[b] - charMap[a])[0]
}

module.exports = maxChar;
