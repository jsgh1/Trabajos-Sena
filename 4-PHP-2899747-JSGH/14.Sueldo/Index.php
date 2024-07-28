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
  echo "Sueldo inicial: ";
  var_dump($sueldo);
  echo "<br>";
  echo "La salud es de: ";
  var_dump($salud);
  echo "<br>";
  echo "La pension es de: ";
  var_dump($pension);
  echo "<br>";
  echo "El arl es de: ";
  var_dump($arl);
  echo "<br>";
  echo "El pago total es de: ";
  var_dump($pago);
?>
</body>
</html>