// server/index.js

const express = require('express')
const path = require("path")
const app = express()
const PORT = process.env.PORT || 5000;
const dbFuncs = require("dbfuncs")



app.post("/api/database", (req, res) => {
  res.json({message: "Sent Post Successfully"})
});




app.get("/api/database", (req, res) => {
  
  res.json({ message: "Got Data Successfully" });
});



app.use(express.static(path.join(__dirname, '../client/build')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public"));
});

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname,'../client/build/'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})