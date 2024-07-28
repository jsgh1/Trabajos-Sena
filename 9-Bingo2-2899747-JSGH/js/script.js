let numeros = []; // Array para almacenar todos los números de la cuadrícula
let matriz = Array(5).fill(null).map(() => Array(5).fill(null)); // Array 2D para almacenar los números en forma de matriz (5x5)
let matrizX1 = []; // Array para almacenar los números de la primera matriz en forma de X
let matrizX2 = []; // Array para almacenar los números de la segunda matriz en forma de X
let matrizX3 = []; // Array para almacenar los números de la tercera matriz en forma de X
let matrizXGrande = []; // Array para almacenar los números de la matriz en forma de X grande

// Función para generar las matrices y los patrones X
function generarMatrices() {
    let numero = 1; // Inicializar el número para llenar la matriz

    // Crear la matriz principal con números
    for (let fila = 0; fila < 5; fila++) { // Iterar sobre las filas
        for (let columna = 0; columna < 5; columna++) { // Iterar sobre las columnas
            matriz[fila][columna] = numero * 2; // Asignar el doble del número actual a la posición de la matriz
            numero++; // Incrementar el número
        }
    }

    // Crear matrizX1 (diagonales principales y secundaria en una submatriz 3x3)
    for (let fila = 0; fila < 3; fila++) { // Iterar sobre las filas de la submatriz 3x3
        for (let columna = 0; columna < 3; columna++) { // Iterar sobre las columnas de la submatriz 3x3
            if (fila === columna || fila + columna === 2) matrizX1.push(matriz[fila][columna]); // Si está en una de las diagonales, agregar a matrizX1
        }
    }

    // Crear matrizX2 (diagonales en la parte inferior izquierda de una submatriz 3x3)
    for (let fila = 2; fila < 5; fila++) { // Iterar sobre las filas de la submatriz 3x3 en la parte inferior
        for (let columna = 0; columna < 3; columna++) { // Iterar sobre las columnas de la submatriz 3x3
            if (fila + columna === 4 || fila + columna === 2 * (columna + 1)) matrizX2.push(matriz[fila][columna]); // Si está en una de las diagonales, agregar a matrizX2
        }
    }

    // Crear matrizX3 (diagonales en la parte superior derecha de una submatriz 3x3)
    for (let fila = 0; fila < 3; fila++) { // Iterar sobre las filas de la submatriz 3x3 en la parte superior
        for (let columna = 2; columna < 5; columna++) { // Iterar sobre las columnas de la submatriz 3x3
            if (fila + columna === 4 || fila + columna === 2 * (fila + 1)) matrizX3.push(matriz[fila][columna]); // Si está en una de las diagonales, agregar a matrizX3
        }
    }

    // Crear matrizXGrande (diagonales principales de la matriz completa 5x5)
    for (let fila = 0; fila < 5; fila++) { // Iterar sobre las filas de la matriz completa
        for (let columna = 0; columna < 5; columna++) { // Iterar sobre las columnas de la matriz completa
            if (fila === columna || fila + columna === 4) matrizXGrande.push(matriz[fila][columna]); // Si está en una de las diagonales principales, agregar a matrizXGrande
        }
    }
}

// Función para crear la cuadrícula y los elementos de la interfaz
function crearCuadricula() {
    const contenedorPrincipal = document.getElementById('contenedorPrincipalC'); // Obtener el contenedor principal por su ID
    contenedorPrincipal.innerHTML = ''; // Limpiar el contenido previo del contenedor principal

    const contenedorPrincipalDiv = document.createElement('div'); // Crear un nuevo div para contener la cuadrícula y los botones
    contenedorPrincipalDiv.classList.add('container'); // Agregar la clase 'container' al nuevo div

    const columnaCarton = document.createElement('div'); // Crear un div para contener el cartón de Bingo
    columnaCarton.classList.add('col-4', 'row', 'carton'); // Agregar clases al div del cartón

    const tituloDiv = document.createElement('div'); // Crear un div para el título (B, I, N, G, O)
    tituloDiv.classList.add('titulo'); // Agregar la clase 'titulo' al div

    const letras = ['B', 'I', 'N', 'G', 'O']; // Array con las letras B, I, N, G, O
    letras.forEach(letra => { // Iterar sobre cada letra
        const p = document.createElement('p'); // Crear un elemento <p> para cada letra
        p.id = `letra${letra}Boton`; // Asignar un ID al elemento <p>
        p.textContent = letra; // Establecer el texto del elemento <p> como la letra
        tituloDiv.appendChild(p); // Agregar el elemento <p> al div del título
    });

    const bingoDiv = document.createElement('div'); // Crear un div para contener la cuadrícula de Bingo
    bingoDiv.classList.add('bingo'); // Agregar la clase 'bingo' al div

    const contenedorCuadricula = document.createElement('div'); // Crear un div para contener la cuadrícula
    contenedorCuadricula.id = 'contenedorPrincipalC'; // Asignar el ID al div de la cuadrícula
    contenedorCuadricula.classList.add('container'); // Agregar la clase 'container' al div
    bingoDiv.appendChild(contenedorCuadricula); // Agregar el div de la cuadrícula al div de Bingo

    columnaCarton.appendChild(tituloDiv); // Agregar el div del título al div del cartón
    columnaCarton.appendChild(bingoDiv); // Agregar el div de Bingo al div del cartón

    const columnaBotones = document.createElement('div'); // Crear un div para contener los botones
    columnaBotones.classList.add('col-5', 'container_botones'); // Agregar clases al div de los botones

    const botones = [['letraXBoton', 'XXX'], ['bigXBoton', 'X']]; // Array con los IDs y textos de los botones
    botones.forEach(([id, texto]) => { // Iterar sobre cada botón
        const boton = document.createElement('button'); // Crear un botón
        boton.id = id; // Asignar el ID al botón
        boton.classList.add('Boton', 'btn-primary', 'm-2'); // Agregar clases al botón
        boton.textContent = texto; // Establecer el texto del botón
        columnaBotones.appendChild(boton); // Agregar el botón al div de los botones
    });

    contenedorPrincipalDiv.appendChild(columnaCarton); // Agregar el div del cartón al div principal
    contenedorPrincipalDiv.appendChild(columnaBotones); // Agregar el div de los botones al div principal
    contenedorPrincipal.appendChild(contenedorPrincipalDiv); // Agregar el div principal al contenedor principal

    // Crear la cuadrícula del Bingo
    for (let fila = 0; fila < 5; fila++) { // Iterar sobre las filas
        const filaDiv = document.createElement('div'); // Crear un div para cada fila
        filaDiv.classList.add('row'); // Agregar la clase 'row' al div de la fila
        for (let columna = 0; columna < 5; columna++) { // Iterar sobre las columnas
            const columnaDiv = document.createElement('div'); // Crear un div para cada celda
            columnaDiv.classList.add('col', 'numero'); // Agregar clases al div de la celda
            const numero = matriz[fila][columna]; // Obtener el número de la matriz
            columnaDiv.textContent = numero; // Establecer el texto del div como el número
            columnaDiv.setAttribute('data-numero', numero); // Establecer un atributo data-numero con el número
            numeros.push(numero); // Agregar el número al array de números
            columnaDiv.addEventListener('click', () => columnaDiv.classList.toggle('clicked')); // Agregar un event listener para togglear la clase 'clicked' al hacer clic
            filaDiv.appendChild(columnaDiv); // Agregar el div de la celda al div de la fila
        }
        contenedorCuadricula.appendChild(filaDiv); // Agregar el div de la fila al contenedor de la cuadrícula
    }
}

// Función para marcar los números en la cuadrícula según el patrón
function marcarNumeros(patron) {
    const celdas = document.querySelectorAll('.numero'); // Seleccionar todas las celdas con la clase 'numero'
    celdas.forEach(celda => { // Iterar sobre cada celda
        const numero = parseInt(celda.getAttribute('data-numero'), 10); // Obtener el número de la celda
        celda.classList.toggle('clicked', patron.includes(numero)); // Togglle la clase 'clicked' según si el número está en el patrón
    });
}

const letras = ['B', 'I', 'N', 'G', 'O']; // Array con las letras B, I, N, G, O
letras.forEach((letra, index) => { // Iterar sobre cada letra
    window[`marcarColumna${letra}`] = () => marcarColumna(index); // Crear una función para marcar la columna correspondiente a cada letra
});

// Función para marcar todos los números de una columna específica
function marcarColumna(columnaIndex) {
    const numerosColumna = matriz.map(fila => fila[columnaIndex]); // Obtener todos los números de la columna especificada
    marcarNumeros(numerosColumna); // Marcar los números de la columna
}

// Función para marcar todos los números en forma de X
function marcarX() {
    marcarNumeros([...matrizX1, ...matrizX2, ...matrizX3]); // Marcar todos los números en las matrices X
}

// Función para marcar todos los números en forma de X grande
function marcarXGrande() {
    marcarNumeros(matrizXGrande); // Marcar todos los números en la matriz X grande
}

generarMatrices(); // Ejecutar la generación de matrices
crearCuadricula(); // Ejecutar la creación de la cuadrícula

// Asignar eventos a los botones para marcar columnas y patrones
document.getElementById('letraBBoton').addEventListener('click', marcarColumnaB);
document.getElementById('letraIBoton').addEventListener('click', marcarColumnaI);
document.getElementById('letraNBoton').addEventListener('click', marcarColumnaN);
document.getElementById('letraGBoton').addEventListener('click', marcarColumnaG);
document.getElementById('letraOBoton').addEventListener('click', marcarColumnaO);
document.getElementById('letraXBoton').addEventListener('click', marcarX);
document.getElementById('bigXBoton').addEventListener('click', marcarXGrande);
