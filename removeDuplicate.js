function removeDuplicate(words) {
    let wordList = words.split(' ')
    let result = []
    for (let i = 0; i < wordList.length; i++) {
        if (result.indexOf(wordList[i]) === -1) {
            result.push(wordList[i])
        }
    }
    return result.join(' ')
}

console.log(removeDuplicate("qasem qasem mohammad"))