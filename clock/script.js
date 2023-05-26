const deg = 6;
const hr =  document.querySelector('#hr');
const mn =  document.querySelector('#mi');
const sc =  document.querySelector('#sc');


let day = new Date();
setInterval(()=>{

let hh = day.getHours()*30;
let mm = day.getMinutes()*deg;
let ss = day.getSeconds()*deg;

hr.style.transform =  `rotateZ(${(hh)+(mm/12)}deg)`;
mn.style.transform =  `rotateZ(${(mm)}deg)`;
mn.style.transform =  `rotateZ(${(sc)}deg)`;
})

