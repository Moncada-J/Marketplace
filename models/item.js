const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {type: String, required: true},
  rating: {type: Number, min: 1, max: 5, default: 5},
},
{timestamps: true}
)

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
      min: 1,
      max: 99,
  }, 
  reviews:[reviewSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model("Item", itemSchema);

