<?php 
$name = trim($_POST['name']); 
$phone = trim($_POST['phone']); 
$checkbox = trim($_POST['checkbox']); 
$fromMail = 'u91763.test-handyhost.ru'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Новая заявка с сайта Александр Курленков - ФОТО и ВИДЕО'; //Заголовок письма
$emailTo = 'detroid90@mail.ru'; //Ваша почта
$subject = 'Форма обратной связи site.com'; 
$subject = '=?utf-8?b?'. base64_encode($subject) .'?='; 
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 

// Содержимое письма 
$body = "Поступила новая заявка на обратный звонок \nИмя:   $name\nТелефон:   $phone\nПрава конфединциальности:   $checkbox"; 

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($phone) > 0) { 
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
return;
} 

?>