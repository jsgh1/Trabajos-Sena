<?php
include("./Libreria/sueldo.php");
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
    $dia=76;
    $vdia=130000;
    echo "Salario inicial";
    echo "<br>";
    var_dump(salarioP($dia,$vdia));
    echo "<br>";
    echo "Subsidio de transporte";
    echo "<br>";
    var_dump(subTransporteP($dia,$vdia));
    echo "<br>";
    echo "Salud";
    echo "<br>";
    var_dump(saludP($dia,$vdia));
    echo "<br>";
    echo "Pension";
    echo "<br>";
    var_dump(pensionP($dia,$vdia));
    echo "<br>";
    echo "Arl";
    echo "<br>";
    var_dump(arlP($dia,$vdia));
    echo "<br>";
    echo "Deducible";
    echo "<br>";
    var_dump(deducibleP($dia,$vdia));
    echo "<br>";
    echo "Retencion";
    echo "<br>";
    var_dump(retencionP($dia,$vdia));
    echo "<br>";
    echo "Pago total";
    echo "<br>";
    var_dump(pagoTotal($dia,$vdia));
    ?>
</body>
</html>