<?php
include("./Libreria/tablas.php");
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
    $contar1=0;
    $contar2=0;
    for($inicio1=1;$inicio1<=5;$inicio1++){
        for($inicio2=1;$inicio2<=5;$inicio2++){
            if(tablas($inicio1,$inicio2%2==0)){
                $contar1=$contar1+1;
                var_dump($inicio1."x".$inicio2."=".tablas($inicio1,$inicio2)." Buzz <br>");
            }else{
                $contar2=$contar2+1;
                var_dump($inicio1."x".$inicio2."=".tablas($inicio1,$inicio2)." Bass <br>");
            }
        }
    }
    var_dump("La cantidad de Buzz es: ".$contar1."<br>");
    var_dump("La cantidad de Bass es: ".$contar2."<br>");
    ?>
</body>
</html>