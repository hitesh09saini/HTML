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
});