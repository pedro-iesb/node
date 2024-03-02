
const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('chegou a sua resposta!')
})
app.get('/hello', function(req, res){
    res.send('oi meu chapa')
})
app.get('/nome', function(req, res){
    res.send('pedin')
})
app.listen(3000, function(){
    console.log('servidor de pé na porta 3000')
})