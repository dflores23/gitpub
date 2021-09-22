const express = require(`express`);
const app = express();
const port = 3000;
const drinks = require("./models/drinks");
const food = require("./models/food");

// function capitalize(drinks) {
//     const newDrink = {...drinks}
//     newDrink.name = drinks.name.charArt(0).toUpperCase() + drinks.slice(1)
//     return newDrink
// }


app.get(`/`, (req, res)=>{
    res.send("Welcome to the GitPub App");
});

app.get(`/drinks/`, (req, res)=> {
    res.render("drinks_index.ejs", {allDrinks : drinks});
});

app.get(`/food/`, (req, res)=> {
    res.render("food.ejs", {allFood : food});
});

// app.get("/drinks/:indexOfDrinksArray", (req, res) => {
//     res.render("drinks_show.ejs", { drink: drinks[req.params.indexOfDrinksArray], title: "First - Show Page" });
//   });

app.listen(3000, ()=> {
    console.log(`listening to port ${port}`)
});
// console.log(drink)