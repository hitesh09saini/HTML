// closure

function outerfunction(num){

  
    return function inner(){
        return num;
    }
}

console.log(outerfunction(8)());