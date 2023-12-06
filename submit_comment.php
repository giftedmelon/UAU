<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $comment = $_POST["comment"];
    
    // Send email using your preferred method (e.g., mail() function)
    // Note: You need a server-side solution to send emails securely.

    // Example using mail() function (replace with your own SMTP setup):
    mail("ryu1231996@gmail.com", "New Comment", $comment, "From: sender@example.com");
}