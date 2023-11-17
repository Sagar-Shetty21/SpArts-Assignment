const express = require('express');
const router = express.Router();
const { ScheduleData } = require('../utils/data');


router.get('/', async (req, res) => {
    res.json({ message: ScheduleData });
});

module.exports = router;