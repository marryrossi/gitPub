// Dependencies
const express = require("express");
const app = express();
const port = 3000;
const drinks = require("./models/drinks.js");
const food = require("./models/food.js");

//Routes
// Greetings
app.get("/", (req, res) => {
    res.send("Welcome to the gitPub App!")
});

// Drink names
app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks,
    });
});

// Drink ID
app.get("/drinks/:id", (req, res) => { 
    res.render("drinks_show.ejs", {
        drinkInfo: drinks[req.params.id]
    });
});

// Food names
app.get("/foods", (req, res) => {
    res.render("food_index.ejs", {
        allFoods: food,
    });
});

// Food ID
app.get("/foods/:id", (req, res) => {
    res.render("food_show.ejs", { 
        foodInfo: food[req.params.id]
    });
});

// Listening
app.listen(port, ()=>{
    console.log(`listening on port`, port)
});