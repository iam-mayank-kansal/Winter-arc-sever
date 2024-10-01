const express = require("express")
const app = express();
const PORT = 3000;

const { connectionWithDBFunction } = require("./connectionDB");
connectionWithDBFunction();

app.get("/", (req, res) => {
    res.end("Hello");
})
app.listen(PORT, () => { console.log(`Server Running At Port ${PORT}`) });
