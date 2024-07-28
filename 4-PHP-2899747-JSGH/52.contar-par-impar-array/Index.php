<?php
include("./Libreria/contar.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
     // Mostrar los resultados
    echo "Array de contar hasta 10:\n";
    var_dump($array);
    echo "<br>";
 
    echo "\nArray de números pares:\n";
    var_dump($pares);
    echo "<br>";
 
    echo "\nArray de números impares:\n";
    var_dump($impares);
    ?>
</body>
</html>