"use server";
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY!;

export const genAI = new GoogleGenAI({
  apiKey: apiKey,
});

export const model = "gemini-2.5-pro";

export const chatSession = genAI.chats.create({
  model: model,
  config: {
    maxOutputTokens: 8192,
    temperature: 1,
  },
});