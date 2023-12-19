const fs = require("fs");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_req, res) => {
    const testResponse = fs.readFileSync("server/response.json");
    res.send(JSON.parse(testResponse));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
