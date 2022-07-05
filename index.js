//Di seguito sono riportati i dati relativi alle automobili disponibili presso un noto concessionario
//Ci viene richiesto di realizzare un programma per estrapolare delle informazioni basate su questi dati
//È preferibile l'utilizzo di array methods e arrow functions ove possibile, anche in ottica di riduzione e semplificazione del codice

const vehicles = [
  {
    brand: "BMW",
    model: "M3",
    engine: { hp: 450, supply: "Gasoline" },
    year: 2019,
  },
  {
    brand: "Mercedes",
    model: "CLA",
    engine: { hp: 180, supply: "Diesel" },
    year: 2022,
  },
  {
    brand: "Mercedes",
    model: "A180",
    engine: { hp: 450, supply: "Gasoline" },
    year: 2021,
  },
  {
    brand: "Volkswagen",
    model: "Golf",
    engine: { hp: 190, supply: "Hybrid" },
    year: 2020,
  },
  {
    brand: "Volvo",
    model: "XC40",
    engine: { hp: 220, supply: "Diesel" },
    year: 2020,
  },
  [
    {
      brand: "Tesla",
      model: "Model S",
      engine: { hp: 550, supply: "Electric" },
      year: 2018,
    },
    {
      brand: "Tesla",
      model: "Model X",
      engine: { hp: 500, supply: "Electric" },
      year: 2017,
    },
  ],
  [
    {
      brand: "Cupra",
      model: "Formentor",
      engine: { hp: 300, supply: "Hybrid" },
      year: 2022,
    },
    {
      brand: "Cupra",
      model: "Born",
      engine: { hp: 232, supply: "Electric" },
      year: 2022,
    },
  ],
  {
    brand: "Volkswagen",
    model: "Tiguan",
    engine: { hp: 220, supply: "Diesel" },
    year: 2019,
  },
  {
    brand: "Toyota",
    model: "CHR",
    engine: { hp: 150, supply: "Hybrid" },
    year: 2019,
  },
];

// 1) L'array vehicles non è normalizzato, si richiede di scrivere una funzione normalizeArray che accetta come parametro un array e ne restituisce uno normalizzato.
//(vehicles è un array di oggetti dove alcuni elementi sono a loro volta array di oggetti), in modo da lavorarci necessitiamo di un semplice array di oggetti

const normalizeArray = (array) => {};

const normalizedVehicles = normalizeArray(vehicles);
console.log(vehicles.length, normalizedVehicles.length);
//Se tutto è corretto, produce 9 11

//2) Definire una funzione simplifyVehicles
// accetta come parametro un array vehicles, e ne restituisce una versione semplificata, dove engine viene rimosso e i campi al suo interno vengono "sparsi" nell'oggetto principale (spread operator!)

//NB: È fortemente consigliato utilizzare uno dei due array prodotti dai metodi sopra per la risoluzione dei prossimi esercizi

//3) Definire una funzione stringifyVehicles
// accetta come parametro un array vehicles, e restituisce un array di stringhe dove ogni stringa è la versione stringifata di ogni oggetto vehicle
//Le stringhe devono essere formattate nel seguente modo "Toyota CHR | 150HP (Benzina) - 2019"

//4) Definire una funzione getVehiclesByBrand,
//accetta come parametri vehicles e brand, restituisce l'array dei soli veicoli appartenenti a quel brand

//5) Definire una funzione getVehiclesByYearAndSupply
// accetta come parametri year e supply, restituisce tutti i veicoli prodotti in quell'anno e con quel tipo di carburante (supply)

//6) Definire una funzione getVehiclesNotByYearOrNotBySupply
// accetta come parametri year e supply, restituisce tutti i veicoli che non sono prodotti in quell'anno oppure non utilizzano quel tipo di carburante (supply)

//7) Definire una funzione groupVehiclesByBrand
// accetta come parametro vehicles, restituisce un oggetto dove ogni chiave è un brand, e ogni valore è l'array dei relativi veicoli di quel brand
//// {
// 	bmw: [...],
// 	mercedes: [...],
// ....
// }
//HINT: Per evitare calcoli inutili, è ottimale riuscire ad estrapolare tutti i brand presenti in maniera univoca

//8) Definire una funzione simplifiedGroupVehiclesByBrand
// accetta come parametro vehicles, utilizza il metodo precedente, per ritornare un nuovo array dove la chiave brand di ogni veicolo dentro l'array dei valori riferito da ogni chiave viene rimossa (visto che il brand è già noto dalle chiavi nell'oggetto stesso)

//9) Definire una funzione getAverageHp
// accetta come parametri vehicles e brand(opzionale)
// se brand viene passato come parametro, restituisce la media dei cavalli(hp) di tutte le auto di quel brand, altrimenti restituisce lo stesso ma di tutti i vehicles

//10) Definire una funzione sortVehicles
// accetta come parametri vehicles, year (opzionale), hp (opzionale) e direction
// La funzione deve ritornare un nuovo array ordinato in base alle seguente regole:
// Se Year ed hp vengono passati come parametri, ordina i veicoli per year e per hp nel caso di year uguali
//Se viene passato solo uno dei due parametri, l'array viene ordinato solo in base a quelal chiave
// Se nessun parametro viene passato, l'array viene ordinato per brand
//Direction è la direzione dell'ordinamento (1: crescente, -1: decrescente, altri valori devono ritornare un eccezione)
