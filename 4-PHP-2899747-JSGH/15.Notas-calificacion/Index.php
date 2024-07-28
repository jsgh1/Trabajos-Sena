<?php
include("./Libreria/notas.php");
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
    echo "Nota 1: ";
    var_dump($nota1);
    echo "<br>";
    echo "Nota 2: ";
    var_dump($nota2);
    echo "<br>";
    echo "Nota 3: ";
    var_dump($nota3);
    echo "<br>";
    echo "Porcentaje de la nota 1: ";
    var_dump($porcentaje1);
    echo "<br>";
    echo "Porcentaje de la nota 2: ";
    var_dump($porcentaje2);
    echo "<br>";
    echo "Porcentaje de la nota 3: ";
    var_dump($porcentaje3);
    echo "<br>";
    echo "Su nota final es: ";
    var_dump($respuesta);
    ?>
</body>
</html>