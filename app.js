var name = prompt("är du motasem ");
if ( name === "yes"){
    alert("Hej bror ska vi studera tillsammans idag?")
}else{
    alert("hej då jag vill prata med motasem ")
};


var name = prompt("är du mohamad ");
 if ( name === "yes"){
    alert("bästa bror") 
 }else{
    alert("du måste ha en kompis som mohamed") 
 };


var age = prompt("Hur gammmal är du ");
 if ( age < 18){
     alert("du får inte komma in")
 }else{
     alert("välkommen")
 };

 var name = prompt("vad heter du ?");
 if( name === "wisam"){
     alert("stick här ifrån nej jag skämtar bara bästa wisam")
 }else{
     alert("välkommen")
 };

 var car = prompt("vilken bil har du ?")
 if ( car === "volvo"){
     alert("waw en fin bil")
 }else{
     alert(" en dålig bil ")
 };

 var mobile = prompt("vilken mobile har du ?")
 if ( mobile === "samsung"){
     alert("super fin mobile");
 } else{
     alert("en dålig mobile");
 };

 function dinÅlderPerDag(){
     var age = prompt(" här visa din Ålder per dag")
     return age * 365 
 }
  alert(dinÅlderPerDag() + " " + " Dagar ojoj inte så mycket eller hur??");

var
    myInput = document.getElementById("input");
myDiv = document.getElementById("div");
myCurrency = document.getElementById("currency")
myCurrency.onchange = function () {
    myDiv.innerHTML = myInput.value * myCurrency.value ;
};

var heshko = document.getElementById("Namn");
heshko.onmousemove = function () {
    heshko.innerHTML = "HISHAM ABULIL"

}
var heshko = document.getElementById("Namn");
heshko.onmousedown = function () {
    heshko.innerHTML = "JAG ÄR HÄR"

}

var heshko = document.getElementById("Namn");
heshko.onclick = function () {
    heshko.innerHTML = "HEJ ALLA"

}

var heshko = document.getElementById("Namn");
heshko.ondblclick = function () {
    heshko.innerHTML = "HUR MÅR NEJ?"
}

var input1 = document.getElementById("input1"),
input2 = document.getElementById("input2"),
resultat = document.getElementById("resultat"),
button1 = document.getElementById("button1")
butoon2= document.getElementById("butoon2")
butoon3  = document.getElementById("butoon3")
butoon4= document.getElementById("butoon4")
button1.onclick = function () {
    resultat.innerHTML = +input1.value * +input2.value;// + det blir nummer 
}
butoon2.onclick = function () {
    resultat.innerHTML = +input1.value + +input2.value;
}
butoon3.onclick = function () {
    resultat.innerHTML = +input1.value - +input2.value;
}
butoon4.onclick = function () {
    resultat.innerHTML = parseInt(input1.value) / parseInt(input2.value); // parseint det betyder nummer
}

var heshko = String.fromCharCode(72,73,83,72,65,77);
console.log(heshko);