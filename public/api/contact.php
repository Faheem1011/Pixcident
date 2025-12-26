<?php
/**
 * Pixcident Contact Form Handler
 * Secure PHP backend for handling contact form submissions
 * Sends email notifications to Contact@pixcident.com
 */

// Security headers
header('Access-Control-Allow-Origin: https://pixcident.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Rate limiting: Simple session-based (1 submission per 60 seconds)
session_start();
$now = time();
$last_submission = isset($_SESSION['last_contact_submission']) ? $_SESSION['last_contact_submission'] : 0;

if ($now - $last_submission < 60) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Please wait before submitting again']);
    exit;
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars(strip_tags(trim($data['name'])));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$projectType = isset($data['projectType']) ? htmlspecialchars(strip_tags(trim($data['projectType']))) : 'Not specified';
$message = htmlspecialchars(strip_tags(trim($data['message'])));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Honeypot check (add a hidden field in frontend called 'website')
if (!empty($data['website'])) {
    // Bot detected
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Spam detected']);
    exit;
}

// Email configuration
$to = 'Contact@pixcident.com';
$subject = "New Contact Form Submission - $projectType";

// Email body (HTML)
$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #FF5500; color: white; padding: 20px; text-align: center; }
        .content { background: #f4f4f4; padding: 20px; border-radius: 5px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #FF5500; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>🔔 New Contact Form Submission</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <span class='label'>Name:</span><br>
                $name
            </div>
            <div class='field'>
                <span class='label'>Email:</span><br>
                <a href='mailto:$email'>$email</a>
            </div>
            <div class='field'>
                <span class='label'>Project Type:</span><br>
                $projectType
            </div>
            <div class='field'>
                <span class='label'>Message:</span><br>
                " . nl2br($message) . "
            </div>
        </div>
        <div class='footer'>
            <p>Sent from Pixcident Contact Form</p>
            <p>Reply directly to this email to contact the client</p>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Pixcident Website <noreply@pixcident.com>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mailSent = mail($to, $subject, $emailBody, $headers);

if ($mailSent) {
    // Update rate limit session
    $_SESSION['last_contact_submission'] = $now;
    
    // Optional: Send to WhatsApp (you'll need to configure Twilio)
    // sendWhatsAppNotification($name, $email, $projectType);
    
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'Thank you! Your message has been sent successfully.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Failed to send message. Please try again or email us directly.'
    ]);
}

/**
 * Optional: WhatsApp Notification via Twilio
 * Uncomment and configure to enable WhatsApp notifications
 */
/*
function sendWhatsAppNotification($name, $email, $projectType) {
    // Twilio credentials (store these in environment variables or config file)
    $account_sid = 'YOUR_TWILIO_ACCOUNT_SID';
    $auth_token = 'YOUR_TWILIO_AUTH_TOKEN';
    $twilio_whatsapp_number = 'whatsapp:+14155238886'; // Twilio sandbox number
    $your_whatsapp_number = 'whatsapp:+923041272538'; // Your WhatsApp number
    
    $message_body = "🔔 New Contact Form:\n\nName: $name\nEmail: $email\nProject: $projectType";
    
    $url = "https://api.twilio.com/2010-04-01/Accounts/$account_sid/Messages.json";
    
    $data = [
        'From' => $twilio_whatsapp_number,
        'To' => $your_whatsapp_number,
        'Body' => $message_body
    ];
    
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_USERPWD, "$account_sid:$auth_token");
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    return json_decode($response, true);
}
*/
?>
