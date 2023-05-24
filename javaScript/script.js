 
 alert("hello every one good morning");

 var bo =confirm("Are you chutiya");

 
 if(bo){
alert("Ok, you can change your Name");
let namastebtn = document.querySelector('button');


let name = prompt('Enter Your Roll Number');
alert("ok ,"+name);
namastebtn.textContent ='Roll No.1 :'+name;

 }

let f = prompt("enter your first name");
let l = prompt("enter your last name");

if(f!=null&&l!=null){
    myIntro(f ,l);
}

 function myIntro(f ,l){
    document.write("Hi, "+f+" "+l);
 }