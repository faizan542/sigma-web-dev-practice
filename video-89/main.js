const express = require('express');
const blog = require('./routes/blog')
const app = express()
const port = 3000

app.use(express.static("public"));
app.use('/blog', blog)
// app.get('/', (req, res) => {
//     console.log("It's a get request");
//     res.send('Hello World!');
// })

// app.post('/', (req, res) => {
//     console.log("It's a post request");
//     res.send('Hello World Post');
// })

// app.put('/', (req, res) => {
//     console.log("It's a put request");
//     res.send('Hello World Put');
// })

// app.delete('/', (req, res) => {
//     console.log("It's a delete request");
//     res.send('Hello World Delete');
// })

app.get('/', (req, res) => {
    console.log("It's a get request");
    res.send('Hello World!');
}).post('/', (req, res) => {
    console.log("It's a post request");
    res.send('Hello World Post');
}).put('/', (req, res) => {
    console.log("It's a put request");
    res.send('Hello World Put');
}).delete('/', (req, res) => {
    console.log("It's a delete request");
    res.send('Hello World Delete');
}); //This is called Server Chaining Request.

app.get("/index", (req, res) => {
    console.log("It's a Index");
    res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, Names: ["Faizan", "Ali", "Noman", "Soban"], Int: [44, 50, 660] });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})