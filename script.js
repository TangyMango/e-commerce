var mensaje = "¡Durante la estancia de esta página se requiere discreción!";
alert(mensaje);

const botonesAgregar = document.querySelectorAll(".boton");
const contadorNum = document.querySelector("#contador-num");

// let contador = 0;

/**botonesAgregar.forEach(function(boton) {
  boton.addEventListener("click", function() {
    contador++;
    contadorNum.textContent = contador;
  });

});**/

let localStorageValue = localStorage.getItem('datos');
let items = JSON.parse(localStorageValue);
let contador = items.length;
contadorNum.textContent = contador;

datos= localStorage.getItem('datos');

console.log(contador);
console.log(datos);
console.log(datos.length);

botonesAgregar.forEach(function(boton) {
  boton.addEventListener("click", function() {
    contador++;
    contadorNum.textContent = contador;
  });
  console.log(contador);

});

function mostrarDatos() {
  const nombre = event.target.dataset.nombre;
  const precio = event.target.dataset.precio;
  const foto = event.target.dataset.foto;

  let datos = [];
  if (localStorage.getItem('datos') !== null) {
    datos = JSON.parse(localStorage.getItem('datos'));
  }

  datos.unshift({nombre: nombre, precio: precio, foto: foto});
    localStorage.setItem('datos', JSON.stringify(datos));
  
  
} 
