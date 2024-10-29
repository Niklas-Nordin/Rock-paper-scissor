//Knappar för val av drag, samt output av valet.

const stenKnapp = document.getElementById("sten");
const saxKnapp = document.getElementById("sax");
const paseKnapp = document.getElementById("pase");

const computerAlternative = ["Sten!", "Sax!", "Påse!"];


stenKnapp.addEventListener("click", stenen);
function stenen() {
    document.getElementById("myMove").innerHTML = "Sten!";
    let computerChoice = computerAlternative[Math.floor(Math.random() * computerAlternative.length)];
    console.log(computerChoice);
}


saxKnapp.addEventListener("click", saxen);
function saxen() {
   document.getElementById("myMove").innerHTML = "Sax!"; 
   let computerChoice = computerAlternative[Math.floor(Math.random() * computerAlternative.length)];
    console.log(computerChoice);
}
    

paseKnapp.addEventListener("click", pasen);
function pasen() {
    document.getElementById("myMove").innerHTML = "Påse!";
    let computerChoice = computerAlternative[Math.floor(Math.random() * computerAlternative.length)];
    console.log(computerChoice);
}

// Datorns val drag - randomizar mellan de olika alternativen.


