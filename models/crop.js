const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailsSchema = new Schema({
  quantity: {
    type: Number,
    min: 1,
    max: 10,
  },
  price: {
    type: Number,
    required: true,
    min: 5,
    max: 7,
  },
});

const cropSchema = new Schema({
  fruits: {
    type: String,
    // enum: ["Apples", "Bananas", "Mangos", "Oranges", "Pineapple"],
  },
  vegetables: {
    type: String,
    // enum: ["Artichoke", "Broccoli", "Carrots", "Potatoes", "Tomatoes"],
  },
  details: [detailsSchema],
});


module.exports = mongoose.model("Crop", cropSchema);

