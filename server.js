const express = require("express");
const app = express();
const port = 4200;
const path = require("path");
// const cors = require('cors')P
// app.use(cors());
console.log(port);
app.listen(port);

app.use(express.static("dist/giveaspark-client"));

app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/dist/giveaspark-client/index.html");
});

app.use(express.static(path.join(__dirname, "dist/giveaspark-client")));
//test commit

