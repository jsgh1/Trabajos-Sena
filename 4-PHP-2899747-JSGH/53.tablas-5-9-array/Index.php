<?php
include("./Libreria/tablas.php");
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
    var_dump("Matriz de la tabla del 5:");
    var_dump($matriz5)."<br>";
    var_dump("<br><br> Números pares:");
    var_dump($pares)."<br>";
    var_dump("<br><br> Números impares:");
    var_dump($impares)."<br>";
    var_dump("<br><br> Suma de los números pares:". $sumarPares);
    var_dump("<br><br> Suma de los números impares:". $sumarImpares);
    var_dump("<br><br> Matriz de la tabla del 9:");
    var_dump($matriz9);
    var_dump("<br><br> Números pares:");
    var_dump($pares9);
    var_dump("<br><br> Números impares:");
    var_dump($impares9);
    var_dump("<br><br> Suma de los números pares:". $sumarPares9);
    var_dump("<br><br> Suma de los números impares:". $sumarImpares9);
    ?>
</body>
</html>