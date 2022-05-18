// function removeDuplicateWord(sentance) {
//     let wordList = sentance.split(" ")
//     let uniqueWordList = []
//
//     for (let i = 0; i<wordList.length; i++)
//     {
//         if (uniqueWordList.indexOf(wordList[i]) == -1) {
//             uniqueWordList.push(wordList[i])
//         }
//
//     }
//
//     return uniqueWordList.join(" ")
// }
function removeDuplicateWord(sentance) {
// return sentance.split(" ").filter((word, index, array) => array.indexOf(word) === index).join(" ")
return(...new set(sentance.split(" ")).join(" "))


}

console.log(removeDuplicateWord("hello hello Qasem Qasem Mohammad hello"))