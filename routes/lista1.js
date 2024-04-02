const express = require('express')
const router = express.Router()
router.post('/ex1', function (req, res) {

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

    const soma = brancos + nulos + validos

    let retorno = {}

    if (soma > total) {

        retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: "A soma dos votos não pode passar o total de eleitores"
        }

        res.status(400).json(retorno)

    } else {

        const percBranco = brancos / total * 100
        const percNulos = nulos / total * 100
        const percValidos = validos / total * 100

        retorno = { percBranco, percNulos, percValidos }

        res.status(200).json(retorno)

        console.log("Brancos: " + percBranco);
        console.log("Nulos: " + percNulos);
        console.log("Válidos: " + percValidos);
    }

    res.json({ resposta: 'lista1 --> ex1' })
})

router.post('/ex2', function (req, res) {

    const { n1, n2, n3, n4 } = req.body

    const numN1 = Number(n1)
    const numN2 = Number(n2)
    const numN3 = Number(n3)
    const numN4 = Number(n4)

    const media = (numN1 + numN2 + numN3 + numN4) / 4

    const mensagem = media >= 7 ? 'Aprovado' : 'Reprovado'

    res.json({ media, mensagem })
})

router.post('/ex3', function (req, res) {

    const salario_A = Number(req.body.salario)

    const reajuste = 0.07

    const n_salario = salario_A * (1 + reajuste)

    retorno = {
        codigo: n_salario,
        mensagem: "Novo salario"
    }

    res.json(retorno)
})

router.post('/ex4', function (req, res) {

    const fabrica = Number(req.body.fabrica)

    const distribuidor = fabrica * 0.28

    const imposto = fabrica * 0.45

    const custoFinal = fabrica + distribuidor + imposto

    const final = {
        CustoFinal: custoFinal
    }
    res.json(final)
})

router.post('/ex5', function (req, res) {

    const { fabrica, percentual_Distribuidor, percentual_Imposto } = req.body

    const custo_Distribuidor = fabrica * Number(percentual_Distribuidor / 100)

    const imposto = fabrica * (Number(percentual_Imposto) / 100)

    const custoFinal = fabrica + custo_Distribuidor + imposto

    const resposta = {
        custoFinal: custoFinal
    }

    res.json(resposta)

})

router.post('/ex6', function (req, res) {

    const { totalDeCarros, valorDoCarro, valorDasVendas, salario } = req.body

    const pagamentoPorCarro = Number(totalDeCarros) * Number(valorDoCarro)

    const pagamentoPorVenda = (Number(valorDasVendas) * 0.05)

    const salarioFinal = Number(salario) + pagamentoPorCarro + pagamentoPorVenda

    const resposta = {
        salarioFinal: salarioFinal
    }

    res.json(resposta)

})

router.post('/ex7', function (req, res) {

    const n1 = Number(req.body.n1)

    const n2 = Number(req.body.n2)

    const soma = (n1 * 0.4) + (n2 * 0.6)

    const media = soma / (0.4 + 0.6)

    const resposta = {
        MediaAluno: media
    }
    res.json(resposta)
})

router.post('/ex8', function (req, res) {

    const { raio, altura } = req.body

    const pi = 3.14

    const volumeDaCaixa = pi * raio ** 2 * altura

    const resposta = {
        Volume: volumeDaCaixa
    }

    res.json(resposta)

})

router.post('/ex9', function (req, res) {
    const { n1, n2 } = req.body

    const soma = Number(n1) + Number(n2)

    const resultado = soma * n1

    const resposta = {
        Resultado: resultado
    }

    res.json(resposta)

})

module.exports = router