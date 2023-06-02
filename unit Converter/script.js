// calculator
const con = document.getElementById('container1');
const calculator = document.getElementById('cal');
const close = document.getElementById('close');


calculator.addEventListener('click',function(){
    calculator.classList.toggle('active');
    con.classList.toggle('active');
   
});

close.addEventListener('click',function(){
    calculator.classList.toggle('active');
    con.classList.toggle('active');
   
});





const tog = document.getElementById('heading');
const cont = document.getElementById('container');
const ic = document.getElementById('icon');


tog.addEventListener('click',function(){
    cont.classList.toggle('active');
    tog.classList.toggle('color');
    ic.classList.toggle('fa-spin');
});




var feet = document.getElementById('feet');
var cm = document.getElementById('cm');
var inch = document.getElementById('inch');
var m = document.getElementById('m');
var km = document.getElementById('km');
var mm = document.getElementById('mm');
var mim = document.getElementById('mim');
var nm = document.getElementById('nm');
var mile = document.getElementById('mile');
var yard = document.getElementById('yard');
var lgy = document.getElementById('lgy');



feet.addEventListener('input',function(){
    let f = this.value;
    let i = f*12;
    inch .value = i;
    let c = f*30.48;
    cm .value = c;
    let mi = f*0.3048;
    m.value = mi;
    let kmi = f*0.0003048;
    km.value = kmi;
    let mmi = f*304.8;
    mm.value = mmi;
    let mimi = f*304800;
    mim.value = mimi;
    let nmi = f*304800000;
    nm.value= nmi;
    let milei = f*0.0001893932;
    mile.value = milei;
    let yardi = f*0.3333333333;
    yard.value = yardi;
    let lgyi = f*3.22176254E-17;
    lgy.value = lgyi;
   

});

inch.addEventListener('input',function(){
    let i = this.value;
    let f = i/12;
    feet.value = f;
    let c = i*2.54;
    cm.value = c;
    let mi = i/39.37007874;
    m.value = mi;
    let kmi = i/39370.07874;
    km.value = kmi;
    let mmi = i*25.4;
    mm.value = mmi;
    let mimi = i*25400;
    mim.value = mimi;
    let nmi = i*25400000;
    nm.value= nmi;
    let milei = i*0.0000157828;
    mile.value = milei;
    let yardi = i*0.0277777778;
    yard.value = yardi;
    let lgyi = i*2.684802117E-18;
    lgy.value = lgyi;

});


cm.addEventListener('input', function() {
    
    let c = this.value;
    let f =c/30.48;
    feet.value = f;
    let i = c/2.54;
    inch.value = i;
    let mi = c/100;
    m.value = mi;
    let kmi = c/100000;
    km.value = kmi;
    let mmi = c*10;
    mm.value = mmi;
    let mimi = c*10000;
    mim.value = mimi;
    let nmi = c*10000000;
    nm.value= nmi;
    let milei = c*0.0000062137;
    mile.value = milei;
    let yardi = c*0.010936133;
    yard.value = yardi;
    let lgyi = c*1.057008707E-18;
    lgy.value = lgyi;

    

});

m.addEventListener('input' , function () {
    let mi = this.value;
    let f = mi*3.280839895;
    feet.value = f;
    let i = mi*39.37007874;
    inch.value = i;
     let c = mi*100;
     cm.value = c;
    let kmi = mi/1000;
    km.value = kmi;
    let mmi = mi*1000;
    mm.value = mmi;
    let mimi = mi*1000000;
    mim.value = mimi;
    let nmi = mi*1000000000;
    nm.value= nmi;
    let milei = mi/1609.35;
    mile.value = milei;
    let yardi = mi*1.0936132983;
    yard.value = yardi;
    let lgyi = mi*1.057008707E-16;
    lgy.value = lgyi;
    
});

km.addEventListener('input' , function () {
    let kmi = this.value;
    let f = kmi*3280.839895;
    feet.value = f;
    let i = kmi*39370.07874;
    inch.value = i;
     let c = kmi*100000;
     cm.value = c;
    let mi = kmi*1000;
     m.value = mi;
    let mmi = kmi*1000000;
    mm.value = mmi;
    let mimi = kmi*1000000000;
    mim.value = mimi;
    let nmi = kmi*1000000000000;
    nm.value= nmi;
    let milei = kmi/1.60935;
    mile.value = milei;
    let yardi = kmi*1093.6132983;
    yard.value = yardi;
    let lgyi = kmi*1.057008707E-13;
    lgy.value = lgyi;
});

mm.addEventListener('input' , function () {
    let mmi = this.value;
    let f = mmi*3280.839895;
    feet.value = f;
    let i = mmi*39370.07874;
    inch.value = i;
     let c = mmi*0.1;
     cm.value = c;
    let mi = mmi*0.001;
     m.value = mi;
    let kmi = mmi*0.000001;
    km.value = kmi;
    let mimi = mmi*1000;
    mim.value = mimi;
    let nmi = mmi*1000000;
    nm.value= nmi;
    let milei = mmi*6.213688756E-7;
    mile.value = milei;
    let yardi = mmi*0.0010936133;
    yard.value = yardi;
    let lgyi = mmi*1.057008707E-19;
    lgy.value = lgyi;

});
mim.addEventListener('input' , function () {
    let mimi = this.value;
    let f = mimi*0.0000032808;
    feet.value = f;
    let i = mimi*0.0000393701;
    inch.value = i;
     let c = mimi*0.0001;
     cm.value = c;
    let mi = mimi*0.000001;
     m.value = mi;
    let kmi = mimi*9.999999999E-10;
    km.value = kmi;
    let mmi = mimi*0.001;
     mm.value = mmi;
    let nmi = mimi*1000;
    nm.value= nmi;
    let milei = mimi*6.213688756E-10;
    mile.value = milei;
    let yardi = mimi*0.0000010936;
    yard.value = yardi;
    let lgyi = mimi*1.057008707E-22;
    lgy.value = lgyi;
});

nm.addEventListener('input' , function () {
    let nmi = this.value;
    let f = nmi*3.280839895E-9;
    feet.value = f;
    let i = nmi*3.937007874E-8;
    inch.value = i;
     let c = nmi*1.E-7;
     cm.value = c;
    let mi = nmi*1.E-9;
     m.value = mi;
    let kmi = nmi*1.E-12;
    km.value = kmi;
    let mmi = nmi*0.000001;
     mm.value = mmi;
    let mimi = nmi*0.001;
    mim.value= mimi;
    let milei = nmi*6.213688756E-13;
    mile.value = milei;
    let yardi = nmi*1.093613298E-9;
    yard.value = yardi;
    let lgyi = nmi*1.057008707E-25;
    lgy.value = lgyi;
    
});

mile.addEventListener('input' , function () {
    let milei = this.value;
    let f = milei*5280.019685;
    feet.value = f;
    let i = milei*63360.23622;
    inch.value = i;
     let c = milei*160935;
     cm.value = c;
    let mi = milei*1609.35;
     m.value = mi;
    let kmi = milei*1.60935;
    km.value = kmi;
    let mmi = milei*1609350;
     mm.value = mmi;
    let mimi = milei*1609350000;
    mim.value= mimi;
    let nmi = milei*1609350000000;
    nm.value = nmi;
    let yardi = milei*1760.0065617;
    yard.value = yardi;
    let lgyi = milei*1.701096963E-13;
    lgy.value = lgyi;
});

yard.addEventListener('input' , function () {
    let yardi = this.value;
    let f = yardi*3;
    feet.value = f;
    let i = yardi*36;
    inch.value = i;
     let c = yardi*91.44;
     cm.value = c;
    let mi = yardi*0.9144;
     m.value = mi;
    let kmi = yardi*0.0009144;
    km.value = kmi;
    let mmi = yardi*914.4;
     mm.value = mmi;
    let mimi = yardi*914400;
    mim.value= mimi;
    let nmi = yardi*914400000;
    nm.value = nmi;
    let milei= yardi*0.0005681797;
    mile.value = milei;
    let lgyi = yardi*9.665287622E-17;
    lgy.value = lgyi;
});

lgy.addEventListener('input' , function () {
    let lgyi = this.value;
    let f = lgyi*31038910761154856;
    feet.value = f;
    let i = lgyi*372466929133858300;
    inch.value = i;
     let c = lgyi*946066000000000000;
     cm.value = c;
    let mi = lgyi*9460660000000000;
     m.value = mi;
    let kmi = lgyi*9460660000000;
    km.value = kmi;
    let mmi = lgyi*9460660000000000000;
     mm.value = mmi;
    let mimi = lgyi*9.46066E+21;
    mim.value= mimi;
    let nmi = lgyi*9.460659999E+24;
    nm.value = nmi;
    let milei= lgyi*5878559666946;
    mile.value = milei;
    let yardi = lgyi*10346303587051618;
    yard.value = yardi;
});


const tog1 = document.getElementById('heading1');
const cont1 = document.getElementById('container1');
const ic1 = document.getElementById('icon1');

tog1.addEventListener('click',function(){
    cont1.classList.toggle('active');
    tog1.classList.toggle('color');
    ic1.classList.toggle('fa-spin');
});


var kg = document.getElementById('kg');
var g = document.getElementById('g');
var mg = document.getElementById('mg');
var mt = document.getElementById('mt');
var lt = document.getElementById('lt');
var st = document.getElementById('st');
var p = document.getElementById('p');
var o = document.getElementById('o');
var c = document.getElementById('c');
var am = document.getElementById('am');



kg.addEventListener('input',function(){
    let kie = this.value;
    let gi = kie*1000;
    g .value = gi;
    let mgie = kie*1000000;
    mg .value = mgie;
    let mtie = kie*0.001;
    mt.value = mtie;
    let ltie = kie*0.0009842073;
    lt.value = ltie;
    let stie = kie*0.0011023122;
    st.value = stie;
    let pie = kie*2.2046244202;
    p.value = pie;
    let oie = kie*35.273990723;
    o.value= oie;
    let cie = kie*5000;
    c.value = cie;
    let amie = kie*6.022136652E+26;
    am.value = amie;
    

});

g.addEventListener('input',function(){
    let gi = this.value;
    
    let ki = gi*0.001;
    kg .value = ki;
    let mgie = gi*1000;
    mg .value = mgie;
    let mtie = gi*0.000001;
    mt.value = mtie;
    let ltie = gi*9.842073304E-7;
    lt.value = ltie;
    let stie = gi*0.0000011023;
    st.value = stie;
    let pie = gi*0.0022046244;
    p.value = pie;
    let oie = gi*0.0352739907;
    o.value= oie;
    let cie = gi*5;
    c.value = cie;
    let amie = gi*6.022136652E+23;
    am.value = amie;

});


mg.addEventListener('input', function() {
    
    let mgi = this.value;

    let ki = mgi*0.000001;
    kg .value = ki;
    let gi = mgi*0.001;
    g .value = gi;
    let mtie = mgi*9.999999999E-10;
    mt.value = mtie;
    let ltie = mgi*9.842073304E-10;
    lt.value = ltie;
    let stie = mgi*.10231221E-9;
    st.value = stie;
    let pie = mgi*0.0000022046;
    p.value = pie;
    let oie = mgi*0.000035274;
    o.value= oie;
    let cie = mgi*0.005;
    c.value = cie;
    let amie = mgi*602213665200000000000;
    am.value = amie;

    

});

mt.addEventListener('input' , function () {
    let mtie = this.value;

    let ki = mtie*1000;
    kg .value = ki;
    let gi = mtie*1000000;
    g .value = gi;
    let mgi = mtie*1000000000;
    mg.value = mgi;
    let ltie = mtie*0.9842073304;
    lt.value = ltie;
    let stie = mtie*1.1023122101;
    st.value = stie;
    let pie = mtie*2204.6244202;
    p.value = pie;
    let oie = mtie*35273.990723;
    o.value= oie;
    let cie = mtie*5000000;
    c.value = cie;
    let amie = mtie*6.022136652E+29;
    am.value = amie;

});

lt.addEventListener('input' , function () {
    let ltie = this.value;
    let ki = ltie*1016.04608;
    kg .value = ki;
    let gi = ltie*1016046.08;
    g .value = gi;
    let mgi = ltie*1016046080;
    mg.value = mgi;
    let mti = ltie*1.01604608;
    mt.value = mti;
    let stie = ltie*1.12;
    st.value = stie;
    let pie = ltie*2240;
    p.value = pie;
    let oie = ltie*35840;
    o.value= oie;
    let cie = ltie*5080230.4;
    c.value = cie;
    let amie = ltie*6.118768338E+29;
    am.value = amie;
});

st.addEventListener('input' , function () {
    let stie = this.value;

     let ki = stie*907.184;
     kg .value = ki;
    let gi = stie*907184;
    g .value = gi;
    let mgi = stie*907184000;
    mg.value = mgi;
    let mti = stie*0.907184;
    mt.value = mti;
    let lti = stie*0.8928571429;
    lt.value = lti;
    let pie = stie*2000;
    p.value = pie;
    let oie = stie*32000;
    o.value= oie;
    let cie = stie*4535920;
    c.value = cie;
    let amie = stie*5.463186016E+29;
    am.value = amie;
});
p.addEventListener('input' , function () {
    let pie = this.value;
    let ki = pie*0.453592;
    kg .value = ki;
   let gi = pie*453.592;
   g .value = gi;
   let mgi = pie*453592;
   mg.value = mgi;
   let mti = pie*0.000453592;
   mt.value = mti;
   let lti = pie*0.0004464286;
   lt.value = lti;
   let sti = pie*0.0005;
   st.value = sti;
   let oie = pie*16;
   o.value= oie;
   let cie = pie*2267.96;
   c.value = cie;
   let amie = pie*2.731593008E+26;
   am.value = amie;
});

o.addEventListener('input' , function () {
    let oie = this.value;
    let ki = oie*0.0283495;
    kg .value = ki;
   let gi = oie*28.3495;
   g .value = gi;
   let mgi = oie*28349.5;
   mg.value = mgi;
   let mti = oie*0.0000283495;
   mt.value = mti;
   let lti = oie*0.0000279018;
   lt.value = lti;
   let sti = oie*0.00003125;
   st.value = sti;
   let pi = oie*0.0625;
   p.value= pi;
   let cie = oie*141.7475;
   c.value = cie;
   let amie = oie*1.70724563E+25;
   am.value = amie;
});
c.addEventListener('input' , function () {
    let cie = this.value;

    let ki = cie*0.0002;
    kg .value = ki;
   let gi = cie*0.2;
   g .value = gi;
   let mgi = cie*200;
   mg.value = mgi;
   let mti = cie*2.E-7;
   mt.value = mti;
   let lti = cie*1.96841466E-7;
   lt.value = lti;
   let sti = cie*2.20462442E-7;
   st.value = sti;
   let pi = cie*0.0004409249;
   p.value= pi;
   let oi = cie*0.0070547981;
   o.value = oi;
   let amie = cie*1.20442733E+23;
   am.value = amie;
});

am.addEventListener('input' , function () {
    let amie = this.value;
   let ki = amie*1.660540199E-27;
    kg .value = ki;
   let gi = amie*1.660540199E-24;
   g .value = gi;
   let mgi = amie*1.660540199E-21;
   mg.value = mgi;
   let mti = amie*1.660540199E-30;
   mt.value = mti;
   let lti = amie*1.634315837E-30;
   lt.value = lti;
   let sti = amie*1.830433737E-30;
   st.value = sti;
   let pi = amie*3.660867475E-27;
   p.value= pi;
   let oi = amie*5.85738796E-26;
   o.value = oi;
   let ci = amie*8.302700999E-24;
   c.value = ci;
});

// temperature

const tog2 = document.getElementById('heading2');
const cont2 = document.getElementById('container2');
const ic2 = document.getElementById('icon2');

tog2.addEventListener('click',function(){
    cont2.classList.toggle('active');
    tog2.classList.toggle('color');
    ic2.classList.toggle('fa-spin');
});

var cl = document.getElementById('cl');
var kl = document.getElementById('kl');
var ft = document.getElementById('ft');


cl.addEventListener('input' , function () {
    let cli = this.value;
    let kli = cli*274.15;
    kl .value = kli;
    let fti = cli*33.8;
    ft .value = fti;
   
});
kl.addEventListener('input' , function () {
    let kli = this.value;

    let cli = kli*-272.15;
    cl.value = cli;
    let fti = kli*-457.87;
    ft .value = fti;
  
});

ft.addEventListener('input' , function () {
    let fti = this.value;
    let kli = fti*255.92777778;
    kl .value = kli;
    let cli = fti*-17.222222222;
    cl .value = cli;
  
});

//  Area
const tog3 = document.getElementById('heading3');
const cont3 = document.getElementById('container3');
const ic3 = document.getElementById('icon3');

tog3.addEventListener('click',function(){
    cont3.classList.toggle('active');
    tog3.classList.toggle('color');
    ic3.classList.toggle('fa-spin');
});


var sm = document.getElementById('sm');
var skm = document.getElementById('skm');
var scm = document.getElementById('scm');
var smm = document.getElementById('smm');
var smim = document.getElementById('smim');
var ha = document.getElementById('ha');
var sml = document.getElementById('sml');
var sy = document.getElementById('sy');
var sf = document.getElementById('sf');
var si = document.getElementById('si');
var aa = document.getElementById('aa');




sm.addEventListener('input',function(){
    let smii = this.value;

    let skmi = smii*0.000001;
    skm.value = skmi;
    let scmi = smii*10000;
    scm .value = scmi;
    let smmi = smii*1000000;
    smm.value = smmi;
    let smimi = smii*1000000000000;
    smim.value = smimi;
    let hai = smii*0.0001;
    ha.value = hai;
    let smli = smii*3.861018768E-7;
    sml.value = smli;
    let syi = smii*1.1959900463;
    sy.value= syi;
    let sfi = smii*10.763910417;
    sf.value =sfi;
    let sii = smii*1550.0031;
    si.value = sii;
    let aai = smii*0.0002471054;
    aa.value = aai;
   

});

skm.addEventListener('input',function(){
    let skmi = this.value;

    
    let smii = skmi*1000000;
    sm.value = smii;
    let scmi = skmi*10000000000;
    scm .value = scmi;
    let smmi = skmi*1000000000000;
    smm.value = smmi;
    let smimi = skmi*1000000000000000000;
    smim.value = smimi;
    let hai = skmi*100;
    ha.value = hai;
    let smli = skmi*0.3861018768;
    sml.value = smli;
    let syi = skmi*1195990.0463;
    sy.value= syi;
    let sfi = skmi*10763910.417;
    sf.value =sfi;
    let sii = skmi*1550003100;
    si.value = sii;
    let aai = skmi*247.10538147;
    aa.value = aai;
   


});


scm.addEventListener('input', function() {
    let scmi = this.value;

    let smii = scmi*0.0001;
    sm.value = smii;
    let skmi = scmi*1.E-10;
    skm .value = skmi;
    let smmi = scmi*100;
    smm.value = smmi;
    let smimi = scmi*100000000;
    smim.value = smimi;
    let hai = scmi*1.E-8;
    ha.value = hai;
    let smli = scmi*3.861018768E-11;
    sml.value = smli;
    let syi = scmi*0.000119599;
    sy.value= syi;
    let sfi = scmi*0.001076391;
    sf.value =sfi;
    let sii = scmi*0.15500031;
    si.value = sii;
    let aai = scmi*2.471053814E-8;
    aa.value = aai;

});

smm.addEventListener('input' , function () {
    let smmi = this.value;

    let smii = smmi*0.000001;
    sm.value = smii;
    let skmi = smmi*1.E-12;
    skm .value = skmi;
    let scmi = smmi*0.01;
    scm.value = scmi;
    let smimi = smmi*1000000;
    smim.value = smimi;
    let hai = smmi*9.999999999E-11;
    ha.value = hai;
    let smli = smmi*3.861018768E-13;
    sml.value = smli;
    let syi = smmi*0.000001196;
    sy.value= syi;
    let sfi = smmi*0.0000107639;
    sf.value =sfi;
    let sii = smmi*0.0015500031;
    si.value = sii;
    let aai = smmi*2.471053814E-10;
    aa.value = aai;

});

smim.addEventListener('input' , function () {
    let smimi = this.value;

    let smii = smimi*1.E-12;
    sm.value = smii;
    let skmi = smimi*1.E-18;
    skm .value = skmi;
    let scmi = smimi*9.999999999E-9;
    scm.value = scmi;
    let smmi = smimi*0.000001;
    smm.value = smmi;
    let hai = smimi*1.E-16;
    ha.value = hai;
    let smli = smimi*3.861018768E-19;
    sml.value = smli;
    let syi = smimi*1.195990046E-12;
    sy.value= syi;
    let sfi = smimi*1.076391041E-11;
    sf.value =sfi;
    let sii = smimi*1.5500031E-9;
    si.value = sii;
    let aai = smimi*2.471053814E-16;
    aa.value = aai;


});

ha.addEventListener('input' , function () {
    let hai = this.value;

    let smii = hai*10000;
    sm.value = smii;
    let skmi = hai*0.01;
    skm .value = skmi;
    let scmi = hai*100000000;
    scm.value = scmi;
    let smmi = hai*10000000000;
    smm.value = smmi;
    let smimi = hai*10000000000000000;
    smim.value = smimi;
    let smli = hai*0.0038610188;
    sml.value = smli;
    let syi = hai*11959.900463;
    sy.value= syi;
    let sfi = hai*107639.10417;
    sf.value =sfi;
    let sii = hai*15500031;
    si.value = sii;
    let aai = hai*2.4710538147;
    aa.value = aai;
});
sml.addEventListener('input' , function () {
    let smli = this.value;

    let smii = smli*2589990;
    sm.value = smii;
    let skmi = smli*2.58999;
    skm .value = skmi;
    let scmi = smli*25899900000;
    scm.value = scmi;
    let smmi = smli*2589990000000;
    smm.value = smmi;
    let smimi = smli*2589990000000000000;
    smim.value = smimi;
    let hai = smli*258.999;
    ha.value = hai;
    let syi = smli*3097602.26;
    sy.value= syi;
    let sfi = smli*27878420.34;
    sf.value =sfi;
    let sii = smli*4014492529;
    si.value = sii;
    let aai = smli*640.00046695;
    aa.value = aai;
});

sy.addEventListener('input' , function () {
    let syi = this.value;

    let smii = syi*0.83612736;
    sm.value = smii;
    let skmi = syi*8.3612736E-7;
    skm .value = skmi;
    let scmi = syi*8361.2736;
    scm.value = scmi;
    let smmi = syi*836127.36;
    smm.value = smmi;
    let smimi = syi*836127360000;
    smim.value = smimi;
    let hai = syi*0.0000836127;
    ha.value = hai;
    let smli = syi*3.228303429E-7;
    sml.value= smli;
    let sfi = syi*9;
    sf.value =sfi;
    let sii = syi*1296;
    si.value = sii;
    let aai = syi*0.0002066116;
    aa.value = aai;
    
});

sf.addEventListener('input' , function () {
    let sfi = this.value;

    let smii = sfi*0.09290304;
    sm.value = smii;
    let skmi = sfi*9.290304E-8;
    skm .value = skmi;
    let scmi = sfi*929.0304;
    scm.value = scmi;
    let smmi = sfi*92903.04;
    smm.value = smmi;
    let smimi = sfi*92903040000;
    smim.value = smimi;
    let hai = sfi*0.0000092903;
    ha.value = hai;
    let smli = sfi*3.58700381E-8;
    sml.value= smli;
    let syi = sfi*0.1111111111;
    sy.value =syi;
    let sii = sfi*144;
    si.value = sii;
    let aai = sfi*0.0000229568;
    aa.value = aai;
});

si.addEventListener('input' , function () {
    let sii = this.value;

    let smii = sii*0.00064516;
    sm.value = smii;
    let skmi = sii*6.4516E-10;
    skm .value = skmi;
    let scmi = sii*6.4516;
    scm.value = scmi;
    let smmi = sii*645.16;
    smm.value = smmi;
    let smimi = sii*645160000;
    smim.value = smimi;
    let hai = sii*6.4516E-8;
    ha.value = hai;
    let smli = sii*2.490974868E-10;
    sml.value= smli;
    let syi = sii*0.0007716049;
    sy.value =syi;
    let sfi = sii*0.0069444444;
    sf.value = sfi;
    let aai = sii*1.594225079E-7;
    aa.value = aai;
});

aa.addEventListener('input' , function () {
    let aai = this.value;

    let smii = aai*4046.8564224;
    sm.value = smii;
    let skmi = aai*0.0040468564;
    skm .value = skmi;
    let scmi = aai*40468564.224;
    scm.value = scmi;
    let smmi = aai*4046856422.4;
    smm.value = smmi;
    let smimi = aai*4046856422400000;
    smim.value = smimi;
    let hai = aai*0.4046856422;
    ha.value = hai;
    let smli = aai*0.0015624989;
    sml.value= smli;
    let syi = aai*4840;
    sy.value =syi;
    let sfi = aai*43560;
    sf.value = sfi;
    let sii = aai*6272640;
    si.value = sii;
});


// volume

const tog4 = document.getElementById('heading4');
const cont4 = document.getElementById('container4');
const ic4 = document.getElementById('icon4');

tog4.addEventListener('click',function(){
    cont4.classList.toggle('active');
    tog4.classList.toggle('color');
    ic4.classList.toggle('fa-spin');
});


var qm = document.getElementById('qm');
var qkm = document.getElementById('qkm');
var qcm = document.getElementById('qcm');
var qmm = document.getElementById('qmm');
var L = document.getElementById('L');
var ml = document.getElementById('ml');
var ug = document.getElementById('ug');
var uq = document.getElementById('uq');
var up = document.getElementById('up');
var uc = document.getElementById('uc');
var ufo = document.getElementById('ufo');
var utls = document.getElementById('utls');

var uts = document.getElementById('uts');
var ig = document.getElementById('ig');
var iq = document.getElementById('iq');
var ip = document.getElementById('ip');
var ifo = document.getElementById('ifo');
var itls = document.getElementById('itls');
var its = document.getElementById('its');
var qml = document.getElementById('qml');
var qy = document.getElementById('qy');
var qf = document.getElementById('qf');
var qi = document.getElementById('qi');

qm.addEventListener('input',function(){
    let qmi = this.value;

    let qkmi = qmi*1.E-9;
    qkm.value = qkmi;
    let qcmi = qmi*1000000;
    qcm .value = qcmi;
    let qmmi = qmi*1000000000;
    qmm.value = qmmi;
    let Li = qmi*1000;
    L.value = Li;
    let mli = qmi*1000000;
    ml.value = mli;
    let ugi = qmi*264.17217686;
    ug.value = ugi;
    let uqi = qmi*1056.6887074;
    uq.value= uqi;
    let upi = qmi*2113.3774149;
    up.value =upi;
    let uci = qmi*4226.7548297;
    uc.value = uci;
    let ufoi = qmi*33814.038638;
    ufo.value = ufoi;
    let utlsi = qmi*67628.077276;
    utls.value = utlsi;

    let utsi = qmi*202884.23183;
    uts.value = utsi;
    let igi = qmi*219.9692483;
    ig.value = igi;
    let iqi = qmi*879.8769932;
    iq.value = iqi;
    let ipi = qmi*1759.7539864;
    ip.value = ipi;
    let ifoi = qmi*35195.079728;
    ifo.value = ifoi;
    let itlsi = qmi*56312.127565;
    itls.value = itlsi;
    let itsi = qmi*168936.38269;
    its.value= itsi;
    let qmli = qmi*2.399128636E-10;
    qml.value =qmli;
    let qyi = qmi*1.3079506193;
    qy.value = qyi;
    let qfi = qmi*35.314666721;
    qf.value = qfi;
     let qii = qmi*61023.744095;
     qi.value =qii;
   

});

qkm.addEventListener('input',function(){
    let qkmi = this.value;

    let qmi = qkmi*1000000000000000;
    qm.value = qmi;
    let qcmi = qkmi*1000000000000000000;
    qcm .value = qcmi;
    let qmmi = qkmi*1000000000000;
    qmm.value = qmmi;
    let Li = qkmi*1000000000000000;
    L.value = Li;
    let mli = qkmi*1000000000000000;
    ml.value = mli;
    let ugi = qkmi*264172176858;
    ug.value = ugi;
    let uqi = qkmi*1056688707432;
    uq.value= uqi;
    let upi = qkmi*2113377414864;
    up.value =upi;
    let uci = qkmi*4226754829728;
    uc.value = uci;
    let ufoi = qkmi*33814038637823;
    ufo.value = ufoi;
    let utlsi = qkmi*67628077275645;
    utls.value = utlsi;

    let utsi = qkmi*202884231826936;
    uts.value = utsi;
    let igi = qkmi*219969248299;
    ig.value = igi;
    let iqi = qkmi*879876993196;
    iq.value = iqi;
    let ipi = qkmi*1759753986393;
    ip.value = ipi;
    let ifoi = qkmi*35195079727854;
    ifo.value = ifoi;
    let itlsi = qkmi*56312127564566;
    itls.value = itlsi;
    let itsi = qkmi*168936382693699;
    its.value= itsi;
    let qmli = qkmi*0.2399128636;
    qml.value =qmli;
    let qyi = qkmi*1307950619.3;
    qy.value = qyi;
    let qfi = qkmi*35314666721;
    qf.value = qfi;
     let qii = qkmi*61023744094732;
     qi.value =qii;

});

qcm.addEventListener('input', function() {
    let qcmi = this.value;

    let qmi = qcmi*0.000001;
    qm.value = qmi;
    let qkmi = qcmi*9.999999999E-16;
    qkm .value = qkmi;
    let qmmi = qcmi*1000;
    qmm.value = qmmi;
    let Li = qcmi*0.001;
    L.value = Li;
    let mli = qcmi*1;
    ml.value = mli;
    let ugi = qcmi*0.0002641722;
    ug.value = ugi;
    let uqi = qcmi*0.0010566887;
    uq.value= uqi;
    let upi = qcmi*0.0021133774;
    up.value =upi;
    let uci = qcmi*0.0042267548;
    uc.value = uci;
    let ufoi = qcmi*0.0338140386;
    ufo.value = ufoi;
    let utlsi = qcmi*0.0676280773;
    utls.value = utlsi;

    let utsi = qcmi*0.2028842318;
    uts.value = utsi;
    let igi = qcmi*0.0002199692;
    ig.value = igi;
    let iqi = qcmi*0.000879877;
    iq.value = iqi;
    let ipi = qcmi*0.001759754;
    ip.value = ipi;
    let ifoi = qcmi*0.0351950797;
    ifo.value = ifoi;
    let itlsi = qcmi*0.0563121276;
    itls.value = itlsi;
    let itsi = qcmi*0.1689363827;
    its.value= itsi;
    let qmli = qcmi*2.399128636E-16;
    qml.value =qmli;
    let qyi = qcmi*0.000001308;
    qy.value = qyi;
    let qfi = qcmi*0.0000353147;
    qf.value = qfi;
     let qii = qcmi*0.0610237441;
     qi.value =qii;


});

qmm.addEventListener('input' , function () {
    let qmmi = this.value;

    let qmi = qmmi*1.E-9;
    qm.value = qmi;
    let qkmi = qmmi*1.E-18;
    qkm .value = qkmi;
    let qcmi = qmmi*0.001;
    qcm.value = qcmi;
    let Li = qmmi*0.000001;
    L.value = Li;
    let mli = qmmi*0.001;
    ml.value = mli;
    let ugi = qmmi*2.641721768E-7;
    ug.value = ugi;
    let uqi = qmmi*0.0000010567;
    uq.value= uqi;
    let upi = qmmi*0.0000021134;
    up.value =upi;
    let uci = qmmi*0.0000042268;
    uc.value = uci;
    let ufoi = qmmi*0.000033814;
    ufo.value = ufoi;
    let utlsi = qmmi*0.0000676281;
    utls.value = utlsi;

    let utsi = qmmi*0.0002028842;
    uts.value = utsi;
    let igi = qmmi*2.199692482E-7;
    ig.value = igi;
    let iqi = qmmi*8.798769931E-7;
    iq.value = iqi;
    let ipi = qmmi*0.0000017598;
    ip.value = ipi;
    let ifoi = qmmi*0.0000351951;
    ifo.value = ifoi;
    let itlsi = qmmi*0.0000563121;
    itls.value = itlsi;
    let itsi = qmmi*0.0001689364;
    its.value= itsi;
    let qmli = qmmi*2.399128636E-19;
    qml.value =qmli;
    let qyi = qmmi*1.307950619E-9;
    qy.value = qyi;
    let qfi = qmmi*3.531466672E-8;
    qf.value = qfi;
     let qii = qmmi*0.0000610237;
     qi.value =qii;


});

L.addEventListener('input' , function () {
    let Li = this.value;

    let qmi = Li*0.001;
    qm.value = qmi;
    let qkmi = Li*1.E-12;
    qkm .value = qkmi;
    let qcmi = Li*1000;
    qcm.value = qcmi;
    let qmmi = Li*1000000;
    qmm.value = qmmi;
    let mli = Li*1000;
    ml.value = mli;
    let ugi = Li*0.2641721769;
    ug.value = ugi;
    let uqi = Li*1.0566887074;
    uq.value= uqi;
    let upi = Li*2.1133774149;
    up.value =upi;
    let uci = Li*4.2267548297;
    uc.value = uci;
    let ufoi = Li*33.814038638;
    ufo.value = ufoi;
    let utlsi = Li*67.628077276;
    utls.value = utlsi;

    let utsi = Li*202.88423183;
    uts.value = utsi;
    let igi = Li*0.2199692483;
    ig.value = igi;
    let iqi = Li*0.8798769932;
    iq.value = iqi;
    let ipi = Li*1.7597539864;
    ip.value = ipi;
    let ifoi = Li*35.195079728;
    ifo.value = ifoi;
    let itlsi = Li*56.312127565;
    itls.value = itlsi;
    let itsi = Li*168.93638269;
    its.value= itsi;
    let qmli = Li*2.399128636E-13;
    qml.value =qmli;
    let qyi = Li*0.0013079506;
    qy.value = qyi;
    let qfi = Li*0.0353146667;
    qf.value = qfi;
     let qii = Li*61.023744095;
     qi.value =qii;


});

ml.addEventListener('input' , function () {
    let mli = this.value;

    let qmi = mli*0.000001;
    qm.value = qmi;
    let qkmi = mli*9.999999999E-16;
    qkm .value = qkmi;
    let qcmi = mli*1;
    qcm.value = qcmi;
    let qmmi = mli*1000;
    qmm.value = qmmi;
    let Li = mli*0.001;
    L.value = Li;
    let ugi = mli*0.0002641722;
    ug.value = ugi;
    let uqi = mli*0.0010566887;
    uq.value= uqi;
    let upi = mli*0.0021133774;
    up.value =upi;
    let uci = mli*0.0042267548;
    uc.value = uci;
    let ufoi = mli*0.0338140386;
    ufo.value = ufoi;
    let utlsi = mli*0.0676280773;
    utls.value = utlsi;

    let utsi = mli*0.2028842318;
    uts.value = utsi;
    let igi = mli*0.0002199692;
    ig.value = igi;
    let iqi = mli*0.000879877;
    iq.value = iqi;
    let ipi = mli*0.001759754;
    ip.value = ipi;
    let ifoi = mli*0.0351950797;
    ifo.value = ifoi;
    let itlsi = mli*0.0563121276;
    itls.value = itlsi;
    let itsi = mli*0.1689363827;
    its.value= itsi;
    let qmli = mli*2.399128636E-16;
    qml.value =qmli;
    let qyi = mli*0.000001308;
    qy.value = qyi;
    let qfi = mli*0.0000353147;
    qf.value = qfi;
     let qii = mli*0.0610237441;
     qi.value =qii;


});

ug.addEventListener('input' , function () {
    let ugi = this.value;

    let qmi = ugi*0.00378541;
    qm.value = qmi;
    let qkmi = ugi*3.78541E-12;
    qkm .value = qkmi;
    let qcmi = ugi*3785.41;
    qcm.value = qcmi;
    let qmmi = ugi*3785410;
    qmm.value = qmmi;
    let Li = ugi*3.78541;
    L.value = Li;
    let mli = ugi*3785.41;
    ml.value = mli;
    let uqi = ugi*4;
    uq.value= uqi;
    let upi = ugi*8;
    up.value =upi;
    let uci = ugi*16;
    uc.value = uci;
    let ufoi = ugi*128;
    ufo.value = ufoi;
    let utlsi = ugi*256;
    utls.value = utlsi;

    let utsi = ugi*768;
    uts.value = utsi;
    let igi = ugi*0.8326737922;
    ig.value = igi;
    let iqi = ugi*3.3306951688;
    iq.value = iqi;
    let ipi = ugi*6.6613903376;
    ip.value = ipi;
    let ifoi = ugi*133.22780675;
    ifo.value = ifoi;
    let itlsi = ugi*213.1644908;
    itls.value = itlsi;
    let itsi = ugi*639.49347241;
    its.value= itsi;
    let qmli = ugi*9.081685531E-13;
    qml.value =qmli;
    let qyi = ugi*0.0049511294;
    qy.value = qyi;
    let qfi = ugi*0.1336804926;
    qf.value = qfi;
     let qii = ugi*230.99989113;
     qi.value =qii;
});

uq.addEventListener('input' , function () {
    let uqi = this.value;

    let qmi = uqi*0.0009463525;
    qm.value = qmi;
    let qkmi = uqi*9.463525E-13;
    qkm .value = qkmi;
    let qcmi = uqi*946.3525;
    qcm.value = qcmi;
    let qmmi = uqi*946352.5;
    qmm.value = qmmi;
    let Li = uqi*0.9463525;
    L.value = Li;
    let mli = uqi*946.3525;
    ml.value = mli;
    let ugi = uqi*0.25;
    ug.value= ugi;
    let upi = uqi*2;
    up.value =upi;
    let uci = uqi*4;
    uc.value = uci;
    let ufoi = uqi*32;
    ufo.value = ufoi;
    let utlsi = uqi*64;
    utls.value = utlsi;

    let utsi = uqi*192;
    uts.value = utsi;
    let igi = uqi*0.2081684481;
    ig.value = igi;
    let iqi = uqi*0.8326737922;
    iq.value = iqi;
    let ipi = uqi*1.6653475844;
    ip.value = ipi;
    let ifoi = uqi*33.306951688;
    ifo.value = ifoi;
    let itlsi = uqi*53.291122701;
    itls.value = itlsi;
    let itsi = uqi*159.8733681;
    its.value= itsi;
    let qmli = uqi*2.270421382E-13;
    qml.value =qmli;
    let qyi = uqi*0.0012377823;
    qy.value = qyi;
    let qfi = uqi*0.0334201231;
    qf.value = qfi;
     let qii = uqi*57.749972783;
     qi.value =qii;


});

up.addEventListener('input' , function () {
    let upi = this.value;

    let qmi = upi*0.0004731763;
    qm.value = qmi;
    let qkmi = upi*0.0004731763;
    qkm .value = qkmi;
    let qcmi = upi*473.17625;
    qcm.value = qcmi;
    let qmmi = upi*473176.25;
    qmm.value = qmmi;
    let Li = upi*0.47317625;
    L.value = Li;
    let mli = upi*473.17625;
    ml.value = mli;
    let ugi = upi*0.125;
    ug.value= ugi;
    let uqi = upi*0.5;
    uq.value =uqi;
    let uci = upi*2;
    uc.value = uci;
    let ufoi = upi*16;
    ufo.value = ufoi;
    let utlsi = upi*32;
    utls.value = utlsi;

    let utsi = upi*96;
    uts.value = utsi;
    let igi = upi*0.104084224;
    ig.value = igi;
    let iqi = upi*0.4163368961;
    iq.value = iqi;
    let ipi = upi*0.8326737922;
    ip.value = ipi;
    let ifoi = upi*16.653475844;
    ifo.value = ifoi;
    let itlsi = upi*26.645561351;
    itls.value = itlsi;
    let itsi = upi*79.936684052;
    its.value= itsi;
    let qmli = upi*1.135210691E-13;
    qml.value =qmli;
    let qyi = upi*0.0006188912;
    qy.value = qyi;
    let qfi = upi*0.0167100616;
    qf.value = qfi;
     let qii = upi*28.874986392;
     qi.value =qii;
});

uc.addEventListener('input' , function () {
    let uci = this.value;

    let qmi = uci*0.0002365881;
    qm.value = qmi;
    let qkmi = uci*2.36588125E-13;
    qkm .value = qkmi;
    let qcmi = uci*236.588125;
    qcm.value = qcmi;
    let qmmi = uci*236588.125;
    qmm.value = qmmi;
    let Li = uci*0.236588125;
    L.value = Li;
    let mli = uci*236.588125;
    ml.value = mli;
    let ugi = uci*0.0625;
    ug.value= ugi;
    let uqi = uci*0.25;
    uq.value =uqi;
    let upi = uci*0.5;
    up.value = upi;
    let ufoi = uci*8;
    ufo.value = ufoi;
    let utlsi = uci*16;
    utls.value = utlsi;

    let utsi = uci*48;
    uts.value = utsi;
    let igi = uci*0.052042112;
    ig.value = igi;
    let iqi = uci*0.2081684481;
    iq.value = iqi;
    let ipi = uci*0.4163368961;
    ip.value = ipi;
    let ifoi = uci*8.326737922;
    ifo.value = ifoi;
    let itlsi = uci*13.322780675;
    itls.value = itlsi;
    let itsi = uci*39.968342026;
    its.value= itsi;
    let qmli = uci*5.676053457E-14;
    qml.value =qmli;
    let qyi = uci*0.0003094456;
    qy.value = qyi;
    let qfi = uci*0.0083550308;
    qf.value = qfi;
     let qii = uci*14.437493196;
     qi.value =qii;
});

ufo.addEventListener('input' , function () {
    let ufoi = this.value;

    let qmi = ufoi*0.0000295735;
    qm.value = qmi;
    let qkmi = ufoi*2.957351562E-14;
    qkm .value = qkmi;
    let qcmi = ufoi*29.573515625;
    qcm.value = qcmi;
    let qmmi = ufoi*29573.515625;
    qmm.value = qmmi;
    let Li = ufoi*0.0295735156;
    L.value = Li;
    let mli = ufoi*29.573515625;
    ml.value = mli;
    let ugi = ufoi*0.0078125;
    ug.value= ugi;
    let uqi = ufoi*0.03125;
    uq.value =uqi;
    let upi = ufoi*0.0625;
    up.value = upi;
    let uci = ufoi*0.125;
    uc.value = uci;
    let utlsi = ufoi*2;
    utls.value = utlsi;

    let utsi = ufoi*6;
    uts.value = utsi;
    let igi = ufoi*0.006505264;
    ig.value = igi;
    let iqi = ufoi*0.026021056;
    iq.value = iqi;
    let ipi = ufoi*0.052042112;
    ip.value = ipi;
    let ifoi = ufoi*1.0408422403;
    ifo.value = ifoi;
    let itlsi = ufoi*1.6653475844;
    itls.value = itlsi;
    let itsi = ufoi*4.9960427532;
    its.value= itsi;
    let qmli = ufoi*7.095066821E-15;
    qml.value =qmli;
    let qyi = ufoi*0.0000386807;
    qy.value = qyi;
    let qfi = ufoi*0.0010443788;
    qf.value = qfi;
     let qii = ufoi*1.8046866495;
     qi.value =qii;
});

utls.addEventListener('input' , function () {
    let utlsi = this.value;
    let qmi = utlsi*0.0000147868;
    qm.value = qmi;
    let qkmi = utlsi*1.478675781E-14;
    qkm .value = qkmi;
    let qcmi = utlsi*14.786757812;
    qcm.value = qcmi;
    let qmmi = utlsi*14786.757812;
    qmm.value = qmmi;
    let Li = utlsi*0.0147867578;
    L.value = Li;
    let mli = utlsi*14.786757812;
    ml.value = mli;
    let ugi = utlsi*0.00390625;
    ug.value= ugi;
    let uqi = utlsi*0.015625;
    uq.value =uqi;
    let upi = utlsi*0.03125;
    up.value = upi;
    let uci = utlsi*0.0625;
    uc.value = uci;
    let ufoi = utlsi*0.5;
    ufo.value = ufoi;

    let utsi = utlsi*3;
    uts.value = utsi;
    let igi = utlsi*0.003252632;
    ig.value = igi;
    let iqi = utlsi*0.013010528;
    iq.value = iqi;
    let ipi = utlsi*0.026021056;
    ip.value = ipi;
    let ifoi = utlsi*0.5204211201;
    ifo.value = ifoi;
    let itlsi = utlsi*0.8326737922;
    itls.value = itlsi;
    let itsi = utlsi*2.4980213766;
    its.value= itsi;
    let qmli = utlsi*3.54753341E-15;
    qml.value =qmli;
    let qyi = utlsi*0.0000193403;
    qy.value = qyi;
    let qfi = utlsi*0.0005221894;
    qf.value = qfi;
     let qii = utlsi*0.9023433247;
     qi.value =qii;
});


uts.addEventListener('input',function(){
    let utsi = this.value;

    let qmi = utsi*0.0000049289;
    qm.value = qmi;
    let qkmi = utsi*4.92891927E-15;
    qkm .value = qkmi;
    let qcmi = utsi*4.9289192708;
    qcm.value = qcmi;
    let qmmi = utsi*4928.9192708;
    qmm.value = qmmi;
    let Li = utsi*0.0049289193;
    L.value = Li;
    let mli = utsi*4.9289192708;
    ml.value = mli;
    let ugi = utsi*0.0013020833;
    ug.value= ugi;
    let uqi = utsi*0.0052083333;
    uq.value =uqi;
    let upi = utsi*0.0104166667;
    up.value = upi;
    let uci = utsi*0.0208333333;
    uc.value = uci;
    let ufoi = utsi*0.1666666667;
    ufo.value = ufoi;

    let utlsi = utsi*0.3333333333;
    utls.value = utlsi;
    let igi = utsi*0.0010842107;
    ig.value = igi;
    let iqi = utsi*0.0043368427;
    iq.value = iqi;
    let ipi = utsi*0.0086736853;
    ip.value = ipi;
    let ifoi = utsi*0.1734737067;
    ifo.value = ifoi;
    let itlsi = utsi*0.2775579307;
    itls.value = itlsi;
    let itsi = utsi*0.8326737922;
    its.value= itsi;
    let qmli = utsi*1.182511136E-15;
    qml.value =qmli;
    let qyi = utsi*0.0000064468;
    qy.value = qyi;
    let qfi = utsi*0.0001740631;
    qf.value = qfi;
     let qii = utsi*0.3007811082;
     qi.value =qii;
   

});

ig.addEventListener('input',function(){
    let igi = this.value;

    
    let qmi = igi*0.00454609;
    qm.value = qmi;
    let qkmi = igi*4.54609E-12;
    qkm .value = qkmi;
    let qcmi = igi*4546.09;
    qcm.value = qcmi;
    let qmmi = igi*4546090;
    qmm.value = qmmi;
    let Li = igi*4.54609;
    L.value = Li;
    let mli = igi*4546.09;
    ml.value = mli;
    let ugi = igi*1.2009504915;
    ug.value= ugi;
    let uqi = igi*4.803801966;
    uq.value =uqi;
    let upi = igi*9.6076039319;
    up.value = upi;
    let uci = igi*19.215207864;
    uc.value = uci;
    let ufoi = igi*153.72166291;
    ufo.value = ufoi;

    let utlsi = igi*307.44332582;
    utls.value = utlsi;
    let utsi = igi*922.32997747;
    uts.value = utsi;
    let iqi = igi*4;
    iq.value = iqi;
    let ipi = igi*8;
    ip.value = ipi;
    let ifoi = igi*160;
    ifo.value = ifoi;
    let itlsi = igi*256;
    itls.value = itlsi;
    let itsi = igi*768;
    its.value= itsi;
    let qmli = igi*1.09066547E-12;
    qml.value =qmli;
    let qyi = igi*0.0059460612;
    qy.value = qyi;
    let qfi = igi*0.1605436532;
    qf.value = qfi;
     let qii = igi*277.41943279;
     qi.value =qii;
   


});


iq.addEventListener('input', function() {
    let iqi = this.value;

    let qmi = iqi*0.0011365225;
    qm.value = qmi;
    let qkmi = iqi*1.1365225E-12;
    qkm .value = qkmi;
    let qcmi = iqi*1136.5225;
    qcm.value = qcmi;
    let qmmi = iqi*1136522.5;
    qmm.value = qmmi;
    let Li = iqi*1.1365225;
    L.value = Li;
    let mli = iqi*1136.5225;
    ml.value = mli;
    let ugi = iqi*0.3002376229;
    ug.value= ugi;
    let uqi = iqi*1.2009504915;
    uq.value =uqi;
    let upi = iqi*2.401900983;
    up.value = upi;
    let uci = iqi*4.803801966;
    uc.value = uci;
    let ufoi = iqi*38.430415728;
    ufo.value = ufoi;

    let utlsi = iqi*76.860831456;
    utls.value = utlsi;
    let utsi = iqi*230.58249437;
    uts.value = utsi;
    let igi = iqi*0.25;
    ig.value = igi;
    let ipi = iqi*2;
    ip.value = ipi;
    let ifoi = iqi*40;
    ifo.value = ifoi;
    let itlsi = iqi*64;
    itls.value = itlsi;
    let itsi = iqi*192;
    its.value= itsi;
    let qmli = iqi*2.726663675E-13;
    qml.value =qmli;
    let qyi = iqi*0.0014865153;
    qy.value = qyi;
    let qfi = iqi*0.0401359133;
    qf.value = qfi;
     let qii = iqi*69.354858198;
     qi.value =qii;

});

ip.addEventListener('input' , function () {
    let ipi = this.value;

    let qmi = ipi*0.0005682613;
    qm.value = qmi;
    let qkmi = ipi*5.6826125E-13;
    qkm .value = qkmi;
    let qcmi = ipi*568.26125;
    qcm.value = qcmi;
    let qmmi = ipi*568261.25;
    qmm.value = qmmi;
    let Li = ipi*0.56826125;
    L.value = Li;
    let mli = ipi*568.26125;
    ml.value = mli;
    let ugi = ipi*0.1501188114;
    ug.value= ugi;
    let uqi = ipi*0.6004752457;
    uq.value =uqi;
    let upi = ipi*1.2009504915;
    up.value = upi;
    let uci = ipi*2.401900983;
    uc.value = uci;
    let ufoi = ipi*19.215207864;
    ufo.value = ufoi;

    let utlsi = ipi*38.430415728;
    utls.value = utlsi;
    let utsi = ipi*115.29124718;
    uts.value = utsi;
    let igi = ipi*0.125;
    ig.value = igi;
    let iqi = ipi*0.5;
    iq.value = iqi;
    let ifoi = ipi*20;
    ifo.value = ifoi;
    let itlsi = ipi*32;
    itls.value = itlsi;
    let itsi = ipi*96;
    its.value= itsi;
    let qmli = ipi*1.363331837E-13;
    qml.value =qmli;
    let qyi = ipi*0.0007432577;
    qy.value = qyi;
    let qfi = ipi*0.0200679567;
    qf.value = qfi;
     let qii = ipi*34.677429099;
     qi.value =qii;


});

ifo.addEventListener('input' , function () {
    let ifoi = this.value;

    let qmi = ifoi*0.0000284131;
    qm.value = qmi;
    let qkmi = ifoi*2.84130625E-14;
    qkm .value = qkmi;
    let qcmi = ifoi*28.4130625;
    qcm.value = qcmi;
    let qmmi = ifoi*28413.0625;
    qmm.value = qmmi;
    let Li = ifoi*0.0284130625;
    L.value = Li;
    let mli = ifoi*28.4130625;
    ml.value = mli;
    let ugi = ifoi*0.0075059406;
    ug.value= ugi;
    let uqi = ifoi*0.0300237623;
    uq.value =uqi;
    let upi = ifoi*0.0600475246;
    up.value = upi;
    let uci = ifoi*0.1200950491;
    uc.value = uci;
    let ufoi = ifoi*0.9607603932;
    ufo.value = ufoi;

    let utlsi = ifoi*1.9215207864;
    utls.value = utlsi;
    let utsi = ifoi*5.7645623592;
    uts.value = utsi;
    let igi = ifoi*0.00625;
    ig.value = igi;
    let iqi = ifoi*0.025;
    iq.value = iqi;
    let ipi = ifoi*0.05;
    ip.value = ipi;
    let itlsi = ifoi*1.6;
    itls.value = itlsi;
    let itsi = ifoi*4.8;
    its.value= itsi;
    let qmli = ifoi*6.816659189E-15;
    qml.value =qmli;
    let qyi = ifoi*0.0000371629;
    qy.value = qyi;
    let qfi = ifoi*0.0010033978;
    qf.value = qfi;
     let qii = ifoi*1.7338714549;
     qi.value =qii;


});

itls.addEventListener('input' , function () {
    let itlsi = this.value;

    let qmi = itlsi*0.0000177582;
    qm.value = qmi;
    let qkmi = itlsi*1.775816406E-14;
    qkm .value = qkmi;
    let qcmi = itlsi*17.758164063;
    qcm.value = qcmi;
    let qmmi = itlsi*17758.164063;
    qmm.value = qmmi;
    let Li = itlsi*0.0177581641;
    L.value = Li;
    let mli = itlsi*17.758164063;
    ml.value = mli;
    let ugi = itlsi*0.0046912129;
    ug.value= ugi;
    let uqi = itlsi*0.0187648514;
    uq.value =uqi;
    let upi = itlsi*0.0375297029;
    up.value = upi;
    let uci = itlsi*0.0750594057;
    uc.value = uci;
    let ufoi = itlsi*0.6004752457;
    ufo.value = ufoi;

    let utlsi = itlsi*1.2009504915;
    utls.value = utlsi;
    let utsi = itlsi*3.6028514745;
    uts.value = utsi;
    let igi = itlsi*0.00390625;
    ig.value = igi;
    let iqi = itlsi*0.015625;
    iq.value = iqi;
    let ipi = itlsi*0.03125;
    ip.value = ipi;
    let ifoi = itlsi*0.625;
    ifo.value = ifoi;
    let itsi = itlsi*3;
    its.value= itsi;
    let qmli = itlsi*4.260411993E-15;
    qml.value =qmli;
    let qyi = itlsi*0.0000232268;
    qy.value = qyi;
    let qfi = itlsi*0.0006271236;
    qf.value = qfi;
     let qii = itlsi*1.0836696593;
     qi.value =qii;

});
its.addEventListener('input' , function () {
    let itsi = this.value;

    let qmi = itsi*0.0000059194;
    qm.value = qmi;
    let qkmi = itsi*5.91938802E-15;
    qkm .value = qkmi;
    let qcmi = itsi*5.9193880208;
    qcm.value = qcmi;
    let qmmi = itsi*5919.3880208;
    qmm.value = qmmi;
    let Li = itsi*0.005919388;
    L.value = Li;
    let mli = itsi*5.9193880208;
    ml.value = mli;
    let ugi = itsi*0.0015637376;
    ug.value= ugi;
    let uqi = itsi*0.0062549505;
    uq.value =uqi;
    let upi = itsi*0.012509901;
    up.value = upi;
    let uci = itsi*0.0250198019;
    uc.value = uci;
    let ufoi = itsi*0.2001584152;
    ufo.value = ufoi;

    let utlsi = itsi*0.4003168305;
    utls.value = utlsi;
    let utsi = itsi*1.2009504915;
    uts.value = utsi;
    let igi = itsi*0.0013020833;
    ig.value = igi;
    let iqi = itsi*0.0052083333;
    iq.value = iqi;
    let ipi = itsi*0.0104166667;
    ip.value = ipi;
    let ifoi = itsi*0.2083333333;
    ifo.value = ifoi;
    let itlsi = itsi*0.3333333333;
    itls.value= itlsi;
    let qmli = itsi*1.420137331E-15;
    qml.value =qmli;
    let qyi = itsi*0.0000077423;
    qy.value = qyi;
    let qfi = itsi*0.0002090412;
    qf.value = qfi;
     let qii = itsi*0.3612232198;
     qi.value =qii;

});

qml.addEventListener('input' , function () {
    let qmli = this.value;

    let qmi = qmli*4168180000;
    qm.value = qmi;
    let qkmi = qmli*4.16818;
    qkm .value = qkmi;
    let qcmi = qmli*4168180000000000;
    qcm.value = qcmi;
    let qmmi = qmli*4168179999999999500;
    qmm.value = qmmi;
    let Li = qmli*4168180000000;
    L.value = Li;
    let mli = qmli*4168180000000000;
    ml.value = mli;
    let ugi = qmli*1101117184136;
    ug.value= ugi;
    let uqi = qmli*4404468736544;
    uq.value =uqi;
    let upi = qmli*8808937473087;
    up.value = upi;
    let uci = qmli*17617874946175;
    uc.value = uci;
    let ufoi = qmli*140942999569399;
    ufo.value = ufoi;

    let utlsi = qmli*281885999138799;
    utls.value = utlsi;
    let utsi = qmli*845657997416396;
    uts.value = utsi;
    let igi = qmli*916871421375;
    ig.value = igi;
    let iqi = qmli*3667485685501;
    iq.value = iqi;
    let ipi = qmli*7334971371002;
    ip.value = ipi;
    let ifoi = qmli*146699427420047;
    ifo.value = ifoi;
    let itlsi = qmli*234719083872075;
    itls.value= itlsi;
    let itsi = qmli*704157251616224;
    its.value =itsi;
    let qyi = qmli*5451773612.4;
    qy.value = qyi;
    let qfi = qmli*147197887535;
    qf.value = qfi;
     let qii = qmli*254357949660781;
     qi.value =qii;

});

qy.addEventListener('input' , function () {
    let qyi = this.value;

    let qmi = qyi*0.764554858;
    qm.value = qmi;
    let qkmi = qyi*7.645548579E-10;
    qkm .value = qkmi;
    let qcmi = qyi*764554.85798;
    qcm.value = qcmi;
    let qmmi = qyi*764554857.98;
    qmm.value = qmmi;
    let Li = qyi*764.55485798;
    L.value = Li;
    let mli = qyi*764554.85798;
    ml.value = mli;
    let ugi = qyi*201.97412116;
    ug.value= ugi;
    let uqi = qyi*807.89648464;
    uq.value =uqi;
    let upi = qyi*1615.7929693;
    up.value = upi;
    let uci = qyi*3231.5859386;
    uc.value = uci;
    let ufoi = qyi*25852.687509;
    ufo.value = ufoi;

    let utlsi = qyi*51705.375017;
    utls.value = utlsi;
    let utsi = qyi*155116.12505;
    uts.value = utsi;
    let igi = qyi*168.17855739;
    ig.value = igi;
    let iqi = qyi*672.71422958;
    iq.value = iqi;
    let ipi = qyi*1345.4284592;
    ip.value = ipi;
    let ifoi = qyi*26908.569183;
    ifo.value = ifoi;
    let itlsi = qyi*43053.710693;
    itls.value= itlsi;
    let itsi = qyi*129161.13208;
    its.value =itsi;
    let qmli = qyi*1.834265453E-10;
    qml.value = qmli;
    let qfi = qyi*27;
    qf.value = qfi;
     let qii = qyi*46656;
     qi.value =qii;
});

qf.addEventListener('input' , function () {
    let qfi = this.value;

    let qmi = qfi*0.0283168466;
    qm.value = qmi;
    let qkmi = qfi*2.831684659E-11;
    qkm .value = qkmi;
    let qcmi = qfi*28316.846592;
    qcm.value = qcmi;
    let qmmi = qfi*28316846.592;
    qmm.value = qmmi;
    let Li = qfi*28.316846592;
    L.value = Li;
    let mli = qfi*28316.846592;
    ml.value = mli;
    let ugi = qfi*7.480523006;
    ug.value= ugi;
    let uqi = qfi*29.922092024;
    uq.value =uqi;
    let upi = qfi*59.844184048;
    up.value = upi;
    let uci = qfi*119.6883681;
    uc.value = uci;
    let ufoi = qfi*957.50694476;
    ufo.value = ufoi;

    let utlsi = qfi*1915.0138895;
    utls.value = utlsi;
    let utsi = qfi*5745.0416686;
    uts.value = utsi;
    let igi = qfi*6.228835459;
    ig.value = igi;
    let iqi = qfi*24.915341836;
    iq.value = iqi;
    let ipi = qfi*49.830683672;
    ip.value = ipi;
    let ifoi = qfi*996.61367345;
    ifo.value = ifoi;
    let itlsi = qfi*1594.5818775;
    itls.value= itlsi;
    let itsi = qfi*4783.7456325;
    its.value =itsi;
    let qmli = qfi*6.793575755E-12;
    qml.value = qmli;
    let qyi = qfi*0.037037037;
    qy.value = qyi;
     let qii = qfi*1728;
     qi.value =qii;
});

qi.addEventListener('input' , function () {
    let qii = this.value;

    let qmi = qii*0.0000163871;
    qm.value = qmi;
    let qkmi = qii*1.6387064E-14;
    qkm .value = qkmi;
    let qcmi = qii*16.387064;
    qcm.value = qcmi;
    let qmmi = qii*16387.064;
    qmm.value = qmmi;
    let Li = qii*0.016387064;
    L.value = Li;
    let mli = qii*16.387064;
    ml.value = mli;
    let ugi = qii*0.0043290064;
    ug.value= ugi;
    let uqi = qii*0.0173160255;
    uq.value =uqi;
    let upi = qii*0.034632051;
    up.value = upi;
    let uci = qii*0.0692641019;
    uc.value = uci;
    let ufoi = qii*0.5541128153;
    ufo.value = ufoi;

    let utlsi = qii*1.1082256305;
    utls.value = utlsi;
    let utsi = qii*3.3246768915;
    uts.value = utsi;
    let igi = qii*0.0036046501;
    ig.value = igi;
    let iqi = qii*0.0036046501;
    iq.value = iqi;
    let ipi = qii*0.0288372012;
    ip.value = ipi;
    let ifoi = qii*0.576744024;
    ifo.value = ifoi;
    let itlsi = qii*0.9227904384;
    itls.value= itlsi;
    let itsi = qii*2.7683713151;
    its.value =itsi;
    let qmli = qii*3.931467451E-15;
    qml.value = qmli;
    let qyi = qii*0.0000214335;
    qy.value = qyi;
     let qfi = qii*0.0005787037;
     qf.value =qfi;
});

// time

const tog5 = document.getElementById('heading5');
const cont5 = document.getElementById('container5');
const ic5 = document.getElementById('icon5');

tog5.addEventListener('click',function(){
    cont5.classList.toggle('active');
    tog5.classList.toggle('color');
    ic5.classList.toggle('fa-spin');
});

var se = document.getElementById('se');
var mse = document.getElementById('mse');
var mise = document.getElementById('mise');
var nse = document.getElementById('nse');
var pse = document.getElementById('pse');
var M = document.getElementById('M');
var H = document.getElementById('H');
var D = document.getElementById('D');
var W = document.getElementById('W');
var Mo = document.getElementById('Mo');
var Y = document.getElementById('Y');

se.addEventListener('input',function(){
    let sei = this.value;

    let msei = sei*1000;
    mse.value = msei;
    let misei = sei*1000000;
    mise.value = misei;
    let nsei = sei*1000000000;
    nse.value = nsei;
    let psei = sei*1000000000000;
    pse.value = psei;
    let Mi = sei*0.0166666667;
   M.value = Mi;
    let Hi = sei*0.0002777778;
    H.value = Hi;
    let Di = sei*0.0000115741;
    D.value= Di;
    let Wi = sei*0.0000016534;
    W.value =Wi;
    let Moi = sei*3.802570537E-7;
     Mo.value = Moi;
    let Yi = sei*3.168808781E-8;
    Y.value = Yi;
   

});

mse.addEventListener('input',function(){
    let msei = this.value;

    
    let sei = msei*0.001;
    se.value = sei;
    let misei = msei*1000;
    mise.value = misei;
    let nsei = msei*1000000;
    nse.value = nsei;
    let psei = msei*1000000000;
    pse.value = psei;
    let Mi = msei*0.0000166667;
    M.value = Mi;
    let Hi = msei*2.777777777E-7;
    H.value = Hi;
    let Di = msei*1.157407407E-8;
    D.value= Di;
    let Wi = msei*1.653439153E-9;
    W.value =Wi;
    let Moi = msei*3.802570537E-10;
     Mo.value = Moi;
    let Yi = msei*3.168808781E-11;
    Y.value = Yi;

});


mise.addEventListener('input', function() {
    let misei = this.value;

    let sei = misei*0.000001;
    se.value = sei;
    let msei = misei*0.001;
    mse.value = msei;
    let nsei = misei*1000;
    nse.value = nsei;
    let psei = misei*1000000;
    pse.value = psei;
    let Mi = misei*1.666666666E-8;
    M.value = Mi;
    let Hi = misei*2.777777777E-10;
    H.value = Hi;
    let Di = misei*1.157407407E-11;
    D.value= Di;
    let Wi = misei*1.653439153E-12;
    W.value =Wi;
    let Moi = misei*3.802570537E-13;
     Mo.value = Moi;
    let Yi = misei*3.168808781E-14;
    Y.value = Yi;

});

nse.addEventListener('input' , function () {
    let nsei = this.value;

    let sei = nsei*1.E-9;
    se.value = sei;
    let msei = nsei*0.000001;
    mse.value = msei;
    let misei = nsei*0.001;
   mise.value = misei;
    let psei = nsei*1000;
    pse.value = psei;
    let Mi = nsei*1.666666666E-11;
    M.value = Mi;
    let Hi = nsei*2.777777777E-13;
    H.value = Hi;
    let Di = nsei*1.157407407E-14;
    D.value= Di;
    let Wi = nsei*1.653439153E-15;
    W.value =Wi;
    let Moi = nsei*3.802570537E-16;
     Mo.value = Moi;
    let Yi = nsei*3.168808781E-17;
    Y.value = Yi;

});

pse.addEventListener('input' , function () {
    let psei = this.value;

    let sei = psei*1.E-12;
    se.value = sei;
    let msei = psei*1.E-9;
    mse.value = msei;
    let misei = psei*0.000001;
   mise.value = misei;
    let nsei = psei*0.001;
    nse.value = nsei;
    let Mi = psei*1.666666666E-14;
    M.value = Mi;
    let Hi = psei*2.777777777E-16;
    H.value = Hi;
    let Di = psei*1.157407407E-17;
    D.value= Di;
    let Wi = psei*1.653439153E-18;
    W.value =Wi;
    let Moi = psei*3.802570537E-19;
     Mo.value = Moi;
    let Yi = psei*3.168808781E-20;
    Y.value = Yi;

});

M.addEventListener('input' , function () {
    let Mi = this.value;

     let sei = Mi*60;
    se.value = sei;
    let msei = Mi*60000;
    mse.value = msei;
    let misei = Mi*60000000;
    mise.value = misei;
    let nsei = Mi*60000000000;
    nse.value = nsei;
    let psei = Mi*60000000000000;
    pse.value = psei;
    let Hi = Mi*0.0166666667;
    H.value = Hi;
    let Di = Mi*0.0006944444;
    D.value= Di;
    let Wi = Mi*0.0000992063;
    W.value =Wi;
    let Moi = Mi*0.0000228154;
     Mo.value = Moi;
    let Yi = Mi*0.0000019013;
    Y.value = Yi;
});
H.addEventListener('input' , function () {
    let Hi = this.value;

  
    let sei = Hi*3600;
    se.value = sei;
    let msei = Hi*3600000;
    mse.value = msei;
    let misei = Hi*3600000000;
    mise.value = misei;
    let nsei = Hi*3600000000000;
    nse.value = nsei;
    let psei = Hi*3600000000000000;
    pse.value = psei;
    let Mi = Hi*60;
    M.value = Mi;
    let Di = Hi*0.0416666667;
    D.value= Di;
    let Wi = Hi*0.005952381;
    W.value =Wi;
    let Moi = Hi*0.005952381;
     Mo.value = Moi;
    let Yi = Hi*0.0001140771;
    Y.value = Yi;
});

D.addEventListener('input' , function () {
    let Di = this.value;

    let sei = Di*86400;
    se.value = sei;
    let msei = Di*86400000;
    mse.value = msei;
    let misei = Di*86400000000;
    mise.value = misei;
    let nsei = Di*86400000000000;
    nse.value = nsei;
    let psei = Di*86400000000000000;
    pse.value = psei;
    let Mi = Di*1440;
    M.value = Mi;
    let Hi = Di*24;
    H.value= Hi;
    let Wi = Di*0.1428571429;
    W.value =Wi;
    let Moi = Di*0.0328542094;
     Mo.value = Moi;
    let Yi = Di*0.0027378508;
    Y.value = Yi;
    
});

W.addEventListener('input' , function () {
    let Wi = this.value;

    let sei = Wi*604800;
    se.value = sei;
    let msei = Wi*604800000;
    mse.value = msei;
    let misei = Wi*604800000000;
    mise.value = misei;
    let nsei = Wi*604800000000000;
    nse.value = nsei;
    let psei = Wi*604800000000000000;
    pse.value = psei;
    let Mi = Wi*10080;
    M.value = Mi;
    let Hi = Wi*168;
    H.value= Hi;
    let Di = Wi*7;
    D.value =Di;
    let Moi = Wi*0.2299794661;
     Mo.value = Moi;
    let Yi = Wi*0.0191649555;
    Y.value = Yi;
});

Mo.addEventListener('input' , function () {
    let Moi = this.value;

    let sei = Moi*2629800;
    se.value = sei;
    let msei = Moi*2629800000;
    mse.value = msei;
    let misei = Moi*2629800000000;
    mise.value = misei;
    let nsei = Moi*2629800000000000;
    nse.value = nsei;
    let psei = Moi*2629800000000000000;
    pse.value = psei;
    let Mi = Moi*43830;
    M.value = Mi;
    let Hi = Moi*730.5;
    H.value= Hi;
    let Di = Moi*30.4375;
    D.value =Di;
    let Wi = Moi*4.3482142857;
     W.value = Wi;
    let Yi = Moi*0.0833333333;
    Y.value = Yi;
});

Y.addEventListener('input' , function () {
    let Yi = this.value;

    let sei = Yi*31557600;
    se.value = sei;
    let msei = Yi*31557600000;
    mse.value = msei;
    let misei = Yi*31557600000000;
    mise.value = misei;
    let nsei = Yi*31557600000000000;
    nse.value = nsei;
    let psei = Yi*31557600000000000000;
    pse.value = psei;
    let Mi = Yi*525960;
    M.value = Mi;
    let Hi = Yi*8766;
    H.value= Hi;
    let Di = Yi*365.25;
    D.value =Di;
    let Wi = Yi*52.178571429;
     W.value = Wi;
    let Moi = Yi*12;
    Mo.value = Moi;
});