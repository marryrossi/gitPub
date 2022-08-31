const express = require("express");
const drinks = require("./models/drinks.js")

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("Welcome to the Gitpub App!")
});

app.get("/drinks/", (req, res)=>{
    res.send(drinks)
});

// app.get("/drinks/:indexOfDrinksArray", (req, res)=>{
//     res.render("")
// })

app.listen(port, ()=>{
    console.log(`listening on port`, port)
});

