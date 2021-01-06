var express = require('express');
var router = express.Router();
var Ship = require('../models/ship');
var { cph } = require('../api/http');



/* GET users listing. */
router.get('/', async function (req, res, next) {
    ships = await Ship.find({});
    console.log(ships);
    res.render('ships', { ship: ships });
});

router.get('/delete/:id', async function (req, res) {
    await Ship.deleteOne({ _id: req.params.id });
    res.redirect('/ships');
})

router.get('/api', async function (req, res, next) {
    ships = await Ship.find({});
    res.json(ships);
})

router.get('/api/:name', async function (req, res, next) {
    console.log(req.params.name);
    ships = await Ship.find({ name: req.params.name }).exec();
    res.json(ships);
})

router.post('/', async function (req, res) {
    var ship = new Ship;

    ship.id = 2;
    ship.navn = req.body.navn;
    ship.hjemhavn = req.body.hjemhavn;
    ship.kaldesignal = req.body.kaldesignal;
    ship.MMSInummer = req.body.MMSInummer;
    ship.Anvendelse = req.body.anvendelse;
    ship.BRT_BT = req.body.BRT_BT;
    ship.Laengde = req.body.laengde;
    ship.MaksPersoner = req.body.makspersoner;

    console.log(ship);

    await ship.save().then(() => console.log("Saved ship"));
    res.redirect('ships');






});

module.exports = router;
