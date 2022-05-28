/**
 DOM [Events]
 - Use Events On HTML
 - Use Events On JS
 --- onclick
 --- oncontextmenu
 --- onmouseenter
 --- onmouseleave

 --- onload
 --- onscroll
 --- onresize

 --- onfocus
 --- onblur
 --- onsubmit
 */

let myButton = document.getElementById('btn');
console.log(myButton);
myButton.onclick = function () {
    console.log(`You clicked me`);
    console.log(`You clicked me ${this.id}`);
}