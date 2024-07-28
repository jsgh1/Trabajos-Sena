<?php
include("./Libreria/edades.php");
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
    $edad1=12;
    var_dump(edad($edad1));
    echo "<br>";
    $edad2=23;
    var_dump(edad($edad2));
    echo "<br>";
    $edad3=18;
    var_dump(edad($edad3));
    echo "<br>";
    var_dump(promedio($edad1,$edad2,$edad3));
    ?>
</body>
</html>