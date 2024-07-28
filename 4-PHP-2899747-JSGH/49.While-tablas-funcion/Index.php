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
            $inicio1=0;
            $fin=5;
            $fin2=5;
            $contar1=0;
            $contar2=0;
    
            while($inicio1<$fin){
                $inicio1=$inicio1+1;
                $inicio2=0;
                while($inicio2<$fin2){
                    $inicio2=$inicio2+1;
                    if(tablas($inicio1,$inicio2)%2==0){
                        $contar1=$contar1+1;
                        var_dump($inicio1."x".$inicio2."=".tablas($inicio1,$inicio2)." Buzz <br>");
                    }else{
                        $contar2=$contar2+1;
                        var_dump($inicio1."x".$inicio2."=".tablas($inicio1,$inicio2)." Bass <br>");
                    }
                }
            }
    var_dump ("La cantidad de Buzz: ".$contar1."<br>");
    var_dump ("La cantidad de Bass: ".$contar2."<br>");
    ?>
</body>
</html>