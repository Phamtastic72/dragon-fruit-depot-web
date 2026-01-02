
import { GoogleGenAI } from "@google/genai";

// Lazy-initialize the AI client to prevent top-level crashes
let aiInstance: GoogleGenAI | null = null;

const getAI = () => {
  if (!aiInstance) {
    const apiKey = process.env.API_KEY || "";
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};

export const askDragonFruitAssistant = async (prompt: string) => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are an expert Dragon Fruit (Pitaya) horticulturalist. You provide concise, actionable advice for growing, pollinating, and harvesting dragon fruit. You are friendly and helpful.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my garden brain right now. Please try again later!";
  }
};
