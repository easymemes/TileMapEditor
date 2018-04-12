<?php
$user=$_POST["username"];

$directory="users/".$user."/".$_POST["file"]."/map"."/".$_POST["file"].".txt";
unlink($directory);
$directory="users/".$user."/".$_POST["file"]."/textures";
rmdir($directory);
$directory="users/".$user."/".$_POST["file"]."/map";
rmdir($directory);
$directory="users/".$user."/".$_POST["file"];
rmdir($directory);

// users/memes/map0/map/map0.txt
// users/memes/map0/textures
print_r($directory);
?>
