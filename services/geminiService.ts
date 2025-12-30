import { GoogleGenAI } from "@google/genai";

// Fix: Initialized GoogleGenAI strictly using process.env.API_KEY as per coding guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askDragonFruitAssistant = async (prompt: string) => {
  try {
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