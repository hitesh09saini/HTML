
const person ={name:"hitesh",age:20};
console.log(person);
 
//add
person.gender="male";

console.log(person["name"]);

//add

person["work"] ="student";

console.log(person);

const key ="email";


person[key] ="hitesh9694saini@gmail.com";

console.log(person);
 

for(let k in person){

    console.log(person[k]);
}