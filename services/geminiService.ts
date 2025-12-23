import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("Gemini API Key is missing. AI features will be disabled.");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "I'm currently offline. Please configure the API Key to chat with Pixcident AI.";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      }
    });
    
    return response.text || "Pixcident AI could not generate a response.";
  } catch (error) {
    console.error("Error communicating with Pixcident AI:", error);
    return "Connection interrupted. Please try again later.";
  }
};