const express = require("express")
const app = express();
const PORT = 3000;

// connection with DB 
const { connectionWithDBFunction } = require("./connectionDB");
connectionWithDBFunction();


// PORT 
app.listen(PORT, () => { console.log(`Server Running At Port ${PORT}`) });
