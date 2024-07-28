<?php
include("./Libreria/salario.php");
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
    echo "Su salud es de: ";
    var_dump(subsidios("Salud",45,130000));
    echo"<br>";
    echo "Su Pension es de: ";
    var_dump(subsidios("Pension",45,130000));
    echo"<br>";
    echo "Su Arl es de: ";
    var_dump(subsidios("Arl",45,130000));
    echo"<br>";
    echo "Su pago total es de: ";
    var_dump(pagoTotal(45,130000));
    ?>
</body>
</html>