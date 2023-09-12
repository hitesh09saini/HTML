// (()=>{
//    console.log("hiii");
// })()

// data private

// (()=>{
    
//     let pas = '51165'
//     console.log(pas);

//  })()

// const point = (()=>{
//     let count =0;
//     return {
//         baclance:()=>{
//             return count;
//         },
//         increament:()=>{
//             count++;
//         },
//         reset:()=>{
//             count =0;
//         },
//     }
// })()

// point.increament();
// point.increament();
// point.increament();
// console.log(point.baclance());


// pure function


// function addd(a,b){
//     return a+b;
// }
// console.log(addd(2,3));

// curring

// function volume(length){
//     return function(width){
//         return function(hight){
//             return length*width*hight;
//         }
//     }
// }

// console.log(
//     volume(3)(4)(6)
// );