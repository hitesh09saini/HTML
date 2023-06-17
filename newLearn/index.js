const al=()=>{
    alert('perent ');
 }
 const cl=()=>{
    alert('child ');
    // event.stopPropagation();
 }
 const p = document.getElementById("contin");
 const c = document.getElementById("box");


 c.addEventListener('click',cl,true);

 p.addEventListener('click',al,true);