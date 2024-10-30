//Knappar för val av drag, samt output av valet.

const stenKnapp = document.getElementById("sten");
const saxKnapp = document.getElementById("sax");
const paseKnapp = document.getElementById("pase");

const computerAlternative = ["Sten!", "Sax!", "Påse!"];
let myChoice;
let computerChoice;
let Winner;
const loss = "Du förlorade!";
const win = "Du vann!";
const tie = "Ingen vann, ni valde samma!";
// Datorns val av drag - randomizar mellan de olika alternativen - math.random raden.


stenKnapp.addEventListener("click", stenen);
function stenen() {
    myChoice = document.getElementById("myMove").innerHTML = "Sten!";
    computerChoice = computerAlternative[Math.floor(Math.random() * computerAlternative.length)];
    cpuMove = document.getElementById("computersMove").innerHTML = computerChoice;
    console.log("Mitt val: " + myChoice);
    console.log("Datorns val: " + computerChoice);

    if (myChoice == "Sten!" && computerChoice == "Sax!") {
        document.getElementById("winner").innerHTML = win;
        console.log(win);
    } else if (myChoice == "Sten!" && computerChoice == "Påse!") {
        document.getElementById("winner").innerHTML = loss;
        console.log(loss);
    } else {
        document.getElementById("winner").innerHTML = tie;
        console.log(tie);
    }
}


saxKnapp.addEventListener("click", saxen);
function saxen() {
   myChoice = document.getElementById("myMove").innerHTML = "Sax!"; 
   computerChoice = computerAlternative[Math.floor(Math.random() * computerAlternative.length)];
   cpuMove = document.getElementById("computersMove").innerHTML = computerChoice;
   console.log("Mitt val: " + myChoice); 
   console.log("Datorns val: " + computerChoice);

   if (myChoice == "Sax!" && computerChoice == "Påse!") {
    document.getElementById("winner").innerHTML = win;
    console.log(win);
} else if (myChoice == "Sax!" && computerChoice == "Sten!") {
    document.getElementById("winner").innerHTML = loss;
    console.log(loss);
} else {
    document.getElementById("winner").innerHTML = tie;
    console.log(tie);
}
}
    

paseKnapp.addEventListener("click", pasen);
function pasen() {
    myChoice = document.getElementById("myMove").innerHTML = "Påse!";
    computerChoice = computerAlternative[Math.floor(Math.random() * computerAlternative.length)];
    cpuMove = document.getElementById("computersMove").innerHTML = computerChoice;
    console.log("Mitt val: " + myChoice);
    console.log("Datorns val: " + computerChoice);

    if (myChoice == "Påse!" && computerChoice == "Sten!") {
        document.getElementById("winner").innerHTML = win;
        console.log(win);
    } else if (myChoice == "Påse!" && computerChoice == "Sax!") {
        document.getElementById("winner").innerHTML = loss;
        console.log(loss);
    } else {
        document.getElementById("winner").innerHTML = tie;
        console.log(tie);
    }
}


// funktion som utger vinnaren...
