import { DynamicStructuredTool } from "@langchain/core/tools";
import { z } from "zod";
export declare const findResourcesTool: DynamicStructuredTool<z.ZodObject<{
    skill: z.ZodOptional<z.ZodString>;
    availability: z.ZodOptional<z.ZodString>;
    exp: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, {
    skill?: string | undefined;
    availability?: string | undefined;
    exp?: string | undefined;
}, {
    skill?: string | undefined;
    availability?: string | undefined;
    exp?: string | undefined;
}, string, unknown, "find_resources">;
//# sourceMappingURL=tools.d.ts.map