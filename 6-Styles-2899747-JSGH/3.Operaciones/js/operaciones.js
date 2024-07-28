/**
Funcion de operaciones (suma, resta, multplicacion, divicion)
Martin Stiben Narvaez
Lunes 17 de Junio del 2024
*/


let operacionSeleccionada = '';

function seleccionarOperacion(operacion) {
  operacionSeleccionada = operacion;
}

function operaciones() {
  let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
  let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
  let resultado;

  if (operacionSeleccionada === "suma") {
      resultado = numeroUno + numeroDos;
  } else if (operacionSeleccionada === "resta") {
      resultado = numeroUno - numeroDos;
  } else if (operacionSeleccionada === "multi") {
      resultado = numeroUno * numeroDos;
  } else if (operacionSeleccionada === "divi") {
      resultado = numeroUno / numeroDos;
  }       
  document.getElementById('resultado').innerHTML = "<strong>" + resultado + "</strong>";
  
  return false;
}