// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

//first solution
let filterFriends = friends.filter(a => a.startsWith("A") ? a : "")
//second solution
let filterFriends2 = friends.filter(a => a[0] === "A" ? a : "")
console.log(filterFriends)
console.log(filterFriends2)


// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];
// filter Even Numbers
let EvenNumber = numbers.filter(a => a % 2 == 0 ? a : "")
console.log(EvenNumber)







