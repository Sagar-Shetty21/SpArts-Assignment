const express = require('express');
const router = express.Router();
const { FeesData } = require('../utils/data');


router.get('/', async (req, res) => {
    res.json({ message: FeesData });
});

module.exports = router;