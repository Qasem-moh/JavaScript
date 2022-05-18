// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends)
// console.log(myFriends.slice(-4,-2))

function generateYears(start, end, exclude) {
    for (let i = start; i <= end; i++) {
        if (i === exclude) {
            continue;
        }
        console.log(i)
    }
}

// generateYears(2000, 2021, 2020)


// function sayHello(username,age='unknown') {
//
//     return `Hello ${username} you are ${age} years old`
// }
//
// console.log(sayHello('',12))

