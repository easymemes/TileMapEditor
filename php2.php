<?php
$user=$_POST['username'];
$fileName = $_POST['name'];
$file = file_get_contents('users/'.$user."/".$fileName."/"."map/".$fileName.".txt", true);
// users/suka/map0/map/map0.txt
print_r($file);
?>
