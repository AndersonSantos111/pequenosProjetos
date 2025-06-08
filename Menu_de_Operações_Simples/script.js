// parImpa
// tabuada
// contar
// positivoNegativo


// Inputs do type(tipo) raido:


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

function ocultarSecao(escolha) {
    const Operacoes = document.getElementsByName('operacoes')
    Operacoes.style.color = 'blue'
    Operacoes.innerHTML = 'ksksk'
    console.log(Operacoes[1])
    for (let c = 0; c <= escolha; c++) {
        if (c == escolha) {
            console.log(Operacoes[c])
                console.log('mostrar' + c)
        } else {
            console.log('ocultar' + c);
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
            c = 4;
        }
    }
    
    
    montar(escolha);
    
}