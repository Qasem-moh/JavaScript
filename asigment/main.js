let addValue = ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'ew', 'w']
let removeValue = ['w', 'Qasem']
let emptyArray=[]
let inputAdd = document.querySelector('.classes-to-add')
let inputRemove = document.querySelector('.classes-to-remove')
let inputCheck = document.querySelector('.element')
let classesList = document.querySelector('.classes-list').querySelector('div')

classesList.setAttribute('class', 'classes-div')
classesList.setAttribute('id', 'id-div')

inputCheck.onclick = function () {
    addValue=[]
    inputAdd.value.trim().split(' ').map(function (item) {
        addValue.push(item)
    })
    console.log(addValue)
printArray()
}

//check remove input
// inputRemove.onchange = function () {
//     removeValue = inputRemove.value.trim().split(' ')
//     console.log(removeValue)
// }

function printArray() {
    addValue.map(function (item) {
        let spanData = document.createElement('span')
        spanData.setAttribute('class', 'span-data')
        spanData.textContent = item
        classesList.appendChild(spanData)
    })
}


let filterData=removeValue.filter(function (item) {
    return addValue.indexOf(item) === -1

})

console.log(filterData)
addValue=filterData
printArray()