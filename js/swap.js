let swappingCase = 'QaSeM';
let sw = swappingCase.split('').map(ele => {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
}).join('')
console.log(sw)