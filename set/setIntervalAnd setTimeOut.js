

// setInterval(sayHello, 1000);

//
// function sayHello() {
//   console.log("Hello");
//   console.log("Qasem");
// }

let div=document.querySelector("div");
function countDown(){
  div.innerHTML-=1;
  if (div.innerHTML=="0"){
    clearInterval(counter);
  }
}
let counter=setInterval(countDown,1000);
