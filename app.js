if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require("express");
const bodyParser = require('body-parser')
const mongoose  = require("mongoose");
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoSanitize = require('express-mongo-sanitize');

const app = express();

const reviews = require('./routes/reviews')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () =>{
    console.log("Database connected");
})

app.engine('ejs', ejsMate);
app.use(express.static(__dirname + '/views'));
app.use(mongoSanitize());
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) 
app.use('/', reviews);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;
app.listen(port, () =>{
    console.log("Server is listening on port " + port);
});