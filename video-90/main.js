const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const blog = require("./routes/blog");

app.use('/blog', blog);

// Middleware 1
app.use((req, res, next) => {
    console.log(req.headers);
    req.faizan = 45
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log(`middleware 2`)
    next()
})


app.get('/', (req, res) => {
    res.send('Hello World!' + req.faizan)
})

app.get('/about', (req, res) => {
    res.send('Hello About')
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})