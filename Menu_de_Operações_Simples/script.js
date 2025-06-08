// parImpa
// tabuada
// contar
// positivoNegativo



// Inpust do type(tipo) button(botão):
const btnSair = document.getElementById('btnSair');
const btnConfirmar = document.getElementById('btnConfirmar');

// Sections:
// section_ParImpar
// section_Tabuada
// section_Contar
// section_PositivoNegativo

const section_ParImpar = document.getElementById('section_ParImpar');
const section_Tabuada = document.getElementById('section_Tabuada');
const section_Contar = document.getElementById('section_Contar');
const section_PositivoNegativo = document.getElementById('section_PositivoNegativo');

/*
    com um laço de repetição eu vou navegar entre as seções e ver qual será a única seção a ser mostrada de acordo com o parâmetro escolha
*/

function adicionarElementos(operacoes) {
    const div = document.createElement('div')
    div.style.background = 'blue'
    div.innerHTML = 'pegando'
    div.style.padding = '5px'

    const input = document.createElement('input');
    input.setAttribute('type', 'text');


    
    return input, div;
}

function ocultarSecao(escolha) {
    const menuOpcao = document.getElementById('menuOpcoes');
    const Operacoes = document.getElementsByClassName('operacoes');

    console.clear()
    menuOpcao.style.display = 'none'

    for (let c = 0; c <= Operacoes.length; c++) {
        if (c === escolha) {


            console.log(`mostrar ${c}:`);
            console.log(Operacoes[c]);


            Operacoes[c].style.display = 'block';
            Operacoes[c].appendChild(adicionarElementos(Operacoes[c]));
        } else if (c < 4) {

            console.log(`ocultar ${c}:`);

            Operacoes[c].style.display = 'none';
        }
    }
}





function montar(escolha) {
    ocultarSecao(escolha);
}

/*
    após apertar o botão confirmar ele vai chamar a função montar enviando um parámetro de acordo com sua marção na tela de escolha, a função montar vai sempre montar nossas seções de acordo com a nossa escolha
*/

function confirmar() {
    const opcao = document.getElementsByName('opcao')
    let escolha = 0;

    for (let c = 0; c <= 3; c++) {
        if (opcao[c].checked) {
            alert('funciona');
            escolha = c;
            c = 3;
        }
    }
    
    
    montar(escolha);
    
}