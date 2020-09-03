// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let i=0; i<n; i++) {
        let hashes = ''
        let spaces = ''
        while (hashes.length < i+1) hashes += '#'
        while (hashes.length + spaces.length !== n) spaces += ' '
        console.log(`${hashes}${spaces}`)
    }
}

module.exports = steps;
