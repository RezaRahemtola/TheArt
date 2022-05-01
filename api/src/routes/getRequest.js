const express = require("express");
const router = express.Router();

router.get('/profil', function (req, res) {
    res.send('Hello Profil!');
    res.status(200).json('ok');
});

router.get('/profil/config', function (req, res) {
    res.send('Hello Profil/config!');
    res.status(200).json('ok');
});

router.get('/nft', function (req, res) {
    res.send('Hello nft!');
    res.status(200).json('ok');
});

router.get('/winner', function (req, res) {
    res.send('Hello winner!');
    res.status(200).json('ok');
});

module.exports = router;
