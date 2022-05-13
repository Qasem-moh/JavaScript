
// alert("hello")
let titleArt, descraptionArt, dateArt;
titleArt = "Elzero";
descraptionArt = "Elzero Web School";
dateArt = "25/10";

// let body=document.getElementsByTagName('body')[0]
const PrintData=()=>{
    let dataA=document.getElementById("container")
let h3T=document.createElement('h3')
dataA.append(h3T)

let PargraphArt=document.createElement("p")
dataA.append(PargraphArt)

let spanDate=document.createElement("span")
dataA.append(spanDate)
h3T.textContent=titleArt
PargraphArt.textContent=descraptionArt
spanDate.textContent=dateArt
}

PrintData()
PrintData()
PrintData()

let a=10
let b='20'
console.log(+b+a);