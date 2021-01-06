const request = require('request');

function cph() {
    request('https://vejr.eu/api.php?location=Copenhagen&degree=C', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body.url);
        console.log(body.explanation);
    });
}

module.exports = {cph}
