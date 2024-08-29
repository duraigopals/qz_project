<?php
//Import PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
$msg = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $body = file_get_contents('php://input');
    $postData = json_decode($body);
    // date_default_timezone_set('Etc/UTC');
    require './vendor/autoload.php';
    require './config.php';
    //Create a new PHPMailer instance
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->Port = SMTP_PORT;
    $mail->SMTPAuth   = true;                    // Enable SMTP authentication
    $mail->Username   = SMTP_USER;               // SMTP username
    $mail->Password   = SMTP_PASS;               // SMTP password
    $mail->SMTPSecure = 'tls'; // Enable TLS encryption
    $mail->Port       = SMTP_PORT;                                    
    $mail->setFrom(SMTP_USER, SMTP_FROM_USER);
    $mail->addAddress(SMTP_TO_EMAIL);
    $todayDate = date('d-M-Y');
    $httpCode = 500;
    $responseData = array('success'=>false);
    $name = $postData->fname." ".$postData->lname;
    if ($mail->addReplyTo($postData->email, $name)) {
        $mail->Subject = 'New Customer Enquiry Received - '.$name;
        //Keep it simple - don't use HTML
        $mail->isHTML(true);
        //Build a simple message body
        $htmlContent = "<p>We have received a new customer enquiry through our website. </p>";
        $htmlContent .= "<b>Below are the details for your reference</b>";
        $htmlContent .= "<p><strong>Enquiry Date :</strong> $todayDate</p>";
        $htmlContent .= "<p><strong>Customer Name :</strong>".$name."</p>";  
        $htmlContent .= "<p><strong>Email Address :</strong>".$postData->email."</p>";
        $htmlContent .= "<p><strong>Subject :</strong>". $postData->subject."</p>";
        $htmlContent .= "<p><strong>Message :</strong>". $postData->message."</p>";
        $htmlContent .= "<p>Please review the enquiry and take the necessary action to address it.</p>";
        $mail->Body = $htmlContent;
        //Send the message, check for errors
        if (!$mail->send()) {
            $httpCode = 500;
            //The reason for failing to send will be in $mail->ErrorInfo
            //but it's unsafe to display errors directly to users - process the error, log it on your server.
            $responseData['success'] = false;
        } else {
            $httpCode = 200;
            $responseData['success'] = true;
        }
    } else {
        $responseData['success'] = false;
    }
    header("Content-type: application/json; charset=utf-8");
    http_response_code($httpCode);
    echo json_encode($responseData);
    exit;
}
?>
