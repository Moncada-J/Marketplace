const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
});

module.exports = mongoose.model("Category", categorySchema);
