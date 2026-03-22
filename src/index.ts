import "dotenv/config"; 
import { runAgent } from "./agent/agent"; 
 
async function main() { 
 
  const input = "Find Java developer who is experienced and having more than 50% availability"; 
 
  const result = await runAgent(input); 
 
  console.log("FINAL OUTPUT:", result); 
} 
 
main();
