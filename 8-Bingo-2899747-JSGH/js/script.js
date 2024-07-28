// Arrays para almacenar los números y los patrones X
let numeros = []; // Array que almacenará todos los números de la matriz.
let matriz = []; // Array 2D que representará una matriz 5x5 de números.
let matrizX1 = []; // Array para almacenar los números que forman la primera forma de X.
let matrizX2 = []; // Array para almacenar los números que forman la segunda forma de X.
let matrizX3 = []; // Array para almacenar los números que forman la tercera forma de X.
let matrizXGrande = []; // Array para almacenar los números que forman la forma de X grande.

function generarMatrices() {
    let numero = 1; // Variable que se utilizará para asignar valores numéricos a la matriz.

    // Inicializar la matriz 5x5
    for (let fila = 0; fila < 5; fila++) {
        matriz[fila] = []; // Crea una nueva fila en la matriz.
        for (let columna = 0; columna < 5; columna++) {
            matriz[fila][columna] = numero * 2; // Asigna a cada celda de la matriz el valor de 'numero' multiplicado por 2.
            numero++; // Incrementa 'numero' para el siguiente valor.
        }
    }

    // Crear matrizX1 (diagonales en una submatriz 3x3)
    for (let fila = 0; fila < 3; fila++) {
        for (let columna = 0; columna < 3; columna++) {
            // Comprueba si la celda está en la diagonal principal o en la diagonal secundaria.
            if (fila === columna || fila + columna === 2) {
                matrizX1.push(matriz[fila][columna]); // Añade el número a matrizX1 si está en alguna de las diagonales.
            }
        }
    }

    // Crear matrizX2 (diagonales en la parte inferior izquierda de una submatriz 3x3)
    for (let fila = 2; fila < 5; fila++) {
        for (let columna = 0; columna < 3; columna++) {
            // Comprueba si la celda está en una diagonal específica de la parte inferior izquierda.
            if (fila + columna === 4 || fila + columna === 2 * (columna + 1)) {
                matrizX2.push(matriz[fila][columna]); // Añade el número a matrizX2 si cumple con la condición.
            }
        }
    }

    // Crear matrizX3 (diagonales en la parte superior derecha de una submatriz 3x3)
    for (let fila = 0; fila < 3; fila++) {
        for (let columna = 2; columna < 5; columna++) {
            // Comprueba si la celda está en una diagonal específica de la parte superior derecha.
            if (fila + columna === 4 || fila + columna === 2 * (fila + 1)) {
                matrizX3.push(matriz[fila][columna]); // Añade el número a matrizX3 si cumple con la condición.
            }
        }
    }

    // Crear matrizXGrande (diagonales principales de la matriz completa 5x5)
    for (let fila = 0; fila < 5; fila++) {
        for (let columna = 0; columna < 5; columna++) {
            // Comprueba si la celda está en la diagonal principal o en la diagonal secundaria de la matriz completa.
            if (fila === columna || fila + columna === 4) {
                matrizXGrande.push(matriz[fila][columna]); // Añade el número a matrizXGrande si está en alguna de las diagonales.
            }
        }
    }
}

function crearCuadricula() {
    const contenedorPrincipal = document.getElementById('contenedorPrincipalC'); // Obtiene el contenedor principal del DOM.
    contenedorPrincipal.innerHTML = ''; // Limpia el contenido del contenedor principal.

    // Crear la cuadrícula
    for (let fila = 0; fila < 5; fila++) {
        const filaDiv = document.createElement('div'); // Crea un nuevo div para una fila.
        filaDiv.classList.add('row'); // Añade la clase 'row' al div de la fila.
        for (let columna = 0; columna < 5; columna++) {
            const columnaDiv = document.createElement('div'); // Crea un nuevo div para una columna.
            columnaDiv.classList.add('col', 'numero'); // Añade las clases 'col' y 'numero' al div de la columna.
            const numero = matriz[fila][columna]; // Obtiene el número de la matriz para esta celda.
            columnaDiv.textContent = numero; // Establece el texto del div con el número de la matriz.
            columnaDiv.setAttribute('data-numero', numero); // Establece un atributo 'data-numero' con el valor del número.
            numeros.push(numero); // Añade el número al array 'numeros'.
            columnaDiv.addEventListener('click', () => columnaDiv.classList.toggle('clicked')); // Añade un evento click que alterna la clase 'clicked'.
            filaDiv.appendChild(columnaDiv); // Añade el div de la columna al div de la fila.
        }
        contenedorPrincipal.appendChild(filaDiv); // Añade el div de la fila al contenedor principal.
    }

    // Crear los botones para marcar columnas y patrones
    const contenedorBotones = document.createElement('div'); // Crea un nuevo div para los botones.
    contenedorBotones.classList.add('container_botones'); // Añade la clase 'container_botones' al div de botones.

    const botones = [
        ['letraBBoton', 'B'], 
        ['letraIBoton', 'I'], 
        ['letraNBoton', 'N'], 
        ['letraGBoton', 'G'], 
        ['letraOBoton', 'O'],
        ['letraXBoton', 'XXX'], 
        ['bigXBoton', 'X Grande']
    ]; // Define un array con los IDs y textos para los botones.

    botones.forEach(([id, texto]) => {
        const boton = document.createElement('button'); // Crea un nuevo botón.
        boton.id = id; // Asigna el ID al botón.
        boton.classList.add('btn', 'btn-primary', 'm-2'); // Añade las clases 'btn', 'btn-primary' y 'm-2' al botón.
        boton.textContent = texto; // Establece el texto del botón.
        contenedorBotones.appendChild(boton); // Añade el botón al div de botones.
    });

    contenedorPrincipal.appendChild(contenedorBotones); // Añade el div de botones al contenedor principal.
}

function marcarNumeros(patron) {
    const celdas = document.querySelectorAll('.numero'); // Obtiene todos los elementos con la clase 'numero'.
    celdas.forEach(celda => {
        const numero = parseInt(celda.getAttribute('data-numero'), 10); // Obtiene el valor del atributo 'data-numero' y lo convierte a número entero.
        celda.classList.toggle('clicked', patron.includes(numero)); // Alterna la clase 'clicked' según si el número está en el patrón.
    });
}

function marcarColumna(indiceColumna) {
    const numerosColumna = matriz.map(fila => fila[indiceColumna]); // Obtiene todos los números de la columna especificada.
    marcarNumeros(numerosColumna); // Llama a marcarNumeros con los números de la columna para marcar las celdas correspondientes.
}

function marcarX() {
    marcarNumeros([...matrizX1, ...matrizX2, ...matrizX3]); // Llama a marcarNumeros con todos los números de las formas de X.
}

function marcarXGrande() {
    marcarNumeros(matrizXGrande); // Llama a marcarNumeros con todos los números de la forma de X grande.
}

function asignarEventos() {
    document.getElementById('letraBBoton').addEventListener('click', () => marcarColumna(0)); // Asigna un evento al botón 'letraBBoton' para marcar la columna 0.
    document.getElementById('letraIBoton').addEventListener('click', () => marcarColumna(1)); // Asigna un evento al botón 'letraIBoton' para marcar la columna 1.
    document.getElementById('letraNBoton').addEventListener('click', () => marcarColumna(2)); // Asigna un evento al botón 'letraNBoton' para marcar la columna 2.
    document.getElementById('letraGBoton').addEventListener('click', () => marcarColumna(3)); // Asigna un evento al botón 'letraGBoton' para marcar la columna 3.
    document.getElementById('letraOBoton').addEventListener('click', () => marcarColumna(4)); // Asigna un evento al botón 'letraOBoton' para marcar la columna 4.
    document.getElementById('letraXBoton').addEventListener('click', marcarX); // Asigna un evento al botón 'letraXBoton' para marcar las formas de X.
    document.getElementById('bigXBoton').addEventListener('click', marcarXGrande); // Asigna un evento al botón 'bigXBoton' para marcar la forma de X grande.
}

generarMatrices(); // Ejecuta la función para generar las matrices y patrones.
crearCuadricula(); // Ejecuta la función para crear la cuadrícula y los botones.
asignarEventos(); // Ejecuta la función para asignar eventos a los botones.
