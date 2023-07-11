<?php
// Include PHPMailer library
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';
require __DIR__ . '/PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
// Configure PHPMailer
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'your_smtp_host';
$mail->SMTPAuth = true;
$mail->Username = 'your_email@example.com';
$mail->Password = 'your_email_password';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

// Set sender and recipient
$mail->setFrom($_POST['email'], $_POST['name']);
$mail->addAddress('receiver_email@example.com'); // Replace with the recipient's email address

// Set email content
$mail->Subject = 'New Contact Form Submission';
$mail->Body = 'Name: ' . $_POST['name'] . "\n\n" . 'Email: ' . $_POST['email'] . "\n\n" . 'Message: ' . $_POST['message'];

// Send the email
if ($mail->send()) {
  echo 'Email sent successfully';
} else {
  echo 'Error sending email: ' . $mail->ErrorInfo;
}
?>
