import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const devices = [
    { nombre: 'Teclado', tipo: 'Entrada', disponible: true },
    { nombre: 'Mouse', tipo: 'Entrada', disponible: true },
    { nombre: 'Monitor', tipo: 'Entrada', disponible: true },
    { nombre: 'WebCam', tipo: 'Entrada', disponible: false },
  ]

  const lista = document.getElementById('device-list')

  devices.map(device => {
    const li = document.createElement('li')

    li.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <strong>${device.nombre}</strong>
        <span class="text-muted">(${device.tipo})<span>
      </div>
      <div class="badge bg-${device.disponible ? 'success' : 'danger'}">
        ${device.disponible ? 'Disponible' : 'No disponible'}
      </div>
    </div>
    `
    li.classList.add('list-group-item')
    lista.append(li)
  })
};
