"use strict";
// da correggere, non funzionante
class Abbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantità, colore, prezzoivaesclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantità = quantità;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.saldo = saldo;
        this.prezzoivainclusa = this.prezzoivaesclusa * 1.22;
        this.disponibile = disponibile;
    }
    getSaldoCapo() {
        return this.prezzoivainclusa * this.saldo / 100;
    }
    getAcquistoCapo() {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}
let arrCapi = [];
const URLocation = '../starter/Abbigliamento.json';
let promise = fetch(URLocation)
    .then(response => response.json())
    .then(json => {
    getData(json);
    // selectCapo()
})
    .catch(err => console.log(err));
function getData(array) {
    // implementare funzione per assegnare gli elementi dell'array a arrCapi: Abbigliamento[]
    for (let elem of array) {
        arrCapi.push(elem);
    }
    console.log(arrCapi);
}
function selectCapo() {
    let searchInput = prompt('search capo...');
    for (let capo of arrCapi) {
        let bool = capo.capo.includes(searchInput);
        if (bool) {
            console.log(`
            il capo cercato è: ${capo.capo}
            disponibile in ${capo.disponibile}
            costo iniziale: ${capo.prezzoivainclusa}
            sconto del ${capo.saldo}%
            prezzo finale ${capo.getAcquistoCapo()}€
            quantità rimanente: ${capo.quantità}
            `);
        }
    }
}
