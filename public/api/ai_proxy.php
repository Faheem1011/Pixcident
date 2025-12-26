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

// Gemini API Endpoint (using 1.5 Flash for speed and cost-efficiency)
$apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" . GEMINI_API_KEY;

// System Prompt
$systemPrompt = "You are the AI Assistant for Pixcident, a multidisciplinary creative studio and startup platform. Your goal is to answer questions about Pixcident's services, identity, and startup investment opportunities. Core Domains: 3D Design, ArchViz, Unreal Engine Dev, Game Dev, Motion Graphics, AI Content, Simulations. Startup Info: Pixcident is raising funds to build a next-gen creative asset platform 'Pixcident Core'. Tone: Professional, futuristic, creative, and concise. Theme: Orange, White, Black.";

// Prepare Gemini Request
$postData = [
    'contents' => [
        [
            'parts' => [
                ['text' => $systemPrompt . "\n\nUser Question: " . $userMessage]
            ]
        ]
    ],
    'generationConfig' => [
        'temperature' => 0.7,
        'maxOutputTokens' => 800,
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