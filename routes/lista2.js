const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

    const { quantidade_minima, quantidade_maxima } = req.body

    const estoque_Medio = (Number(quantidade_minima) + Number(quantidade_maxima)) / 2

    res.json({ estoque_Medio })
});

router.post('/ex2', function (req, res) {

    const { nomeDoFuncionario, horasTrabalhadas, valor_hora, filhos } = req.body

    const salario = horasTrabalhadas * valor_hora

    const bonificacao = 0.03 * salario * filhos

    const salarioFinal = salario + bonificacao

    res.json({ nomeDoFuncionario, salario, bonificacao, salarioFinal })
})

router.post('/ex3', function(req, res){

    const {anos, meses, dias} = req.body

    const anosEmDias = Number(anos) * 365

    const mesesEmDias = Number(meses) * 30

    const diasCalculados = Number(dias) + anosEmDias + mesesEmDias

    res.json({diasCalculados})
});

router.post('/ex4', function(req, res){
    const { idade } = req.body

    const diasTotais = Number(idade)

    const anos = Math.floor(diasTotais / 365)

    const meses = Math.floor((diasTotais % 365) / 30)

    const dias = (diasTotais % 365) % 30

    res.json({ anos, meses, dias })
});

router.post('/ex5', function(req, res){

    const {n1, n2, n3} = req.body

    const media = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10

    res.json({media})
});

router.post('/ex6', function(req, res){

    const {duracaoSeg} = req.body

    const moduloSeg = Number(duracaoSeg) % 3600

    const hora = Math.floor(Number(duracaoSeg) / 3600)

    const minutos = Math.floor(moduloSeg / 60)

    const segundos = moduloSeg % 60

    res.json({hora, minutos, segundos})
});

router.post('/ex7', function(req, res){

    const {nome, salarioFixo, porcentagem, valorEmVendas} = req.body

    const salarioFinal = Number(salarioFixo) + ((Number(porcentagem) * Number(valorEmVendas)) / 100)

    res.json({'nome:': nome, 'Sálario Final:': salarioFinal})
});

router.post('/ex8', function(req, res){

    const {nome, distancia, tempo} = req.body

    const velocidadeM = Number(distancia) / Number(tempo)

    const resposta = 'A velocidade média do ' + nome + ' foi de ' + velocidadeM + 'km/h'

    res.json({resposta})
});

router.post('/ex9', function(req, res){
    
    const {salario} = req.body

    const msg = 'Almento não aprovado!'

    Number(salario) > 1000 ? res.json({msg}) : res.json({ salarioAtualizado: Number(salario) + (Number(salario) * 0,30) })
});


module.exports = router