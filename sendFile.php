<?php
$uploaddir = 'user_images/';
$substring1 = explode(".",$_FILES['filename']['name']);

echo end($substring1);
$uploadfile = $uploaddir .$_GET['name'].".".end($substring1);
echo $_FILES['filename']['name'];

if (move_uploaded_file($_FILES['filename']['tmp_name'], $uploadfile)) 
{
    echo "Файл корректен и был успешно загружен.\n";
}
else 
{
    echo "Возможная атака с помощью файловой загрузки!\n";
}

?>