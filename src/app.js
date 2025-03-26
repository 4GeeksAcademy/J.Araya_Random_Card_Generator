let symbol = [1, 2, 3, 4];
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let carta = document.getElementById("random");
let formaCarta = carta.querySelectorAll(".col");

let cartaEscogida = [(Math.floor(Math.random() * symbol.length)) + 1, (Math.floor(Math.random() * num.length)) + 1];


function presentCartaAlHTML() {
  let armarCartaHead= formaCarta[0];
  let armarCartaNum= formaCarta[1];
  let armarCartaFooter= formaCarta[2];
  switch (cartaEscogida[0]) {
    case 1:
      armarCartaHead.parentNode.innerHTML= `<div class="col d-flex justify-content-start spade">♠ </div>`
      armarCartaNum.parentNode.innerHTML= `<div class="col d-flex justify-content-center num">${cartaEscogida[1]}</div>`
      armarCartaFooter.parentNode.innerHTML= `<div class="col d-flex justify-content-end spade">♠</div>`
      break;
    case 2:
      armarCartaHead.parentNode.innerHTML= `<div class="col d-flex justify-content-start club">♣ </div>`
      armarCartaNum.parentNode.innerHTML= `<div class="col d-flex justify-content-center num">${cartaEscogida[1]}</div>`
      armarCartaFooter.parentNode.innerHTML=`<div class="col d-flex justify-content-end club">♣</div>`
      break;
    case 3:
      armarCartaHead.parentNode.innerHTML= `<div class="col d-flex justify-content-start heart">♥ </div>`
      armarCartaNum.parentNode.innerHTML= `<div class="col d-flex justify-content-center num">${cartaEscogida[1]}</div>`
      armarCartaFooter.parentNode.innerHTML=`<div class="col d-flex justify-content-end heart">♥</div>`
      break;
    case 4:
      armarCartaHead.parentNode.innerHTML= `<div class="col d-flex justify-content-start diamond">♦ </div>`
      armarCartaNum.parentNode.innerHTML= `<div class="col d-flex justify-content-center num">${cartaEscogida[1]}</div>`
      armarCartaFooter.parentNode.innerHTML=`<div class="col d-flex justify-content-end diamond">♦</div>`
      break;
    default:
      break;
  }


}


window.onload = function () {
  presentCartaAlHTML()
  console.log()
  console.log(cartaEscogida);
};