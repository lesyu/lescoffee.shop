const express = require('express');
const router = express.Router();
const CoffeeBean = require('../models/CoffeeBean');

// 獲取所有咖啡豆
router.get('/', async (req, res) => {
    try {
        const beans = await CoffeeBean.find();
        res.json(beans);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; 