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

function parImpar() {
    alert('parimpa')
}

function tabuada() {
    alert('TABUADA')
}

function contador() {
    alert('contador')
}

function positivoNegativo() {
    alert('positivoNegativo')
}


/*
    com um laço de repetição eu vou navegar entre as seções e ver qual será a única seção a ser mostrada de acordo com o parâmetro escolha
*/

function adicionarElementos(escolha) {
    const div = document.createElement('div')
    div.style.background = 'blue'
    div.innerHTML = 'pegando'
    div.style.padding = '5px'

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'caixaDeTexto')
    input.setAttribute('placeholder', 'Digite um número')

    const buttonSair = document.createElement('button')
    buttonSair.innerText = 'Comfirmar'
    buttonSair.setAttribute('onclick', 'montar()')
    buttonSair.addEventListener('click', () => montar(escolha))
   
    
    return {input, div, buttonSair};
}

function ocultarEcriarElemnto (escolha) {
    const menuOpcao = document.getElementById('menuOpcoes');
    const Operacoes = document.getElementsByClassName('operacoes');

    console.clear()
    menuOpcao.style.display = 'none'

    for (let c = 0; c <= Operacoes.length; c++) {
        if (c === escolha) {


            console.log(`mostrar ${c}:`);
            console.log(Operacoes[c]);


            Operacoes[c].style.display = 'block';
            
            Operacoes[c].innerHTML += `Digite um número: <br>`
            const {input, div, buttonSair} = adicionarElementos(escolha)
            Operacoes[c].appendChild(input);
            Operacoes[c].appendChild(div);
            Operacoes[c].appendChild(buttonSair);
        

        } else if (c < 4) {

            console.log(`ocultar ${c}:`);

            Operacoes[c].style.display = 'none';
        }
    }
}





function montar(escolha) {

    alert('montar')
    console.log('motar function funcionado')

    switch (escolha) {
        case 0:
            parImpar()
            break
        case 1:
            tabuada()
            break
        case 2:
            contador()
            break
        case 3:
            positivoNegativo()
            break
    }
}

/*
    após apertar o botão confirmar ele vai chamar a função montar enviando um parámetro de acordo com sua marção na tela de escolha, a função montar vai sempre montar nossas seções de acordo com a nossa escolha
*/

function confirmar() {
    const opcao = document.getElementsByName('opcao')
    let escolha = 0;
    
    for (let c = 0; c < opcao.length; c++) {
        if (opcao[c].checked) {
            escolha = c;
            c = 3;
        }
    }
    
    
    ocultarEcriarElemnto(escolha);
    
}