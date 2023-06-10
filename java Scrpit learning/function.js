const btn1 = document.getElementById('btn1').value;
const btn2 = document.getElementById('btn2').value;
const eq = document.getElementById("eq");
const sum = document.getElementById("sum");

function butn1(){
    console.log(btn1);
}

function butn2(){
    console.log(btn2);
}




function sumV(){
  var a = parseInt(btn1);
  var b = parseInt(btn2);

  console.log(a+b);

}


eq.addEventListener('click',sum)