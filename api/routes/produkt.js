const db = require('../config/sql').connect();


module.exports = function (app) {
    app.get('/produkt', function (req, res) {
        db.query('select * from produkt order by id desc limit 3', function (err, data) {
            if (err) {
                console.log(err);
            }
            else{
            res.setHeader('Access-Control-Allow-Origin', "*");
            res.send(data);
            }
        })
    })
}
