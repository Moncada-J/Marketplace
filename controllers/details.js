const Category = require("../models/category");

module.exports = {
    new: newItem,
}

function newItem(req, res) {
    Category.findById(req.params.id, function (err, category) {
        // retrieving all possible fruits 
        fruitsItemsEnums = category.schema.path('items.fruits').enum
        // convert fruits within categories into an array of JUST fruits
        let givenFruits = category.items.map(f => f.fruits);
        
        // add the 
    })

}

