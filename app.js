const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req,res) {
    res.render("index.ejs")
})


app.get("/login", function(req,res) {
    res.render("login.ejs")
})


app.listen(3000, () => {
    console.log('App listening on port 3000')
})






