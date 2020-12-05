const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema =  new Schema({
    firstName: String,
    lastName: String,
    title: String,
    body: String,
    rating: Number
});

module.exports = mongoose.model("Review", reviewSchema);