//Knappar för val av drag, samt output av valet.

const stenKnapp = document.getElementById("sten");
const saxKnapp = document.getElementById("sax");
const paseKnapp = document.getElementById("pase");

const computerAlternative = ["Sten!", "Sax!", "Påse!"];
let myChoice;

// Datorns val av drag - randomizar mellan de olika alternativen - math.random raden.


stenKnapp.addEventListener("click", stenen);
function stenen() {
    myChoice = document.getElementById("myMove").innerHTML = "Sten!";
    let computerChoice = computerAlternative[Math.floor(Math.random() * computerAlternative.length)];
    console.log("Mitt val: " + myChoice);
    console.log("Datorns val: " + computerChoice);
}


saxKnapp.addEventListener("click", saxen);
function saxen() {
   myChoice = document.getElementById("myMove").innerHTML = "Sax!"; 
   let computerChoice = computerAlternative[Math.floor(Math.random() * computerAlternative.length)];
   console.log("Mitt val: " + myChoice); 
   console.log("Datorns val: " + computerChoice);
}
    

paseKnapp.addEventListener("click", pasen);
function pasen() {
    myChoice = document.getElementById("myMove").innerHTML = "Påse!";
    let computerChoice = computerAlternative[Math.floor(Math.random() * computerAlternative.length)];
    console.log("Mitt val: " + myChoice);
    console.log("Datorns val: " + computerChoice);
}


// funktion som utger vinnaren...


// let whoIsTheWinner = function winner() {
//     if ()
// }
