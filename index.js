app.get('/localconfig.json', (req, res) => {
  res.json({
    "verAddr": "https://my-first-server-pjy5.onrender.com/",
    "skipResourceDownload": false,
    "skipVersionCheck": false,
    "checkHacker": false,
    "forceCrash": false,
    "enableUGCFullCustom": true,
    "showAllIngameTutorial": false,
    "resetGuest": false,
    "expiresAt": "2026-08-20T23:59:59+05:30",
    "title": "CONFIG ZONE MODERATOR"
  })
});