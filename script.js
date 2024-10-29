//Knappar för val av drag, samt output av valet.

const stenKnapp = document.getElementById("sten");
const saxKnapp = document.getElementById("sax");
const paseKnapp = document.getElementById("pase");


stenKnapp.addEventListener("click", stenen);
function stenen() {
    document.getElementById("myMove").innerHTML = "Sten!";
}


saxKnapp.addEventListener("click", saxen);
function saxen() {
   document.getElementById("myMove").innerHTML = "Sax!"; 
}
    
paseKnapp.addEventListener("click", pasen);
function pasen() {
    document.getElementById("myMove").innerHTML = "Påse!";
}

// Datorns val drag - randomizar mellan de olika alternativen.