
function createUser(fN ,lN,email,age,address){
    // const user = {};
    // const user = Object.create(userMethod);
    const user = Object.create(createUser.prototype);
    user.firstName  = fN;
    user.LastName = lN;
    user.email = email;
    user.age = age;
    user.address = address;

    
    // user.about =function(){
    //     return `${this.firstName} is ${this.age} years old`
    // };

    // user.is18= function(){
    //     return this.age>=18;
    // }


    return user;
}

// const userMethod ={
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },

//     is18: function(){
//         return this.age>=18;
//     }
// }


createUser.prototype.about =  function(){
    return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18 =  function(){
    return this.age>=18;
};

const user1 = createUser("Hitesh","Saini","hitesh9694saini@gmail.com",18,"Mahwa")
 console.log(user1.about());
 console.log(user1.is18());
