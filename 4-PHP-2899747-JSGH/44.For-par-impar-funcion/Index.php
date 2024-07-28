<?php
include("./Libreria/par-impar.php");
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
        var_dump(contar($inicio)."<br>");
    }
    ?>
</body>
</html>