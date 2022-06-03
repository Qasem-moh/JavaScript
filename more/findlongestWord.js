'use strict'


function findLongestWord(ListWord) {
    // let arraySplit = ListWord.split(" ")
    // let longestLen = 0;
    // let longestWord;
    //
    // for (let i = 0; i < arraySplit.length; i++) {
    //     if (arraySplit[i].length > longestLen) {
    //         longestLen = arraySplit[i].length
    //         longestWord = arraySplit[i]
    //     }
    //
    // }
////////////////////////////////////////////////////////////////////////////////////////////
    let longestWord = ListWord.split(" ").reduce(function (longest, current) {
        return current.length > longest.length ? current : longest
    })

    return longestWord
}

console.log(findLongestWord("I Love You youuuuuuuuuuuuuuuuu"))
