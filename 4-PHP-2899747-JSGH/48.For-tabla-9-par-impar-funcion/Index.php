<?php
include("./Libreria/tabla-9.php");
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
    for($inicio=1;$inicio<=$fin;$inicio++){
        $respuesta=$inicio*9;
        var_dump("9x$inicio=".contar($respuesta)."<br>");
    }
    ?>
</body>
</html>