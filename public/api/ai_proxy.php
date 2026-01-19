<?php
/**
 * Pixcident AI Proxy
 * Securely communicates with Google Gemini AI from the server side.
 * Hides the API Key from the frontend.
 */

// Enable error reporting for debugging (disable in production if needed)
error_reporting(E_ALL);
ini_set('display_errors', 0);

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

// Load configuration
if (!file_exists(__DIR__ . '/config.php')) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server configuration missing.']);
    exit;
}
require_once __DIR__ . '/config.php';

// Check if API Key is set
if (!defined('GEMINI_API_KEY') || GEMINI_API_KEY === 'PASTE_YOUR_GEMINI_API_KEY_HERE') {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'AI API Key not configured on server.']);
    exit;
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Message is required.']);
    exit;
}

$userMessage = $data['message'];

// Gemini API Endpoint
$apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" . GEMINI_API_KEY;

// Enhanced Sales-Focused System Prompt
$systemPrompt = "You are Pixcident AI Sales Assistant. Help clients solve problems and guide them to our services.

SERVICES:
- 3D Renders: Sell products before manufacturing
- ArchViz: Close real estate deals with VR walkthroughs  
- Unreal Engine: Immersive experiences that convert
- Motion Graphics: Viral social content
- AI Solutions: Scale output 10x without hiring
- Web Dev: Fast sites that convert 3x better
- Vibe Coding: Unforgettable brand experiences

STRATEGY:
1. Identify their problem
2. Recommend the right service
3. Cross-sell related services
4. Create urgency
5. End with CTA to contact

TONE: Helpful, persuasive, client-focused. Position THEM as hero, Pixcident as guide.

EXAMPLES:
- Website slow? 'Our sites load in under 2 seconds and convert 3x better. Ready to discuss your project?'
- Need renders? 'Show customers exactly what they get. Combined with our web dev, you sell before manufacturing. Want to explore this?'
- Scaling issues? 'AI automation scales your output 10x. Every day without it costs opportunities. Shall we talk?'

Always end with a soft CTA to contact or schedule consultation.";

// Prepare Gemini Request with better configuration
$postData = [
    'contents' => [
        [
            'parts' => [
                ['text' => $systemPrompt . "\n\nUser Question: " . $userMessage]
            ]
        ]
    ],
    'generationConfig' => [
        'temperature' => 0.8,
        'maxOutputTokens' => 600,
    ]
];

// Execute Request
$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    $result = json_decode($response, true);
    $reply = $result['candidates'][0]['content']['parts'][0]['text'] ?? "I'm sorry, I couldn't generate a response.";

    echo json_encode([
        'success' => true,
        'reply' => $reply
    ]);
} else {
    $error = json_decode($response, true);
    $errorMessage = $error['error']['message'] ?? "Error communicating with AI service.";

    http_response_code($httpCode);
    echo json_encode([
        'success' => false,
        'message' => $errorMessage,
        'debug' => $error // Optional: remove in production
    ]);
}
?>