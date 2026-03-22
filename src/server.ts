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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
