<?php
include("./Libreria/contar.php");
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
    $fin=5;
    for($numero=1;$numero<=$fin;$numero++){
        var_dump(contar($numero)."<br>");
    }
    ?>
</body>
</html>