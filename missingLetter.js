function missingLetter(givenLetter) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let start = alpha.indexOf(givenLetter[0]);
    for (let i = 0; i < givenLetter.length; i++) {

        if (givenLetter[i] !== alpha[start + i]) {
            return alpha[start + i];
        }
    }
    return "No missing letter";
}

console.log(missingLetter('abce'));