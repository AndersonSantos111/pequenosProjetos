let rodadas = 5;
let chances = 3;
let numero;
let pontos = 0;

function gerarNumro () {
    let numero = Math.floor(Math.random() * 10) + 1;
    return numero;
}
numero = gerarNumro();
//console.log(numero);

function Rodadas () {
    const divRodada = document.querySelector('#rodada');
    divRodada.innerText = `Rodada: ${rodadas}`;
}

function pontuacao (resul) {
    const spanPontucao = document.querySelector('#pontuacao');
    
    if (resul) {
        switch (chances) {
            case 1:
                pontos += 1;
                break
            case 2:
                pontos += 2;
                break
            case 3:
                pontos += 3;
        }
    }
    spanPontucao.innerText = `Pontos: ${pontos}`;
}

function Chances () {
    const spanChances = document.querySelector('#chances');
    spanChances.innerText = `Chances: ${chances}`;
}

function MaiorMenor (numb) {
    const divDicas = document.querySelector('#dicas');
    
    if (numb > numero) {
        divDicas.innerHTML = `É menor que ${numb}`;
    } else if (numb < numero) {
        divDicas.innerHTML = `É maior que ${numb}`;
    }
}


function verificarAcerto (numero) {
    const inputNumb = document.getElementById('Num');
    let numb = Number(inputNumb.value);
    

    
    if (numb > 0 && numb <= 10) {
        if (chances > 0) {
            if (numb == numero) {
                alert('acertou miseravi!');
                pontuacao(true);
                rodadas--;
                Rodadas();
                chances = 'reinicio';
            } else {
                chances--;
                MaiorMenor(numb);
            }
        }
    } else {
        alert('Digite apenas números de 1 a 10');
    }
}

function confirmar () {
    verificarAcerto(numero);
    
    if (chances == 'reinicio') {
        chances = 3;
        numero = gerarNumro();
        Rodadas();
    }
    
    Chances();

    if (chances == 0) {
        chances = 3;
        rodadas--;
        numero = gerarNumro();
        chances = 3;
        Rodadas();
        document.querySelector('#chances').innerHTML = 'Chances: 3';
        alert('acabou suas chaces será gerado um novo número e uma nova rodada.');
        
    }

    if (rodadas < 1) {
        rodadas = 5;
        Rodadas();
        pontos = 0;
        pontuacao(false);
        alert('As rodadas acabaram. Serão resetadas junto com sua pontuação.');
    }
}