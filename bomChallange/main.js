
let inp=document.querySelector('#inp');
let btn=document.querySelector('#btn');
let out=document.querySelector('#out');
let emptyArray=[];

btn.addEventListener('click',function(){
    emptyArray.push(inp.value);
    emptyArray.map(function(item){
        window.localStorage.setItem('item',item);
    });
    // window.localStorage.setItem('inp',emptyArray);
    console.log(window.localStorage.getItem('item'));
})