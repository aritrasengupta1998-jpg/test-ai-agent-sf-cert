"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAgent = runAgent;
require("dotenv/config");
const langchain_1 = require("langchain");
const openai_1 = require("@langchain/openai");
const tools_1 = require("./tools");
const model = new openai_1.ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0,
    apiKey: process.env.OPENAI_API_KEY,
});
async function runAgent(input) {
    const agent = (0, langchain_1.createAgent)({
        model,
        tools: [tools_1.findResourcesTool],
        systemPrompt: ` 
      You are a smart staffing AI assistant. 
      Use tools when needed. 
      Always return clean answers. 
    `,
    });
    const result = await agent.invoke({
        messages: [
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
    const finalText = typeof content === "string"
        ? content
        : Array.isArray(content)
            ? content.map((c) => c.text || "").join("")
            : "No readable response";
    console.log(finalText);
    return finalText;
}
//# sourceMappingURL=agent.js.map