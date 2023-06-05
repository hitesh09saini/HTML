// es6

const ar = ["value1","value3"];


const [v1, v2] =ar;

console.log(v1);
console.log(v2);


const a = ar.splice(0);

console.log(a);

const [...v3]=a;

console.log(v3);
