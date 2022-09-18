// Dependencies
const express = require("express");
const app = express();
const drinks = require("./models/drinks.js");
const port = 3000;

//Routes
// Greetings
app.get("/", (req, res)=>{
    res.send("Welcome to the gitPub App!")
});

// Drink names
app.get("/drinks", (req, res)=>{
    res.render("drinks_index.ejs", {
        allDrinks: drinks,
    });
});

// Drink ID
app.get("/drinks/:id", (req, res)=>{
    res.render("drinks_show.ejs", {
        drinkInfo: drinks[req.params.id]
    });
});

// Listening
app.listen(port, ()=>{
    console.log(`listening on port`, port)
});