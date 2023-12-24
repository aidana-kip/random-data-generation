const express = require('express');
const { generateData } = require('../utils/data-generator');
const path = require('path');
const { introduceErrors } = require('../utils/error-generator');
const router = express.Router();

router.post('/data-generator', (req, res, next) => {
    let fakeData = generateData(req.body);
    fakeData = introduceErrors(fakeData, req.body.errorCount);
    res.send(fakeData);
});

module.exports = { router };