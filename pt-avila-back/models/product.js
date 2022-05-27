const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    generalPT: {
        type: String,
        required: true
    },
    specificPT: [{ type: String }],
    productCondition: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    publicationDate: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        require: true
    }
});

module.exports = model("Product", productSchema);