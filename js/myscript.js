
// prende input nome e cognome
const nomecogn = document.querySelector(".nomecogn");

// pulsante per generare il risultato
const button = document.querySelector(".genera");

let prezzobiglietto
let km = document.querySelector(".km");

const fascia = document.querySelector(".fascia");

button.addEventListener("click",
    function () {
        let inputkm = km.value;
        console.log(inputkm);

        let inputfascia = fascia.value;
        console.log(inputfascia);

        
        // calcolo costo biglietto in base all'età
        if (inputfascia = String("Minorenne")) {
            prezzobiglietto = (inputkm * 0.21) - ((inputkm * 0.21) * 20 / 100);
        } else if (inputfascia = String("Over 65")) {
            prezzobiglietto = (inputkm * 0.21) - ((inputkm * 0.21) * 40 / 100);
        } else if (inputfascia = String("Maggiorenne")) {
            prezzobiglietto = inputkm * 0.21;
        }
        
        let inputnomecogn = nomecogn.value;
        let inputprezzobiglietto = prezzobiglietto.value;
        console.log(inputnomecogn);
        console.log(inputprezzobiglietto);
        
       
        
    }
);



