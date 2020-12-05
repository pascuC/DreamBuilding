const express = require("express");
const bodyParser = require('body-parser')
const mongoose  = require("mongoose");
const path = require('path');
const ejsMate = require('ejs-mate');
const { reviewSchema } = require('./schemas.js');
const ExpressError = require('./ExpressError');
const Review = require('./models/review');
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


app.engine('ejs', ejsMate);
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.urlencoded({ extended: true }));

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

app.get('/', async (req, res) =>{
    const reviews = await Review.find({}).populate();
    try{
        res.render('index', { reviews });
    }
    catch(e) {
        res.status(404).send();
    }
});

app.post('/review', validateReview, async(req, res, next)=>{
    const review = new Review(req.body.review);
    try{
        await review.save();
        res.redirect(`/`);
    } catch (e) {
        res.status(404).send(e);
    }
});


app.listen(3000, () =>{
    console.log("Server is listening on port 3000");
});