const express = require("express");
const router = express.Router();

router.options("/", function (req, res) {
    res.json({
        "origin": "*",
        "methods": "GET,PATCH,POST,DELETE,OPTIONS",
        "contentType": "application/json",
        "preflightContinue": false,
        "optionsSuccessStatus": 200
    });
});

module.exports = router;
