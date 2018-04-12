<?php
$username=$_POST['username'];
$fileName = $_POST['name'];



$users="users/".$username."/".$fileName;
//   users/suka/map1
mkdir($users, 0700);
$users="users/".$username."/".$fileName;
//   users/suka/map1
mkdir($users, 0700);
$users="users/".$username."/".$fileName."/map";
//   users/suka/map1/map
mkdir($users, 0700);
$users="users/".$username."/".$fileName."/textures";
//   users/suka/map1/textures
mkdir($users, 0700);




$file="users/".$username."/".$fileName."/map"."/".$fileName.".txt";
// users/suka/map1/map/map1.txt
print_r($_POST);
$content = $_POST['width']." ".$_POST['height']." ".$_POST['map']." ";

file_put_contents($file, $content);
// for($x=0;$x<10000;$x++)
// {
//   $file="text/file$x.txt";
//   $text=":)";
//   for($z=0;$z<10000;$z++)
//   {
//     $text=$text.$z;
//   }
//   file_put_contents($file, $text);
// }


?>
