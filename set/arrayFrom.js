console.log(Array.from('qasem'))
console.log(Array.from('12345', x => x * x))
console.log(Array.from('12345', function (n) {
    return +n + +n
}))