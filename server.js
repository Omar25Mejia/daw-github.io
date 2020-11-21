var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var sugerencia =[

];

var currentId = 1;

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/sugerencia',function(req,res){
    res.send({sugerencia: sugerencia});
});

app.post('/sugerencia',function(req,res){
    let nom = req.body.nombre;
    let app = req.body.apellido;
    let cor = req.body.correo;
    let tel = req.body.telefono;
    let sug = req.body.sugerencia;

    currentId ++;

    sugerencia.push({
        id: currentId,
        nombre: nom,
        apellido: app,
        correo: cor,
        telefono: tel,
        sugerencia: sug
    });

    res.send('Sugerencias Actualizadas');

});

app.delete('/sugerencia',function(req,res){
    let nom = req.body.nombre;
    let app = req.body.apellido;
    let cor = req.body.correo;
    let tel = req.body.telefono;
    let sug = req.body.sugerencia;

    currentId --;

    sugerencia.delete({
        id: currentId,
        nombre: nom,
        apellido: app,
        correo: cor,
        telefono: tel,
        sugerencia: sug
    });

    res.send('Sugerencias Actualizadas');
});

app.listen(PORT, function(){
    console.log('Server listening on ' + PORT);
});

