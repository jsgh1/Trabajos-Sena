<?php
include("./Libreria/edad_ao.php");
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
    var_dump("Año en que nacio: ",+$año1);
    echo"<br>";
    var_dump("Año Actual: ",+$año2);
    echo"<br>";
    var_dump("Su edad calculada es: ",+$edad);
    echo"<br>";
    var_dump($resultado);
    ?>
</body>
</html>