// spread operator

let a = [2,3,4,5,5,1];

// copy

let newArr = [...a];
// newArr[0] =1000;
// console.log(newArr);
// console.log(a);


// adding new value

// let a2 = [...a, 30]

// console.log(a2);

let obj = {
    name :"pwSkills"
    ,
    course: "full stack development"
}


let newObj = {...obj}


 newObj.id = "3";
//  console.log(obj);
// console.log(newObj);


let arr1 = [1,2,3,4]
let arr2 = [5,6,7]

let arr = [...arr1,...arr2];

// console.log(arr);


let name ="hitesh";
let ar = [...name];
// console.log(ar);


// rest operator


// collecting all parameter in a function
function sumOfAllNu(...n){
    return n;
}

// console.log(sumOfAllNu(1,2,3,4,5));

function Arr(...n){
     return n.reduce((acc,curr) => acc+curr,0);
}

// console.log(Arr(1,2,3,4,5));

// destructuring

let h = ['html','css','js','node','express']

let [e1,e2,...r] = h;


console.log(e1,e2);
console.log(r);