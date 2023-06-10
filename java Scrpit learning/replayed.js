 function about(hobby, favMusic){
    console.log(this.firstname,this.age,hobby,favMusic);
 }

 const user1 ={
    firstname: "Hitesh",
    age : 18
 }

 const user2 ={
    firstname: "Jyoti",
    age : 20
 }

//  call
 about.call(user2,"guitar", "moazrt")

// apply
 about.apply(user2,["guitar", "moazrt"])

//  bind

const fun = about.bind(user2,"guitar", "moazrt")

fun();