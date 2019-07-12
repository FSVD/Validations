var errorHandlingController = require('./errors.controller');

function http() {
    this.configure = function(app) {

        app.post('/assert_V1/', function(req, res){
            errorHandlingController.sumValues(Number(req.body.val_1), Number(req.body.val_2), res);
            // errorHandlingController.sumValues(req.body.val_1, req.body.val_2, res); // Simulates error
        })

        app.post('/assert_V2/', function(req, res){
            errorHandlingController.connect(req.body.ip4addr, Number(req.body.tcpPort), Number(req.body.timeout), res);
        })

        app.post('/assert_V3/', function(req, res){
            errorHandlingController.sumAndRest(Number(req.body.val_1), Number(req.body.val_2), Number(req.body.val_3), res);
        })
    }
}

module.exports = new http();
