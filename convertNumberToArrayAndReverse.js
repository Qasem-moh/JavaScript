function convertNumberToArrayAndReverse(n) {
    // //convert number to string
    // let str = n.toString()
    //
    // //convert to array
    // let arr = str.split("")
    //
    // // convert string in array to number
    // arr = arr.map(x => parseInt(x))
    //
    // //reverse the array
    // arr.reverse()
    // return arr
    /////////////////////////////////////////////////////////////////////////////////////////////
    // answer in one line
    return n.toString().split("").map(x => +x).reverse()

    //////////////////////////////////////////////////////////////////////////////////////
    //third answer to use empty array

    let str
}

console.log(convertNumberToArrayAndReverse(456321))
console.log(convertNumberToArrayAndReverse(785164))