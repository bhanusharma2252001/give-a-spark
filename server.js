const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
// const cors = require('cors')P
// app.use(cors());
console.log(port);
app.listen(port);


// /home/perfectiongeeks/giveasparkClient/Giveaspark_client/dist/giveaspark-client/index.html - path

// /home/shrey/giveaspark_client/dist/giveaspark-client/index.html- wrong path
app.use(express.static("dist/giveaspark_client"));

app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/dist/giveaspark_client/index.html");
});

app.use(express.static(path.join(__dirname, "dist/giveaspark_client")));
//test commit

