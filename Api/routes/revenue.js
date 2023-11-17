const express = require('express');
const router = express.Router();
const { RevenueData } = require('../utils/data');

router.get('/', async (req, res) => {
    res.json({ message: RevenueData });
});

module.exports = router;