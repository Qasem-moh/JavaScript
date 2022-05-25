/**
 Function this Keyword
 - this Introduction
 - this Inside Object Method
 --- When a function is called as a method of an object,
 --- its this is set to the object the method is called on.
 - Global Object
 - Test Variables With Window And This
 - Global Context
 - Function Context

 Search
 - Strict Mode
 */

function sayHello() {
    console.log(this);
    return this;
}

sayHello();

let user = {
    name: 'John', age: 30, ageInDays: function () {
        console.log(this);
        console.log(this.age * 365);
    }
}
console.log(user.ageInDays());