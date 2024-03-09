const express = require('express')
const router = express.Router()

router.post('/', function(req, res){
    res.json('chegou a sua resposta!')
})
router.post('/hello', function(req, res){
    res.json('oi meu chapa')
})
router.post('/nome', function(req, res){
    res.json('pedin')
})


module.exports = router