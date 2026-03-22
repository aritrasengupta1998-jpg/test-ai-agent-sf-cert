import { DynamicStructuredTool } from "@langchain/core/tools"; 
import { z } from "zod"; 
import { findResources } from "../services/salesforce"; 
 
export const findResourcesTool = new DynamicStructuredTool({ 
  name: "find_resources", 
  description: ` 
Find resources based on skill, availability and experience. 
Use this when user asks for best resource, available resource, or staffing suggestions.Availability is a picklist with value available or Not Available and experience is a picklist having two values , new and experienced. 
`, 
  schema: z.object({ 
    skill: z.string().optional(), 
    availability: z.string().optional(), 
    exp: z.string().optional() 
  }), 
  func: async (input) => { 
    const data = await findResources(input); 
    return JSON.stringify(data); 
  } 
});
