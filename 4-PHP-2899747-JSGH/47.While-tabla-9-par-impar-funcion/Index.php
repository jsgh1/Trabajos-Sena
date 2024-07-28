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
    $inicio=0;
    $fin=5;
    while($inicio<$fin){
        $inicio=$inicio+1;
        $respuesta=$inicio*9;
        var_dump("9x$inicio=".contar($respuesta)."<br>");
    }
    ?>
</body>
</html>