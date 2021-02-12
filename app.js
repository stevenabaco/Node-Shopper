const http = require("http");

const express = require("express");
const app = express();

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Sorry, we could not load this page!</h1>')
})

app.listen(3000);
