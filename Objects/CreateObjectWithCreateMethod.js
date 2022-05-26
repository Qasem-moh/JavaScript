/**
 Object
 - Create Object With Create Method
 */

let user = {
    age: 20,
    doubleAge: function () {
        return this.age * 2;
    }
}
console.log(user)
console.log(user.age)
console.log(user.doubleAge());
/////////////////////////////////////////////////

// let obj = Object.create({});
// obj.a=1;
// console.log(obj)
/////////////////////////////////////////////////
let copyObj = Object.create(user);
copyObj.age = 30;
console.log(copyObj.age)
console.log(copyObj.doubleAge())