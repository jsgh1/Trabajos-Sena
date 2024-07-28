<?php
include("./Libreria/tabla-5.php");
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
        $respuesta=$inicio*5;
        var_dump(contar("5x$inicio=".$respuesta)."<br>");
    }
    ?>
</body>
</html>