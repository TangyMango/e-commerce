if (localStorage.getItem('datos') !== null) {
  const datos = JSON.parse(localStorage.getItem('datos'));
  const lista = document.getElementById('datos');
  let totalPrecio = 0;

  datos.forEach(function(elemento, indice) {
    const nombre = elemento.nombre;
    const precio = elemento.precio;
    const foto = elemento.foto;

    const li = document.createElement('li');
    const nombreSpan = document.createElement('span');
    const precioSpan = document.createElement('span');
    const fotoImg = document.createElement('img');
    const botonEliminar = document.createElement('button');

    nombreSpan.textContent = nombre;
    precioSpan.textContent = precio;
    fotoImg.setAttribute('src', foto);
    fotoImg.setAttribute('data-precio', precio);
    fotoImg.addEventListener('click', function() {
      elemento.cantidad++; 
      localStorage.setItem('datos', JSON.stringify(datos)); 
      totalPrecio += parseFloat(precio); 
      document.getElementById('total-precio').textContent = totalPrecio.toFixed(2);
    });

    botonEliminar.textContent = 'Eliminar'; 
    botonEliminar.addEventListener('click', function() { 
      if (elemento.cantidad > 1) {
        elemento.cantidad--; 
        localStorage.setItem('datos', JSON.stringify(datos)); 
        totalPrecio -= parseFloat(precio); 
        precioSpan.textContent = elemento.cantidad + ' x ' + precio;
      } else {
        datos.splice(indice, 1); 
        localStorage.setItem('datos', JSON.stringify(datos)); 
        lista.removeChild(li); 
        totalPrecio -= parseFloat(precio); 
        document.getElementById('total-precio').textContent = totalPrecio.toFixed(2);
      }
    });

     elemento.cantidad = elemento.cantidad || 1; 

    li.appendChild(nombreSpan);
    li.appendChild(precioSpan);
    li.appendChild(fotoImg);
    li.appendChild(botonEliminar); 

    lista.appendChild(li);
    totalPrecio += parseFloat(precio) * elemento.cantidad;
    precioSpan.textContent = elemento.cantidad + ' x ' + precio; 
  
  
  });

  document.getElementById('total-precio').textContent = totalPrecio.toFixed(2);
}
