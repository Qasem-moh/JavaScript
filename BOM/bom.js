/**
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

let confirmResult = confirm("Are You Sure?");
console.log(confirmResult);

if (confirmResult) {
    console.log("You Clicked Ok");
}else {
    console.log("You Clicked Cancel");
}