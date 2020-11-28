const { json } = require("express");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  // API Key = 821f69af563f3ec45263448463fa1131
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Katikati&appid=821f69af563f3ec45263448463fa1131";
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      console.log(weatherData.name);
    });
  });

  res.send("");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
