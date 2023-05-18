// const calculate = (a,b,addition)=>{
//     return addition(a,b);
// }

// function addition(a,b){return a+b;}

// const addition= (a,b)=>a+b;

// console.log(calculate(2,3,addition));
// setTimeout(function(){
//     console.log("heel");
// },  4000 );


// console.log("fgchbnj");
// console.log("ertyu");
/**
 * let c = 3;
let d = 4;
console.log(sum(c,d));

function sum( a , b) {
    console.log(a+b);
    return 5;
}
 */


function getCheese(callback){

    setTimeout(()=>{
       const cheese = "🧀";
       console.log("here is cheese ",cheese);
      callback(cheese);
    },2000);

   
}

function makeDough(cheese){

    setTimeout(()=>{

        const dough = cheese+"";
        
    },2000);

}

getCheese((cheese)=>{
    console.log("got the cheese ",cheese);
});


