<?php
include("./Libreria/areas.php");
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
    var_dump(figuras("triangulo",12,14)."<br>");
    var_dump(figuras("cuadrado",12,0)."<br>");
    var_dump(figuras("rectangulo",12,14)."<br>");
    ?>
</body>
</html>