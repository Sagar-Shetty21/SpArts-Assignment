const express = require('express');
const router = express.Router();
const { StudentsData } = require('../utils/data');

router.get('/', async (req, res) => {
    res.json({ message: StudentsData });
});

module.exports = router;