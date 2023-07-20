import express from "express";
var router = express.Router();
import axios from "axios";

/* GET home page. */
router.get("/", async (req, res, next) => {
  const apiToken = process.env.TOKEN;
  const chatId = process.env.CHAT_ID;
  const message = "Hello, ini adalah pesan dari API Express.js saya!";

  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${apiToken}/sendMessage`,
      {
        chat_id: chatId,
        text: message
      }
    );
    console.log("Message sent:", response.data);
    res.send("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message:", error.message);
    res.status(500).send("Error sending message");
  }
});

router.post("/", async (req, res, next) => {
  const apiToken = process.env.TOKEN;
  const chatId = process.env.CHAT_ID;
  const message = req.body.message;
  console.log(message);

  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${apiToken}/sendMessage`,
      {
        chat_id: chatId,
        text: message
      }
    );
    console.log("Message sent:", response.data);
    res.send("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message:", error.message);
    res.status(500).send("Error sending message");
  }
});

module.exports = router;
