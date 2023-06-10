 function personInfo() {
    console.log(`person name is ${this.name} and age is ${this.age}`);
 }

 const p1 ={
    name : "Hitesh",
    age:   19,
    about : personInfo

 }

 const p2 ={
    name : "Kamla",
    age:   33,
    about : personInfo

 }

 const p3 ={
    name : "Jyoti",
    age:   21,
    about : personInfo

 }

 p2.about();