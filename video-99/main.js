const express = require('express');
const mongoose = require('mongoose');
const Employee = require("./models/Employee")

const app = express();
const port = 3000;
mongoose.connect('mongodb://127.0.0.1:27017/company');


app.set('view engine', 'ejs');

const getRandom = (arr) => {
    let randomNum = Math.floor(Math.random() * (arr.length - 1));
    return arr[randomNum];
}


app.get('/', (req, res) => {
    res.render('index'); // Where index.ejs is your ejs template

})

app.get('/generate', async (req, res) => {
    // Clear the Collection Employee
    await Employee.deleteMany({})
    // Generate Random Data Logic
    let randomNames = ["Muhammad Faizan Mohiuddin", "Muhammad Noman", "Muhammad Ali", "Muhammad Nabeel", "Ghulam Qadir"];
    let randomLang = ["JavaScript", "PHP", "Python", "Java", "C++"];
    let randomCities = ["Karachi", "Hyderabad", "Lahore", "Islamabad", "Faisalabad"];
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 50000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: Math.random() > 0.5 ? true : false
        })
        console.log(e);
    }

    res.render('index');

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});