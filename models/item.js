const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemType: {
      type: String,
    },  
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      min: 1,
      max: 5,
    },
    price: {
      type: Number,
      required: true,
      min: 5,
      max: 7,
  },
});

module.exports = mongoose.model("Item", itemSchema);

