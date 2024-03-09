const express = require('express')
const router = express.Router()

router.post('/ex2', function(req, res){ 

    res.json({resposta:'lista1 --> ex2'})
})

module.exports = router