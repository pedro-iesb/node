const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

    const { salario } = req.body

    let reajuste

    reajuste = salario <= 2000 ? salario * 1.5 : salario * 1.3

    res.json({ reajuste })
})

router.post('/ex2', function (req, res) {

    const { numero1, numero2, numero3 } = req.body

    const n1 = Number(numero1)

    const n2 = Number(numero2)

    const n3 = Number(numero3)

    let maior

    maior = n1 > n2 && n1 > n3 ? n1 : n2 > n3 ? n2 : n3

    res.json({ maiorNumero: maior })
})

router.post('/ex3', function (req, res) {
    const { q_chopp, quantidadeCoberturas, quantidadePessoas } = req.body

    const c_chopp = 4.8 * q_chopp

    const custoPizzaBase = 17

    const custoCobertura = 1.5 * quantidadeCoberturas

    const custoPizza = custoPizzaBase + custoCobertura

    const totalConta = c_chopp + custoPizza

    const taxaServico = totalConta * 0.1

    const totalComTaxa = totalConta + taxaServico

    const valorPorPessoa = totalComTaxa / quantidadePessoas

    res.json({ valorPorPessoa })
})

router.post('/ex4', function (req, res) {

    const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } = req.body

    const valorHoraTrabalhada = salarioMinimo * 0.2

    const salarioMes = valorHoraTrabalhada * horasTrabalhadas

    const valorDependente = dependentes * 32

    const valorHoraExtra = valorHoraTrabalhada * 1.5 * horasExtras

    const salarioBruto = salarioMes + valorDependente + valorHoraExtra

    let imposto = 0

    if (salarioBruto > 2000) { imposto = salarioBruto >= 5000 ? salarioBruto * 0.2 : salarioBruto * 0.1 }

    const salarioLiquido = salarioBruto - imposto

    const gratificacao = salarioLiquido < 3500 ? 1000 : 500

    const salarioReceber = salarioLiquido + gratificacao

    res.json({ salarioBruto, imposto, gratificacao, salarioReceber })
})

router.post('/ex5', function (req, res) {

    const { idAluno, n1, n2, n3, mediaExercicios } = req.body

    const mediaAproveitamento = (n1 + n2 * 2 + n3 * 3 + mediaExercicios) / 7

    let conceito;
    if (mediaAproveitamento >= 9.0) {
        conceito = 'A'
    } else if (mediaAproveitamento >= 7.5) {
        conceito = 'B'
    } else if (mediaAproveitamento >= 6.0) {
        conceito = 'C'
    } else if (mediaAproveitamento >= 4.0) {
        conceito = 'D'
    } else {
        conceito = 'E'
    }

    mensagem = (conceito === 'A' || conceito === 'B' || conceito === 'C') ? 'APROVADO' : 'REPROVADO'

    res.json({ idAluno, n1, n2, n3, mediaExercicios, mediaAproveitamento, conceito, mensagem })
})

router.post('/ex6', function (req, res) {

    const { altura, sexo } = req.body

    let pesoCorreto

    if (sexo.toLowerCase() === 'masculino') {
        pesoCorreto = (72.7 * altura) - 58
    } else if (sexo.toLowerCase() === 'feminino') {
        pesoCorreto = (62.1 * altura) - 44.7
    } else {
        return res.status(400).json({ error: 'sexo inválido, insira o sexo correto, (feminino) ou (masculino).' })
    }

    res.json({ pesoCorreto })
})

router.post('/ex7', function (req, res) {

    const { v1, v2, v3 } = req.body

    const n1 = Number(v1)

    const n2 = Number(v2)

    const n3 = Number(v3)

    let soma

    if (n1 > n2 && n1 > n3) {
        soma = n1 + Math.max(n2, n3)
    } else if (n2 > n1 && n2 > n3) {
        soma = n2 + Math.max(n1, n3)
    } else {
        soma = n3 + Math.max(n1, n2)
    }

    res.json({ soma })
})

router.post('/ex8', function (req, res) {

    const { salarioAtual, codigoCargo } = req.body

    let novoSalario

    let diferenca

    if (codigoCargo != 101 && codigoCargo != 102 && codigoCargo != 103 && codigoCargo != 104) {
        return res.json({ message: 'Código inválido' })
    } else {

        switch (codigoCargo) {
            case 101:
                novoSalario = salarioAtual * 1.05
                break
            case 102:
                novoSalario = salarioAtual * 1.075
                break
            case 103:
                novoSalario = salarioAtual * 1.1
                break
            default:
                novoSalario = salarioAtual * 1.15
        }
    }

    diferenca = novoSalario - salarioAtual

    res.json({
        salarioAntigo: salarioAtual,
        novoSalario,
        diferenca
    })
})

module.exports = router