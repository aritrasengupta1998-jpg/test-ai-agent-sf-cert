import express from "express";
import { runAgent } from "./agent/agent";

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const reply = await runAgent(message);

    res.json({ reply });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});