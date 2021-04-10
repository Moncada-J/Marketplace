const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    fruits: {
        type: String,
        enum: ["Apples","Bananas","Mangos", "Oranges", "Pineapple"],
    },
    vegetables: {
        type: String,
        enum: ["Artichoke", "Broccoli", "Carrots", "Potatoes", "Tomatoes"],
    },
    price: {
        type: Number,
        required: true,
        min: 5, 
        max: 7,
    }
});

const categorySchema = new Schema ({
    variety: {
        type: String,
        enum: ["Fruits", "Vegetables"]
    },
    quantity: {
        type: Number,
        min: 0,
        max: 10,
    },
    items: [itemSchema],
});

module.exports = mongoose.model("Category", categorySchema);
