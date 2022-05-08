// function missingLetter(givenLetter) {
//     let alpha = "abcdefghijklmnopqrstuvwxyz";
//     let start = alpha.indexOf(givenLetter[0]);
//     for (let i = 0; i < givenLetter.length; i++) {
//
//         if (givenLetter[i] !== alpha[start + i]) {
//             return alpha[start + i];
//         }
//     }
//     return "No missing letter";
// }
//
// console.log(missingLetter('abce'));

///2/////////////////////////////////////////////////////////////////////////////////////////////
function missingLetter(givenLetter) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let start = alpha.indexOf(givenLetter[0]);
    let len = givenLetter.length;
    // console.log(start + len);
    for (let i = 0; i < start + len; i++) {
        // console.log(alpha[i]);
        if (!givenLetter.includes(alpha[i])) {
            return alpha[i];
        }
    }
    return "No missing letter";
}

console.log(missingLetter('abce'));