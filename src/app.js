import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const devices = ["teclado", "mouse", "webcam", "auriculares"]

  console.log(devices);

  const lista = document.getElementById("items-list")

  const elementos = devices.map(device => {

    const li = document.createElement('li')
    li.textContent = device
    li.classList.add('list-group-item')
    lista.append(li) //append inserta texto o elementos en el elemento HTML guardado en la variable, en este caso el ul

    //return li
  })
  // con spread operator (...) tendriamos que tener return en la funcion
  //lista.append(...elementos)

};
