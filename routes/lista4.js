const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

    const numeros = req.body.notas
    let soma = 0
    for (let n of numeros) {
        soma += n
    }
    const media = soma / numeros.length
    res.json({ media })
})

router.post('/ex2', function (req, res) {

    let numeros = []

    for (let i = 1; i < 101; i++) {
        numeros.push(i)
    }

    res.json({ numeros })
})

router.post('/ex3', function (req, res) {

    let numeros = []

    for (let i = 1; i < 11; i++) {
        numeros.push(i)
    }

    const mensagem = (`${numeros.join(', ')}`)

    res.json({ mensagem })
})

router.post('/ex4', function (req, res) {
    
    let numeros = []

    for (let i = 1; i < 11; i++) {
        numeros.push(i);
    }

    numeros = numeros.sort((a, b) => b - a)

    const mensagem = `${numeros.join(', ')}`

    res.json({ mensagem })
})

router.post('/ex5', function (req, res) {

    let numeros = []

    let numeroAtual = 101

    for (let i = 0; i < 10; i++) {
        numeros.push(numeroAtual)
        numeroAtual++
    }

    const mensagem = numeros.join(', ')

    res.json({ mensagem })
})

router.post('/ex6', function (req, res) {
    
    const numeros = req.body.numeros

    let soma = 0

    for (let numero of numeros) {
        soma += numero
    }

    res.json({ soma })
})

router.post('/ex7', function (req, res) {

    const N = req.body.N

    let numerosPares = []

    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i)
        }
    }

    res.json({ numerosPares })
})

router.post('/ex8', function (req, res) {

    const valores = req.body.valores

    let contadorNegativos = 0

    for (let valor of valores) {
        if (valor < 0) {
            contadorNegativos++
        }
    }

    res.json({ contadorNegativos })
})

router.post('/ex9', function (req, res) {

    const valores = req.body.valores

    let valoresNegativos = []

    for (let valor of valores) {
        if (valor < 0) {
            valoresNegativos.push(valor)
        }
    }

    res.json({ valoresNegativos })
})

router.post('/ex10', function (req, res) {

    const valores = req.body.valores

    let dentroIntervalo = 0
    let foraIntervalo = 0

    for (let valor of valores) {
        if (valor >= 10 && valor <= 20) {
            dentroIntervalo++
        } else {
            foraIntervalo++
        }
    }

    res.json({ dentroIntervalo, foraIntervalo })
})

router.post('/ex11', function (req, res) {

    const valores = req.body.valores

    let soma = 0

    for (let valor of valores) {
        soma += valor
    }

    const media = soma / valores.length

    res.json({ media })
})

router.post('/ex12', function (req, res) {

    const valores = req.body.valores

    if (!valores || valores.length === 0) {
        return res.status(400).json({ error: 'Nenhum valor apresentado' })
    }

    let soma = 0

    for (let valor of valores) {
        soma += valor
    }

    const media = soma / valores.length

    res.json({ media })
})

router.post('/ex13', function (req, res) {

    const N = req.body.N

    if (isNaN(N) || N <= 0) {
        return res.status(400).json({ error: 'Não deve ser um número inteiro positivo.' })
    }

    let triplos = []

    for (let i = 0; i < N; i++) {
        const numero = req.body['numero' + (i + 1)]

        if (isNaN(numero)) {
            return res.status(400).json({ error: 'Os números devem ser válidos.' })
        }

        triplos.push(numero * 3)
    }

    res.json({ triplos })
})

router.post('/ex14', function (req, res) {

    let numeros = []

    if (!req.body || !req.body.numeros || req.body.numeros.length !== 30) {
        return res.status(400).json({ error: 'Você deve fornecer 30 número' })
    }

    for (let i = 0; i < 30; i++) {
        const numero = req.body.numeros[i]

        if (isNaN(numero) || numero <= 0) {
            return res.status(400).json({ error: 'Todos os números devem ser positivos' })
        }

        numeros.push(numero * 2)
    }

    res.json({ numeros })
})

router.post('/ex15', function (req, res) {

    const numeros = req.body.numeros

    let soma = 0

    for (let numero of numeros) {
        if (numero < 40) {
            soma += numero
        }
    }

    res.json({ soma })
})

router.post('/ex16', function (req, res) {

    const totalMercadorias = req.body.totalMercadorias
    const valoresMercadorias = req.body.valoresMercadorias

    if (!totalMercadorias || !valoresMercadorias || valoresMercadorias.length !== totalMercadorias) {
        return res.status(400).json({ error: 'Forneça o número total de mercadorias e os valores de cada uma' })
    }

    let valorTotal = 0
    for (let valor of valoresMercadorias) {
        valorTotal += valor
    }

    const mediaValor = valorTotal / totalMercadorias

    res.json({ valorTotal, mediaValor })
})

router.post('/ex17', function (req, res) {

    const numeros = req.body.numeros

    if (!numeros || numeros.length === 0) {
        return res.status(400).json({ error: 'Coloque pelo menos um número' });
    }

    let soma = 0

    for (let numero of numeros) {
        if (numero < 40) {
            soma += numero
        }
    }

    res.json({ soma })
})

router.post('/ex18', function (req, res) {

    const valores = req.body.valores

    if (!valores || valores.length !== 30) {
        return res.status(400).json({ error: 'Digite 30 valores inteiros.' })
    }

    let maiorValor = valores[0]
    let menorValor = valores[0]
    let soma = 0

    for (let valor of valores) {
        if (valor > maiorValor) {
            maiorValor = valor
        }
        if (valor < menorValor) {
            menorValor = valor
        }
        soma += valor
    }

    const media = soma / 30

    res.json({ maiorValor, menorValor, media })
})

router.post('/ex19', function (req, res) {
    const alunos = req.body.alunos

    if (!alunos || alunos.length === 0) {
        return res.status(400).json({ error: 'Forneça os dados dos alunos.' })
    }

    let alunosPorCurso = {
        '1': 0,
        '2': 0, 
        '3': 0 
    }

    let alunosEntre20e25 = {
        '1': 0,
        '2': 0,
        '3': 0
    }

    let totalIdadePorCurso = {
        '1': 0,
        '2': 0,
        '3': 0
    }

    let quantidadePorCurso = {
        '1': 0,
        '2': 0,
        '3': 0
    }

    for (let aluno of alunos) {
        const curso = aluno.curso
        const idade = aluno.idade

        alunosPorCurso[curso]++

        if (idade >= 20 && idade <= 25) {
            alunosEntre20e25[curso]++
        }

        totalIdadePorCurso[curso] += idade
        quantidadePorCurso[curso]++;
    }

    let menorMediaIdade = Infinity
    let cursoComMenorMediaIdade = ''
    for (let curso in totalIdadePorCurso) {
        if (quantidadePorCurso[curso] > 0) {
            const mediaIdade = totalIdadePorCurso[curso] / quantidadePorCurso[curso]
            if (mediaIdade < menorMediaIdade) {
                menorMediaIdade = mediaIdade
                cursoComMenorMediaIdade = curso
            }
        }
    }

    res.json({alunosPorCurso, alunosEntre20e25, cursoComMenorMediaIdade})
})

router.post('/ex20', function (req, res) {
    let tabuada = ''

    for (let i = 1; i <= 10; i++) {
        tabuada += `Tabuada do ${i}:\n`
        for (let j = 1; j <= 10; j++) {
            tabuada += `${i} x ${j} = ${i * j}\n`
        }
        tabuada += '\n'
    }

    res.send(tabuada)
})

router.post('/ex21', function (req, res) {

    const espectadores = req.body.espectadores


    if (!espectadores || espectadores.length === 0) {
        return res.status(400).json({ error: 'Fornrça os dados dos espectadores.' })
    }

    let quantidadeNota10 = 0
    let somaIdades = 0
    let totalEspectadores = espectadores.length
    let quantidadeNota5ouMenos = 0
    let nomePessoaMaisVelha = ''
    let maiorIdade = -Infinity
    let idades = []

    for (let espectador of espectadores) {
        const idade = espectador.idade
        const nota = espectador.nota

        if (nota === 10) {
            quantidadeNota10++
        }

        somaIdades += idade
        idades.push(idade)

        if (nota <= 5) {
            quantidadeNota5ouMenos++
        }

        if (idade > maiorIdade) {
            maiorIdade = idade
            nomePessoaMaisVelha = espectador.nome
        }
    }

    const mediaIdade = somaIdades / totalEspectadores

    const percentagemNota5ouMenos = (quantidadeNota5ouMenos / totalEspectadores) * 100

    res.json({quantidadeNota10, mediaIdade, percentagemNota5ouMenos, nomePessoaMaisVelha})
})

router.post('/ex22', function (req, res) {

    const produtos = req.body.produtos

    if (!produtos || produtos.length !== 15) {
        return res.status(400).json({ error: 'Fornrça os dados de 15 produtos.' })
    }

    let maiorPreco = -Infinity
    let somaPrecos = 0

    for (let produto of produtos) {
        const preco = produto.preco

        if (preco > maiorPreco) {
            maiorPreco = preco
        }

        somaPrecos += preco
    }

    const mediaPrecos = somaPrecos / 15

    res.json({ maiorPreco, mediaPrecos })
})

module.exports = router