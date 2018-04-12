<?php
 $login = $_POST["login"];
 print_r($login);
 $users="users/".$login;
 mkdir($users, 0700);
 ?>
