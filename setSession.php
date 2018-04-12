<?php 
$user=$_POST['user'];
if(!isset($_SESSION['user'])){session_start();}
  $_SESSION['user'] = $user;
?>