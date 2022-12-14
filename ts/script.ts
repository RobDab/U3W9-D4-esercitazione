
// da correggere, non funzionante
class Abbigliamento {
    id: number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantità:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;

    constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantità:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibile:string,saldo:number){
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantità = quantità;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.saldo = saldo;
        this.prezzoivainclusa = this.prezzoivaesclusa * 1.22
        this.disponibile = disponibile;
    }

    getSaldoCapo(){
        return this.prezzoivainclusa * this.saldo / 100;
    }

    getAcquistoCapo(){
        return this.prezzoivainclusa - this.getSaldoCapo();
    }    
}

let arrCapi: Abbigliamento[] = []

const URLocation = '../starter/Abbigliamento.json'
let promise = fetch(URLocation)
    .then(response => response.json())
    .then(json => {
        getData(json)
        // selectCapo()
    })
    .catch(err => console.log(err))

function getData (array:any[]){
    // implementare funzione per assegnare gli elementi dell'array a arrCapi: Abbigliamento[]
    for(let elem of array){
        let {id, codprod, collezione, capo, 
            modello, quantita, colore, 
            prezzoivainclusa, prezzoivaesclusa,  
            disponibile, saldo} = elem
            
            arrCapi.push(
                new Abbigliamento(id, codprod, collezione, capo, 
                    modello, quantita, colore, 
                    prezzoivainclusa, prezzoivaesclusa,  
                    disponibile, saldo)
            )
    }
    // console.log(arrCapi)
}

// function selectCapo (){
//     let searchInput = prompt('search capo...')
    
//     for(let capo of arrCapi){
//         let bool = capo.capo.includes(searchInput)
//         if(bool){
//             console.log(`
//             il capo cercato è: ${capo.capo}
//             disponibile in ${capo.disponibile}
//             costo iniziale: ${capo.prezzoivainclusa}
//             sconto del ${capo.saldo}%
//             prezzo finale ${capo.getAcquistoCapo()}€
//             quantità rimanente: ${capo.quantità}
//             `)
//         }
//     }
// }

