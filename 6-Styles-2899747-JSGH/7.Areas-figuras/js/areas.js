/**
Funcion de Areas de tres figuras (cuadrado, triangulo, rectangulo)
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/


let figuraSeleccionada = '';

function figuras() {
  let base = parseInt(document.getElementById('txtbase').value);
  let altura = parseInt(document.getElementById('txtaltura').value);
  let area;

  if (figuraSeleccionada === "cuadrado") {
      area = base * base;
      mostrarFigura('cuadrado');
  } else if (figuraSeleccionada === "triangulo") {
      area = (base * altura) / 2;
      mostrarFigura('triangulo');
  } else if (figuraSeleccionada === "rectangulo") {
      area = base * altura;
      mostrarFigura('rectangulo');
  }       

  document.getElementById('area').innerHTML = "<strong>" + area + "</strong>";

  return false;
}

function seleccionarOperacion(operacion) {
  figuraSeleccionada = operacion;
}

function mostrarFigura(figura) {
  const figuraDiv = document.getElementById('figura');
  figuraDiv.className = ''; // Remove all classes
  figuraDiv.classList.add(figura);
}
