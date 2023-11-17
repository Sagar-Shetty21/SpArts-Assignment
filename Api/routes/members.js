const express = require('express');
const router = express.Router();
const { MembersData } = require('../utils/data');


router.get('/', async (req, res) => {
    res.json({ message: MembersData });
});

module.exports = router;