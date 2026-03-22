import axios from "axios"; 
import { getAccessToken } from "./auth";
 
 
const SF_BASE_URL = "https://pwcteambuilder--poc2.sandbox.my.salesforce.com/services/apexrest"; 
 
export async function findResources(input: any) { 
 
  try { 
    const token = await getAccessToken();
const res = await axios.post( 
 
      `${SF_BASE_URL}/ai/findResources`, 
 
      JSON.stringify(
  {
    req: input	  }), 
 
      { 
 
        headers: { 
 
          Authorization: `Bearer ${token}`, 
 
          "Content-Type": "application/json" 
 
        } 
 
      } 
 
    ); 
 
 
 
    return res.data; 
 
 
 
  } catch (err) { 
 
    console.error("Salesforce API Error:", err); 
 
    throw err; 
 
  } 
 
} 
