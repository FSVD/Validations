var errorHandlingController = require('../controllers/errorHandling');

function http() {
    this.configure = function(app) {

        app.post('/assert_V1/', function(req, res){
            errorHandlingController.sumValues(req.body.val_1, req.body.val_2, res);
        })

        app.post('/assert_V2/', function(req, res){
            errorHandlingController.connect(req.body.ip4addr, req.body.tcpPort, req.body.timeout, res);
        })

        app.post('/assert_V3/', function(req, res){
            errorHandlingController.sumAndRest(req.body.val_1, req.body.val_2, req.body.val_3, res);
        })
    }
}

module.exports = new http();
