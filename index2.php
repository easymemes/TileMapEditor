<?php
$login = $_POST["login"];
$dir    = "users";
$files1 = scandir($dir,1);
$find=false;
session_start();

foreach ($files1 as $value)
{
    if($value == $login)
    {
      $find=true;
      $_SESSION['user']=$login;
      print_r($_SESSION['user']);
    }
}
if(!$find){print_r("NotLogin");}
?>
