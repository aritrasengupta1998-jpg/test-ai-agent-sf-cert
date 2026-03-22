import axios from "axios"; 
 
const CLIENT_ID = "3MVG9SnjeJhUwbWGG24PeID2h9ggKhZu4byoypOquiWMX7m5a._8F4zREAdwzjQ.MDGsQAr5JkuS7ChmwsUxl"; 
 
const CLIENT_SECRET = "5A1FCFB003DA405344E55782272CB9A029B189DAD0D92CF4A56B7B259C668DF2"; 
 
const USERNAME = "aritra.s.sengupta@pwc.com.poc2"; 
 
const PASSWORD = "Branko@5314222226PxqeJEHxgWZQuFTog8j46ag";  
 
 
 
const LOGIN_URL = "https://test.salesforce.com";
 
 
 
export async function getAccessToken() { 
 
  const res = await axios.post(`${LOGIN_URL}/services/oauth2/token`, null, { 
 
    params: { 
 
      grant_type: "password", 
 
      client_id: CLIENT_ID, 
 
      client_secret: CLIENT_SECRET, 
 
      username: USERNAME, 
 
      password: PASSWORD 
 
    } 
 
  }); 
 
 
 
  return res.data.access_token; 
 
} 
