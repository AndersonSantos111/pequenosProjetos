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
    após apertar o botão confirmar ele vai chamar a função montar enviando um parámetro de acordo com sua marção na tela de escolha, a função montar vai sempre montar nossas seções de acordo com a nossa escolha
*/

function montar(escolha) {
    alert(escolha);
}

function confirmar() {
    const opcao = document.getElementsByName('opcao')
    let escolha = 0;

    for (let c = 0; c <= 3; c++) {
        if (opcao[c].checked) {
            alert('checado');
            escolha = c;
            c = 4;
        }
    }
    
    
    montar(escolha);
    
}