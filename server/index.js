const cors = require("cors");
const fs = require("fs");

const express = require("express");
const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/", (_req, res) => {
    res.send("Hello World!");
});

app.get("/api", async (_req, res) => {
    const testResponse = await fs.readFileSync("server/response.json", "utf8");
    res.send(testResponse);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
