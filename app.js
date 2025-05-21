import "bootstrap";
import "./style.css";

window.onload = function () {
  const productos = [
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 45 },
    { nombre: 'Monitor', precio: 150 },

  ]

  const container = document.getElementById('card-container')

  productos.map(producto => {
    const div = document.createElement('div')
    div.className = "col-md-4"

    div.innerHTML = `
    <div class="card h-100">
      <div>
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
      </div>
    </div>
    `

    container.append(div)
  })

};
