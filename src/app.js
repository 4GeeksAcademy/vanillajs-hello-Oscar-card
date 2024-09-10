/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let Varconjunta = generateCard();
  let { figura, colores } = generatefigure();

  let Number = document.querySelector("#valor");
  let FiguraCarta1 = document.querySelector("#figura-abajo");
  let FiguraCarta = document.querySelector("#figura-arriba");

  Number.innerHTML = Varconjunta;
  FiguraCarta.innerHTML = `<span class="${colores}">${figura}</span>`;
  FiguraCarta1.innerHTML = `<span class="${colores}">${figura}</span>`;
};
function generateCard() {
  let valor = Math.floor(Math.random() * 13) + 1;
  switch (valor) {
    case 1:
      valor = "A";
      break;
    case 11:
      valor = "J";
      break;
    case 12:
      valor = "Q";
      break;
    case 13:
      valor = "k";
      break;
  }
  return valor;
}
function generatefigure() {
  let figura = Math.floor(Math.random() * 4);
  let colores = " ";

  switch (figura) {
    case 0:
      figura = "♦";
      colores = "red";
      break;
    case 1:
      figura = "♥";
      colores = "red";
      break;
    case 2:
      figura = "♠";
      colores = "black";
      break;
    case 3:
      figura = "♣";
      colores = "black";
      break;
  }
  return { figura, colores };
}

//let arrFiguras = ["♦", "♥", "♠", "♣"];
//let color = figura < 2 ? "red" : "black";
//figura = arrFiguras[figura];
