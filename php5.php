<?php
$user=$_POST["username"];
$uploaddir = 'users/'.$user."/images";
print_r($uploaddir);
print_r($_FILES['thefile']);
$uploadfile = $uploaddir . basename($_FILES['thefile']['name']);

echo '<pre>';
if (move_uploaded_file($_FILES['thefile']['tmp_name'], $uploadfile)) {
    echo "Файл корректен и был успешно загружен.\n";
} else {
    echo "Возможная атака с помощью файловой загрузки!\n";
}

echo 'Некоторая отладочная информация:';
print_r($_FILES);

print "</pre>";
//https://xdan.ru/working-with-files-in-javascript-part-1-the-basics.html
//http://php.net/manual/ru/session.examples.basic.php
//https://ru.stackoverflow.com/questions/252086/%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-%D0%B0%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE-%D0%BD%D0%B0-%D1%87%D0%B8%D1%81%D1%82%D0%BE%D0%BC-javascript
?>
