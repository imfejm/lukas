<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ochrana proti XSS (ošetření vstupních dat)
    function cleanInput($data) {
        return htmlspecialchars(stripslashes(trim($data)));
    }

    $name = cleanInput($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = cleanInput($_POST["message"]);

    // Validace emailu
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Neplatný e-mail.");
    }

    // Nastavení PHPMailer
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com';  // Nahraď svým SMTP serverem
        $mail->SMTPAuth = true;
        $mail->Username = 'tvůj@email.cz'; // Nahraď svým e-mailem
        $mail->Password = 'heslo'; // Nahraď svým heslem
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Nastavení e-mailu
        $mail->setFrom('tvůj@email.cz', 'Tvoje Jméno'); 
        $mail->addAddress('prijemce@email.cz'); // Nahraď cílovým e-mailem

        $mail->Subject = 'Nová zpráva z kontaktního formuláře';
        $mail->Body = "Jméno: $name\nEmail: $email\nZpráva:\n$message";

        // Odeslání e-mailu
        if ($mail->send()) {
            header("Location: thank_you.html"); // Přesměrování na potvrzovací stránku
            exit;
        } else {
            echo "Chyba při odesílání e-mailu.";
        }
    } catch (Exception $e) {
        echo "Chyba: {$mail->ErrorInfo}";
    }
} else {
    echo "Neplatný požadavek.";
}
?>
