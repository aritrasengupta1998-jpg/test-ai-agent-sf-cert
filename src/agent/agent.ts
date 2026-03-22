import "dotenv/config"; 
import { createAgent } from "langchain"; 
import { ChatOpenAI } from "@langchain/openai"; 
import { findResourcesTool } from "./tools"; 
 
const model = new ChatOpenAI({ 
  model: "gpt-4o-mini", 
  temperature: 0, 
  apiKey: process.env.OPENAI_API_KEY, 
}); 
 
export async function runAgent(input: string) { 
  const agent = createAgent({ 
    model, 
    tools: [findResourcesTool], 
    systemPrompt: ` 
      You are a smart staffing AI assistant. 
      Use tools when needed. 
      Always return clean answers. 
    `, 
  }); 
 
  const result = await agent.invoke({ 
    messages:[
{
role: "user",
content: input,
},
], 
  }); 
console.log(input);
  const lastMessage = result.messages[result.messages.length - 1]; 
 
if (!lastMessage) { 
  return "No response"; 
} 
 
const content = lastMessage.content; 
 
const finalText = 
  typeof content === "string" 
    ? content 
    : Array.isArray(content) 
      ? content.map((c: any) => c.text || "").join("") 
      : "No readable response"; 
 
console.log(finalText); 
 
return finalText; 
 
}
