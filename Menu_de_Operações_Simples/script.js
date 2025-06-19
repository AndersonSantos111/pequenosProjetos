// parImpa
// tabuada
// contar
// positivoNegativo

// Sections:
function parImpar(input, div) {10
    let valor = Number(input.value);
    
    div.innerText = '';
    if (validacaoDados(input, div)) {
        if (valor % 2 == 0) {
            div.innerHTML += `${valor} é um número Par`;
        } else {
            div.innerHTML += `${valor} é um número Impar`;
        }
    }  
    
}

function tabuada(input, div) {
    console.log('TABUADA');
    

    let valor = Number(input.value);
    let resultado = 0;

    div.innerText = '';
    if (validacaoDados(input, div)) {
        if (validarNegativos(valor, div) && valor <= 10) {
            for (let c = 1; c <= 10; c++) {
                resultado = valor * c;
                div.innerHTML += `${valor} x ${c} = ${resultado} <br>`;
            }
        } else {
            div.innerText = 'Preencha apenas com números de 1 a 10';
        }
    }
}

function contador(input, div) {
    console.log('contador');

    let valor = Number(input.value);
    
    div.innerText = '';
    if (validacaoDados(input, div)) {
        if (validarNegativos(valor, div)) {
            for (let c = 1; c <= valor; c++) {
            div.innerHTML += `${c}, `;
            }
        }
    }
}

function positivoNegativo(input, div) {
    console.log('positivoNegativo');

    let valor = Number(input.value);
    
    div.innerText = '';
    if (validacaoDados(input, div)) {
        if (valor > 0) {
            div.innerHTML += `${valor} é positivo`;
        } else if (valor < 0) {
            div.innerHTML += `${valor} é negativo`;
        } else {
            div.innerHTML += `Zero`;
        }
    }
}


// VALIDAÇÕES:
function validacaoDados(input, div) {
    if (input.value == '') {
        div.innerText = 'Preencha o campo acima antes de confirmar!!';
        console.log('ERRO: Campo de texto não preenchido!');
        return false;
    } else {
        return true;
    }
}

function validarNegativos(valor, div) {
    if (valor <= 0) {
        div.innerText = 'Preencha apenas com números positivos';
        return false;
    } else {
        return true;
    }
}


// CRIAÇÃO E CONFIGURAÇÃO DE NOVOS ELEMENTOS FILHOS
function criarElementos(escolha) {
    const div = document.createElement('div'); // cria uma div.
    div.setAttribute('id', `bnt${escolha}`);
    div.style.background = 'gray';
    div.innerHTML = '=Resultado=';
    div.style.padding = '5px';

    const input = document.createElement('input'); // cria um input do tipo number.
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'caixaDeTexto');
    input.setAttribute('placeholder', 'Digite um número');
    input.style.width = '120px'

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
    
/* com um laço de repetição eu vou navegar entre as seções e ver qual será a única seção a ser mostrada de acordo com o parâmetro escolha. */

    for (let c = 0; c < Operacoes.length; c++) {

        if (escolha == 'menu') {
            menuOpcao.style.display = 'block';
            Operacoes[c].style.display = 'none';
            Operacoes[c].innerText = '';

        } else if (c === escolha) {
            menuOpcao.style.display = 'none'; // mostra apenas a seção escolhida.

            Operacoes[c].innerHTML += `Digite um número: <br>`;

            const elementos = criarElementos(escolha);
            for (let i = 0; i < elementos.length; i++) {
                Operacoes[c].appendChild(elementos[i]);
            }

            if (escolha == 1) { // esse if seve para limitar apenas os números do input da tabuada
                elementos[0].setAttribute('min', `1`)
                elementos[0].setAttribute('max', `10`)
            } if (escolha == 2) {
                elementos[0].setAttribute('min', `1`)
            }

            Operacoes[c].style.display = 'block';

        } else {
            Operacoes[c].style.display = 'none';
            
        }
    }
}

function montar(escolha) {
    const div = document.getElementById(`bnt${escolha}`);
    const input = document.getElementById('caixaDeTexto');

    switch (escolha) {
        case 0:
            parImpar(input, div);
            break;
        case 1:
            tabuada(input, div);
            break;
        case 2:
            contador(input, div);
            break;
        case 3:
            positivoNegativo(input, div);
            break;
    }
}

/* após apertar o botão confirmar ele vai chamar a função iniciar enviando um parámetro de acordo com sua marção na tela de escolha. */

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