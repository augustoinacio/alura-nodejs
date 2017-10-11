var dbConnection = require ('../infra/connectionFactory');
module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        var connection = dbConnection();
        connection.query('Select * from produtos',function(err,result){
            console.log(result);
            console.log('------------');
            res.render('produtos/lista',{lista:result});
        });

        connection.end();
    });
}