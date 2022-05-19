let stringWord="bitcoin take over the world maybe who knows perhaps"

// function findShort(s){
//     let result=stringWord.split(" ").map(ele=>ele.length)
//         .sort((a,b)=>a-b)[0]
//     return result
//     console.log(result)
// }
//
// console.log(findShort(stringWord))

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}

console.log(findShort(stringWord))