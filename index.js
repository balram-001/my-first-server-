const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: "Bhai mera pehla server chal gaya!",
    status: "online"
  });
});

app.get('/config', (req, res) => {
  res.json({
    app_name: "My Learning Panel",
    version: "1.0",
    features: {
      aim: false,
      esp: false
    },
    note: "Ye safe hai, sirf sikhne ke liye"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});