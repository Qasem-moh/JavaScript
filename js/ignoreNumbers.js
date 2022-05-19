let ignoreNumbers = 'Qase1993m45';

let ign = ignoreNumbers.split("").map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : ""
}).join("")
console.log(ign)

let ing2 = ignoreNumbers.split("").map(a => isNaN(parseInt(a)) ? a : "").join("")
console.log(ing2)