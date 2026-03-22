"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findResourcesTool = void 0;
const tools_1 = require("@langchain/core/tools");
const zod_1 = require("zod");
const salesforce_1 = require("../services/salesforce");
exports.findResourcesTool = new tools_1.DynamicStructuredTool({
    name: "find_resources",
    description: ` 
Find resources based on skill, availability and experience. 
Use this when user asks for best resource, available resource, or staffing suggestions.Availability is a picklist with value available or Not Available and experience is a picklist having two values , new and experienced. 
`,
    schema: zod_1.z.object({
        skill: zod_1.z.string().optional(),
        availability: zod_1.z.string().optional(),
        exp: zod_1.z.string().optional()
    }),
    func: async (input) => {
        const data = await (0, salesforce_1.findResources)(input);
        return JSON.stringify(data);
    }
});
//# sourceMappingURL=tools.js.map