<?php
include("./Libreria/operaciones.php");
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
var_dump(operaciones("resta",12,14));
echo "<br>";
var_dump(operaciones("mult",12,2));
echo "<br>";
var_dump(operaciones("division",12,3));
?>    
</body>
</html>