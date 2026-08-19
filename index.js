const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: "Bhai mera pehla server chal gaya!", status: "online" });
});

app.get('/config', (req, res) => {
  res.json({ app_name: "My Learning Panel", version: "1.0" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));