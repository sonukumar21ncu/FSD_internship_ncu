const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    Brand: String,
    carModel: String,
    engineSize: Number,
    transmission: String
})

module.exports = mongoose.model('cars', CarSchema);

