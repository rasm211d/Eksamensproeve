var express = require('express');
var router = express.Router();
var Ship = require('../models/ship');

const ship = new Ship;

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('ships');
});

router.post('/', function (req, res) {
    ship.id = 2;
    ship.navn = req.body.navn;
    
    res.redirect('ships')

})

module.exports = router;
