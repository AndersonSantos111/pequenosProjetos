// parImpa
// tabuada
// contar
// positivoNegativo

// Sections:
// section_ParImpar
// section_Tabuada
// section_Contar
// section_PositivoNegativo

function parImpar() {
    alert('parimpa');
}

function tabuada() {
    alert('TABUADA');
}

function contador() {
    alert('contador');
}

function positivoNegativo() {
    alert('positivoNegativo');
}




function criarElementos(escolha) {
    const div = document.createElement('div'); // cria uma div.
    div.style.background = 'blue';
    div.innerHTML = 'pegando';
    div.style.padding = '5px';

    const input = document.createElement('input'); // cria um input do tipo number.
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'caixaDeTexto');
    input.setAttribute('placeholder', 'Digite um número');

    const btnComfirmar = document.createElement('button'); // cria um botão confirmar.
    btnComfirmar.innerText = 'Comfirmar';
    btnComfirmar.addEventListener('click', () => montar(escolha));

    const btnVoltar = document.createElement('button'); // cria um botão pra voltar a escolha.
    btnVoltar.innerText = 'Voltar';
    btnVoltar.addEventListener('click', () => ocultarEadicionar('menu'))

   
    
    return [input, div, btnComfirmar, btnVoltar];
}

function ocultarEadicionar (escolha) {
    const menuOpcao = document.getElementById('menuOpcoes');
    const Operacoes = document.getElementsByClassName('operacoes');
    
/*
    com um laço de repetição eu vou navegar entre as seções e ver qual será a única seção a ser mostrada de acordo com o parâmetro escolha.
*/

    for (let c = 0; c < Operacoes.length; c++) {

        if (escolha == 'menu') {
            menuOpcao.style.display = 'block';
            Operacoes[c].style.display = 'none';
            Operacoes[c].innerText = '';

        } else if (c === escolha) {
            menuOpcao.style.display = 'none'; // mostra apenas a seção escolhida.

            Operacoes[c].style.display = 'block';
            Operacoes[c].innerHTML += `Digite um número: <br>`;

            const elementos = criarElementos(escolha);
            for (let i = 0; i < elementos.length; i++) {
                Operacoes[c].appendChild(elementos[i]);
            }

        } else {
            Operacoes[c].style.display = 'none';
            
        }
    }
}






function montar(escolha) {

    alert('montar');
    console.log('montar function funcionado');

    switch (escolha) {
        case 0:
            parImpar();
            break;
        case 1:
            tabuada();
            break;
        case 2:
            contador();
            break;
        case 3:
            positivoNegativo();
            break;
    }
}

/*
    após apertar o botão confirmar ele vai chamar a função iniciar enviando um parámetro de acordo com sua marção na tela de escolha. 
*/

function    iniciar() {
    const opcao = document.getElementsByName('opcao')
    let escolha = 0;
    
    for (let c = 0; c < opcao.length; c++) {
        if (opcao[c].checked) {
            escolha = c;
            c = 3;
        }
    }
    
    ocultarEadicionar(escolha);
}