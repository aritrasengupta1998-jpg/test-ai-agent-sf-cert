"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findResources = findResources;
const axios_1 = __importDefault(require("axios"));
const auth_1 = require("./auth");
const SF_BASE_URL = "https://pwcteambuilder--poc2.sandbox.my.salesforce.com/services/apexrest";
async function findResources(input) {
    try {
        const token = await (0, auth_1.getAccessToken)();
        const res = await axios_1.default.post(`${SF_BASE_URL}/ai/findResources`, JSON.stringify({
            req: input
        }), {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        return res.data;
    }
    catch (err) {
        console.error("Salesforce API Error:", err);
        throw err;
    }
}
//# sourceMappingURL=salesforce.js.map