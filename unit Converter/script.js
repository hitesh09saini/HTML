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


