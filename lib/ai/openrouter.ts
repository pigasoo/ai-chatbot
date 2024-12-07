import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const openrouterModel = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export default openrouterModel;
