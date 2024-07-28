<?php
include("./Libreria/pago_total.php");
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
    var_dump("Salario: ",+$salario);
    echo "<br>";

    var_dump("Salud: ",+$salud);
    echo "<br>";

    var_dump("Pension: ",+$pension);
    echo "<br>";

    var_dump("Arl: ",+$arl);
    echo "<br>";

    var_dump("Pago total: ",+$total_pagar);
    ?>
</body>
</html>