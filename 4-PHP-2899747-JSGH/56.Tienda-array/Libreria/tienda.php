<?php
/**
 * Array de una tienda
 * Martin Stiben Narvaez
 * Martes 07 de Mayo del 2024
 */
$tienda = [
    ['producto' => 'Arroz', 'tipoProducto' => 'granos', 'tipoUnidad' => 'gramos', 'cantidad' => '1000', 'precio' => '2450'],
    ['producto' => 'Papa', 'tipoProducto' => 'fruver', 'tipoUnidad' => 'gramos', 'cantidad' => '500', 'precio' => '1000'],
    ['producto' => 'Mora', 'tipoProducto' => 'fruver', 'tipoUnidad' => 'gramos', 'cantidad' => '500', 'precio' => '1500'],
    ['producto' => 'Trucha', 'tipoProducto' => 'carnes', 'tipoUnidad' => 'gramos', 'cantidad' => '1000', 'precio' => '9000'],
    ['producto' => 'Pollo entero', 'tipoProducto' => 'carnes', 'tipoUnidad' => 'gramos', 'cantidad' => '1000', 'precio' => '4500'],
];

$numero_registro = count($tienda);

$nuevo_producto = ['producto' => 'Res', 'tipoProducto' => 'carnes', 'tipoUnidad' => 'gramos', 'cantidad' => '1000', 'precio' => '7500'];

$tienda[] = $nuevo_producto;

$listaBusqueda = [];

foreach ($tienda as $producto) {
    if ($producto['tipoProducto'] === 'fruver') {
        $listaBusqueda[] = $producto;
    }
}

// Mostrar los productos y la lista de búsqueda
foreach ($tienda as $producto) {
    echo "Producto: " . $producto['producto'] . ", Tipo: " . $producto['tipoProducto'] . "<br>";
}

echo "<br>Lista de productos fruver:<br>";
foreach ($listaBusqueda as $producto) {
    echo "Producto: " . $producto['producto'] . ", Tipo: " . $producto['tipoProducto'] . "<br>";
}
?>