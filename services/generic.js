function genericService() {

    this.sumValues = function (val_1, val_2, res) {
        var sum = val_1 + val_2;
        return sum
    }

    this.connect = function (ip4addr, tcpPort, timeout, res) {
        return console.log("connected!")
    }

    this.sumAndRest = function (val_1, val_2, val_3, res) {
        return new Promise((resolve, reject) => {
            resolve(this.sumValues(val_1, val_2, res));
        }).then(result => {
            return result-(val_3);
        }).catch(err => {
            res.status(500).json({error: true, number: err.errno, origin: {module: 'genericService', function: 'sumValues'}, data: {message: err.message}});
        })
    }
}

module.exports = new genericService();