

// Object  destructuring 


// const band ={
//     bandName : "led zepplin",
//     famousSong : "stairway to heaven",
//     year : 1986

// };

// let bandName = band.bandName;

// const  FamousSong = band.famousSong;
// bandName = "queen";


// let {bandName ,famousSong ,...restProps} = band;


// console.log(restProps);



const users = [
    {userId : 01, Name :"Hitesh",gender :"Male"},
    {userId : 02, Name :"Monu",gender :"Male" },
    {userId : 03, Name :"Sam",gender :"Female"}
]

console.log(users);

let find = "Not Found";
for(let user of users){

   if(user.Name== "Monu"){
       find = "True"+"  "+user.Name;
   }
   
}

console.log(find);