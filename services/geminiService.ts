/**
 * Securely communicates with Pixcident AI via the PHP backend proxy.
 * This ensures the API key remains hidden from the frontend.
 */
export const generateAIResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await fetch('/api/ai_proxy.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Server error');
    }

    const data = await response.json();

    if (data.success) {
      return data.reply;
    } else {
      return data.message || "I'm sorry, I couldn't generate a response.";
    }
  } catch (error) {
    console.error("Error communicating with Pixcident AI:", error);
    return "Connection interrupted. Please ensure the AI is configured on the server or try again later.";
  }
};