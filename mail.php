
<meta charset="utf-8"> 
<?php
$test="Museum";
error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы		
if (isset($_POST['cf_name']))			{$cf_name			= $_POST['cf_name'];		if ($cf_name == '')	{unset($cf_name);}}
if (isset($_POST['cf_email']))		{$cf_email		= $_POST['cf_email'];		if ($cf_email == '')	{unset($cf_email);}}
if (isset($_POST['cf_message']))			{$cf_message			= $_POST['cf_message'];		if ($cf_message == '')	{unset($cf_message);}}
if (isset($_POST['sen']))			{$sen			= $_POST['sen'];		if ($sen == '')		{unset($sen);}}
//стирание треугольных скобок из полей формы
if (isset($cf_name) ) {
$cf_name=stripslashes($cf_name);
$cf_name=htmlspecialchars($cf_name;
}
if (isset($cf_email) ) {
$cf_email=stripslashes($cf_email);
$cf_email=htmlspecialchars($cf_email);
}
if (isset($cf_message) ) {
$cf_message=stripslashes($cf_message);
$cf_message=htmlspecialchars($cf_message);
}
// адрес почты куда придет письмо
$address="nikitakomov7@gmail.com";
// текст письма 
$note_text="Тема : $test \r\nИмя : $cf_name \r\n Email : $cf_email \r\n Дополнительная информация : $cf_message";

if (isset($cf_name)  &&  isset ($sen) ) {
mail($address,$test,$note_text,"Content-type:text/plain; windows-1251"); 
// сообщение после отправки формы
echo "<p style='color:#009900;'>Уважаемый(ая) <b>$cf_name</b> Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам скоро ответят на почту <b> $cf_email</b>.</p>";
}

?>