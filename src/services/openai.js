"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = void 0;
require("dotenv/config");
const openai_1 = require("@langchain/openai");
exports.model = new openai_1.ChatOpenAI({
    modelName: "gpt-4o-mini",
    temperature: 0,
    apiKey: process.env.OPENAI_API_KEY
});
//# sourceMappingURL=openai.js.map