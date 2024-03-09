const express = require('express')
const router = express.Router()
router.post('/ex1', function(req, res){

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

    const soma = brancos + nulos + validos

    let retorno = {}

    if(soma > total){

        retorno = {
            codigo:'SOMA_ELEITORES',
            mensagem: "A soma dos votos não pode passar o total de eleitores"
        }

        res.status(400).json(retorno)

    } else {

    const percBranco = brancos / total * 100
    const percNulos = nulos / total * 100
    const percValidos = validos / total * 100

    retorno = {percBranco,percNulos,percValidos}

    res.status(200).json(retorno)

    console.log("Brancos: " + percBranco);
    console.log("Nulos: " + percNulos);
    console.log("Válidos: " + percValidos);
    }

    res.json({resposta:'lista1 --> ex1'})
})

module.exports = router