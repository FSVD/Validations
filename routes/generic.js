var genericController = require('../controllers/generic');

function http() {
    this.configure = function(app) {

        app.post('/generic/', function(req, res){
            genericController.sumValues(req.body.val_1, req.body.val_2, res);
        })

        app.post('/generic_V2/', function(req, res){
            genericController.connect(req.body.ip4addr, req.body.tcpPort, req.body.timeout, res);
        })

        app.post('/generic_V3/', function(req, res){
            genericController.sumAndRest(req.body.val_1, req.body.val_2, req.body.val_3, res);
        })
    }
}

module.exports = new http();
