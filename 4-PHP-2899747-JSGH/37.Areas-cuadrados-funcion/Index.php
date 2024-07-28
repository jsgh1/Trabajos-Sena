<?php
include("./Libreria/cuadrados.php");
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
    $cuadrado1=cuadrados(23);
    var_dump($cuadrado1);
    echo "<br>";
    $cuadrado2=cuadrados(12);
    var_dump($cuadrado2);
    echo "<br>";
    $cuadrado3=cuadrados(33);
    var_dump($cuadrado3);
    echo "<br>";
    var_dump(mayor($cuadrado1,$cuadrado2,$cuadrado3));
    ?>
</body>
</html>