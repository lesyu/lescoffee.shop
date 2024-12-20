const mongoose = require('mongoose');

const coffeeBeanSchema = new mongoose.Schema({
    origin: {
        type: String,
        required: true
    },
    flavor: {
        type: String,
        required: true
    },
    // 可以添加更多字段如品種、加工方式等
});

module.exports = mongoose.model('CoffeeBean', coffeeBeanSchema); 