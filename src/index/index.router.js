function http() {
    this.configure = function(app) {
        
        app.get('/', function(req, res){
            res.render('index', { title: 'Error Handling Practice' });
        })
    }
}

module.exports = new http();