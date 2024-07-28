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
    $inicio=0;
    $fin=5;
    while($inicio<$fin){
        $inicio=$inicio+1;
        var_dump(contar($inicio)."<br>");
    }
    ?>
</body>
</html>