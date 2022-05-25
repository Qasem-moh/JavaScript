/**
  Object
  - Nested Object And Trainings
*/

let user = {
    name:"Qasem",
    age:30,
    skills:["HTML","CSS","JS"],
    available:false,
    address:{
        ksa:'Riyadh',
        jordan:{
            one:'Amman',
            two:'Irbid'
        },
    },
    checkAvailability:function(){
        if(this.available){
            return "Available";
        }else{
            return "Not Available";
        }
    }
}
console.log(user.checkAvailability())
console.log(user.address.jordan.one)
console.log(user.address.jordan.two)
console.log(user.address.ksa)
console.log(user["address"]["ksa"])
console.log(user["address"]["jordan"])
console.log(user["address"]["jordan"]["one"])
console.log(user["address"]["jordan"]["two"])
console.log(user.skills[0])
console.log(user.skills[1])
console.log(user.skills[2])
console.log(user.name)
console.log(user.age)
console.log(user.available)
