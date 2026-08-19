const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: "Server Live", link: "/localconfig.json pe config hai" });
});

app.get('/localconfig.json', (req, res) => {
  res.json({
    "verAddr": "https://my-first-server-da2k.onrender.com/",
    "skipResourceDownload": false,
    "skipVersionCheck": false,
    "checkHacker": false,
    "forceCrash": false,
    "enableUGCFullCustom": true,
    "showAllIngameTutorial": false,
    "resetGuest": false,
    "expiresAt": "2026-08-20T23:59:59+05:30",
    "telegramLink": "https://t.me/Elite_Config",
    "title": "CONFIG ZONE MODERATOR"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running"));