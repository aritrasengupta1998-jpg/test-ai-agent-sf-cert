"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const agent_1 = require("./agent/agent");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        const reply = await (0, agent_1.runAgent)(message);
        res.json({ reply });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error" });
    }
});
const PORT = Number(process.env.PORT)||3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on PORT ${PORT}`);
});
//# sourceMappingURL=server.js.map
