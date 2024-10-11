/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log(pets)

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort()
console.log(pets)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse()
console.log(pets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.push(pets.shift())
console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars[0].licensePlate = 'GB234FL'
cars[1].licensePlate = 'FM983WL'
cars[2].licensePlate = 'GH001LY'
console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: 'Fiat',
  model: 'Panda',
  color: 'red',
  licensePlate: 'FB099KB',
  trims: ['titanium', 'st', 'active'],
})

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}

console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
  justTrims[i] = cars[i].trims.shift()
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  let firstletter = cars[i].color.charAt(0)
  if (firstletter === 'b') {
    console.log('Fizz')
  } else {
    console.log('Buzz')
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0
while (i < numericArray.length) {
  if (numericArray[i] === 32) {
    console.log(numericArray[i])
    i = numericArray.length
  } else {
    console.log(numericArray[i])
    i++
  }
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const posizione = []

for (let n = 0; n < charactersArray.length; n++) {
  switch (charactersArray[n]) {
    case 'a':
      posizione.push(1)
      break
    case 'b':
      posizione.push(2)
      break

    case 'c':
      posizione.push(3)
      break
    case 'd':
      posizione.push(4)
      break
    case 'e':
      posizione.push(5)
      break
    case 'f':
      posizione.push(6)
      break
    case 'g':
      posizione.push(7)
      break
    case 'h':
      posizione.push(8)
      break
    case 'i':
      posizione.push(9)
      break
    case 'j':
      posizione.push(10)
      break
    case 'k':
      posizione.push(11)
      break
    case 'l':
      posizione.push(12)
      break
    case 'm':
      posizione.push(13)
      break
    case 'n':
      posizione.push(14)
      break
    case 'o':
      posizione.push(15)
      break
    case 'p':
      posizione.push(16)
      break
    case 'q':
      posizione.push(17)
      break
    case 'r':
      posizione.push(18)
      break
    case 's':
      posizione.push(19)
      break
    case 't':
      posizione.push(20)
      break
    case 'u':
      posizione.push(21)
      break
    case 'v':
      posizione.push(22)
      break
    case 'w':
      posizione.push(23)
      break
    case 'y':
      posizione.push(24)
      break
    case 'z':
      posizione.push(25)
      break
    default:
      posizione.push(26)
      break
  }
}
console.log(posizione)
