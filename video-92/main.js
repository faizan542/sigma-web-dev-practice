const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  const siteName = "My Site";
  let searchText = "Search Now!";
  res.render("index", { siteName: siteName, searchText: searchText });
})

app.get('/blog/:slug', (req, res) => {
  const blogTitle = "Web Development";
  const blogContent = "Web development has good scope";
  res.render("templates/index.html", { blogTitle: blogTitle, blogContent: blogContent });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})