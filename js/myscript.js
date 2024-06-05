
// prende input nome e cognome
const nomecogn = document.querySelector(".nomecogn");

// pulsante per generare il risultato
const button = document.querySelector(".genera");

let prezzobiglietto

// prende input dei chilometri
let km = document.querySelector(".km");

// prende input della fascia d'età (minorenne, maggiorenne, over 65)
const fascia = document.querySelector(".fascia");

button.addEventListener("click",
    function () {
        // prende il numero dei km dall'input
        let inputkm = km.value;

        // prende il nome e cognome dall'input
        let inputnomecogn = nomecogn.value;

        // prende la fascia d'età dalle opzioni del select
        let inputfascia = fascia.value;

        // calcolo costo biglietto in base all'età
        if (inputfascia == "Minorenne") {
            prezzobiglietto = (inputkm * 0.21) - ((inputkm * 0.21) * 20 / 100);
        } else if (inputfascia == "Over 65") {
            prezzobiglietto = (inputkm * 0.21) - ((inputkm * 0.21) * 40 / 100);
        } else if (inputfascia == "Maggiorenne") {
            prezzobiglietto = inputkm * 0.21;
        }
        
        // stampa a schermo il costo del biglietto
        document.getElementById("risultato").innerHTML ="€ " + prezzobiglietto.toFixed(2);
        
        // stampa a schermo il numero di carrozza che può andare da 1 a 19
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 20);
        
        // stampa a schermo il numero del codice passeggero che può andare da 1 a 99999
        document.getElementById("codicecp").innerHTML = Math.floor(Math.random() * 100000);
        
        // stampa a schermo il nome e cognome del passeggero
        document.getElementById("nomepass").innerHTML = inputnomecogn
    }
);




