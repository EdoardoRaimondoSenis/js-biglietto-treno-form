let km = prompt("Inserire chilometri da percorrere");
let anni = parseInt(prompt("Inserire l'età"));
let prezzobiglietto

if (anni <= 18) {
    prezzobiglietto = (km * 0.21) - ((km * 0.21) * 20 / 100);
} else if (anni >= 65) {
    prezzobiglietto = (km * 0.21) - ((km * 0.21) * 40 / 100);
} else {
    prezzobiglietto = km * 0.21;
}

