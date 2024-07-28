<?php
/**
 * array de un bingo
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024
 */

 $matriz = [];
$matriz1 = [];
$matriz2 = [];
$matriz3 = [];
$numero = 1;

// Crear la matriz 5x5 y llenarla con números multiplicados por 2
for ($fila = 0; $fila < 5; $fila++) {
    $matriz[$fila] = [];
    for ($columna = 0; $columna < 5; $columna++) {
        $matriz[$fila][$columna] = $numero * 2;
        $numero++;
    }
}

// Imprimir las columnas B, I, N, G, O
echo "B<br>";
for ($fila = 0; $fila < 5; $fila++) {
    echo $matriz[$fila][0] . "<br>";
}

echo "<br>I<br>";
for ($fila = 0; $fila < 5; $fila++) {
    echo $matriz[$fila][1] . "<br>";
}

echo "<br>N<br>";
for ($fila = 0; $fila < 5; $fila++) {
    echo $matriz[$fila][2] . "<br>";
}

echo "<br>G<br>";
for ($fila = 0; $fila < 5; $fila++) {
    echo $matriz[$fila][3] . "<br>";
}

echo "<br>O<br>";
for ($fila = 0; $fila < 5; $fila++) {
    echo $matriz[$fila][4] . "<br>";
}


for ($fila = 0; $fila < 3; $fila++) {
    for ($columna = 0; $columna < 3; $columna++) {
        if ($fila == $columna || $fila + $columna == 2) {
            $matriz1[] = $matriz[$fila][$columna];
        }
    }
}

for ($fila = 2; $fila < 5; $fila++) {
    for ($columna = 0; $columna < 3; $columna++) {
        if ($fila + $columna == ($columna + 1) * 2 || $fila + $columna == 4) {
            $matriz2[] = $matriz[$fila][$columna];
        }
    }
}


for ($fila = 0; $fila < 3; $fila++) {
    for ($columna = 2; $columna < 5; $columna++) {
        if ($columna + $fila == ($fila + 1) * 2 || $fila + $columna == 4) {
            $matriz3[] = $matriz[$fila][$columna];
        }
    }
}


echo "<br>Matriz 5x5:<br>";
foreach ($matriz as $fila) {
    foreach ($fila as $valor) {
        echo $valor ."\n";
    }
    echo "<br>";
}

?>