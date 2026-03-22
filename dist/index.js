"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const agent_1 = require("./agent/agent");
async function main() {
    const input = "Find Java developer who is experienced and having more than 50% availability";
    const result = await (0, agent_1.runAgent)(input);
    console.log("FINAL OUTPUT:", result);
}
main();
//# sourceMappingURL=index.js.map