const express = require("express");
const  mongoose  = require("mongoose");
const path = require('path');
const app = express();

mongoose.connect('mongodb://localhost:27017/dreambuilding', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () =>{
    console.log("Database connected");
})

app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/', (req, res) =>{
    res.render('index');
});

app.listen(3000, () =>{
    console.log("Server is listening on port 3000");
});