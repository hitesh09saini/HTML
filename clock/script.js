const deg = 6;
const hr =  document.querySelector('#hr');
const mn =  document.querySelector('#mi');
const sc =  document.querySelector('#sc');



let d;
let hh;
let mm;
let ss;
let time;
let date;
let year;
let month;
let day;
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
setInterval(()=>{
 d = new Date();
 hh = d.getHours()*30;
 mm = d.getMinutes()*deg;
 ss = d.getSeconds()*deg;

hr.style.transform =  `rotateZ(${(hh)+(mm/12)}deg)`;
mn.style.transform =  `rotateZ(${(mm)}deg)`;
sc.style.transform =  `rotateZ(${(ss)}deg)`;
date = d.getDate();
day = dayNames[d.getDay()];
month= monthNames[d.getMonth()];
year = d.getFullYear();
time = d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds();
document.getElementById('time').innerHTML =time+"<br><br> "+date +" "+month+"  "+year+" , "+day ;
},1000);

