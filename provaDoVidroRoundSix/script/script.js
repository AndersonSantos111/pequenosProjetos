// VARIAVEIS DE CONTROLE:
// DOM
const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')
const content2Copy = content2

// Playes
let Jogador 
let escolhaDoJogador = 0
let adversarios = []

// Rodadas
let rodada = 0
const contentRodada = document.getElementById('contentRodada')

// Pegando os child do content2
const h2 = document.querySelector('#textoH2')
const h3 = document.querySelector('#textoH3')
const bt1 = document.getElementsByTagName('button')[1]
const bt2 = document.getElementsByTagName('button')[2]

// RESETE O GAME:
function reseteGame() {
    rodada = 0
    content1.style.display = 'block' // esconde a primeira div chamada de content1 onde tem a apresentação com o botão jogar.
    content2.style.display = 'none' // mostra a segunda div chamada de content2 onde rola o jogo.

    // Acrescentando todos os componentes do jogo novamente
    content2.innerHTML = ''
    content2.appendChild(contentRodada)
    content2.appendChild(h2)
    content2.appendChild(h3)
    content2.appendChild(bt1)
    content2.appendChild(bt2)

    // Reescrevendo span contentRodada
    contentRodada.innerHTML = 'Rodada: 0/5'
}

//  CRIANDO ELEMENTO DO BOTAO:
function botaoJogarNovamente() {
    const butao = document.createElement('button') // criando elemento do botao.

    // configurando o botao:
    butao.setAttribute('class', 'botao')
    butao.addEventListener('click', reseteGame)
    // estilo do botao:
    butao.style.height = 'auto'
    butao.style.color = '#fff'
    butao.style.padding = '4px'
    butao.style.marginTop = '20px'

    // texto:
    butao.innerHTML = 'Jogar Novamente'
    
    content2.appendChild(butao) // aqui acrescenta/adiciona o botao a div.
}

// GAME:
function jogo() {
    
    

    
    let vidroQuebra = Math.floor(Math.random() * 2) + 1 // vai gerar um numero aleatorio ou seja um vidro vai quebrar de forma aleatoria seja o vidro 1 ou o 2.

    if (escolhaDoJogador == vidroQuebra) { // checa se a escolha do jogador e o mesmo vidro que vai quebrar.
        encerrarJogo('derrota')
    } else if (rodada >= 5) { // checa se ja deu o numero de rodadas certo.
        encerrarJogo('vitoria')
    } else {
        rodada += 1
        contentRodada.innerHTML = `Rodada: ${rodada}/5` // mostra a rodada que o jogador esta.
    }
}

function botao1() {
    escolhaDoJogador = 1 // quando o jogador escolher o vidro 1.
    jogo()
}

function botao2() {
    escolhaDoJogador = 2 // quando o jogador escolher o vidro 2.
    jogo()
}



function Jogar() {
    content1.style.display = 'none' // esconde a primeira div chamada de content1 onde tem a apresentação com o botão jogar.
    content2.style.display = 'block' // mostra a segunda div chamada de content2 onde rola o jogo.
}

function encerrarJogo(win) { // essa funcao encerra o jogo quando der cinco rodadas ou o jogador perder.
    // Ve se o jogador perdeu ou ganhou.
    if (win == 'derrota') {
        content2.innerHTML = `<h2>O vidro que escolheu quebrou! Você perdeu.</h2>`
        content2.style.margin = '10px 0px '
    } else if (win == 'vitoria') {
        content2.innerHTML = `<h2> Parabéns! você venceu.</h2>`
    }

    
    botaoJogarNovamente()
}