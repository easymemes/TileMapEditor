<?php
$user=$_POST['username'];
$dir   = 'users/'.$user."/";
$files1 = scandir($dir,1);
foreach ($files1 as $value) {
  if(($value!=".")&&($value!=".."))
  {
    print_r($value);
    print_r(" ");
  }
}
 ?>
