const express = require('express')
const router = express.Router()

router.post('/', function(req, res){
    res.json('chegou a sua resposta!')
})
router.get('/hello', function(req, res){
    res.json('oi meu chapaaa')
})
router.post('/nome', function(req, res){
    res.json('pedin')
})


module.exports = router