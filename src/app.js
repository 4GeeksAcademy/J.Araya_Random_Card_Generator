let symbolColor = {
  "♠": true, 
  "♣": true, 
  "♥": false, 
  "♦": false
};
let symbol = ["♠", "♣", "♥", "♦"];


let cartaEscogida = {
  pinta : symbol[(Math.floor(Math.random() * symbol.length))], 
  numero : (Math.floor(Math.random() * 12)) + 1
};

let cardHead = document.getElementById("cardHead")
cardHead.innerHTML=cartaEscogida.pinta
symbolColor[cartaEscogida.pinta] ? cardHead.classList.add("negro"): cardHead.classList.add("rojo")

let cardNum = document.getElementById("cardNum")
cardNum.innerHTML=cartaEscogida.numero
cardNum.classList.add("num")

let cardFoot = document.getElementById("cardFoot")
cardFoot.innerHTML=cartaEscogida.pinta
symbolColor[cartaEscogida.pinta] ? cardFoot.classList.add("negro"): cardFoot.classList.add("rojo")


// window.onload = function () {
// };