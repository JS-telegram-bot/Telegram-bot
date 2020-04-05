<?php
 
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_mail'];
$comm = $_POST['comment']; 

$token = "1122936546:AAFX2goLcgvARa4YfsiBuso4tOV5yMVODGY";
 
$chat_id = "-1001262368010";
 
$arr = array(
  'Имя:' => $name,
  'Телефон:' => $phone,
  'Email:' => $email,
  '' => $comm
);
 
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
if ($sendToTelegram) {
  echo "Thank you";
} else {
  echo "Error";
}
?>