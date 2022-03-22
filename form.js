// O console LOG abaixo é apenas para informar que o JS está sendo lido

console.log("Olá mundo, estou funcionando")

// As duas variáveis abaixo são responsáveis pela recepção dos elementos HTML .form (FORMULÁRIO) e a DIV #container-cards 
// (DIV ONDE CARDS SERÃO INSERIDOS VIA TEMPLATE STRING). 
let form=document.querySelector('.form');
let reqCard=document.querySelector('#container-cards');


// Essa variável armazena uma função com template string em modo de interpolação. Essa função será responsável pela criação dos Cards na DIV #container-cards, 
// bem como adicioná-la ao arquivo HTML.
const addCard = function (titulo, descricao, url) {
    const template = `
        <div class="card">
            <img class="img" src="${url}" alt="${titulo}" >
            <p> Titulo: ${titulo}</p>
            <p>Descrição: ${descricao}</p>
        </div>
        
        `;
    reqCard.innerHTML += template;
}


// Através do evento 'ONSUBMIT', assim que o botão é clicado ele executa a função que recebe como parâmetro o próprio evento de SUBMIT;
// Essa função por sua vez requisita todos os valores dos campos do formulário em variáveis para no final da função antes do preventDefault usar...
// esses dados como parametros da função que cria os Cards através do template string;
form.onsubmit = function(event){
    var titulo = document.querySelector('#title').value;
    console.log(titulo);
    var descricao = document.querySelector('#description').value;
    console.log(descricao);
    var url = document.querySelector('#url').value;
    console.log(url);
    addCard(titulo,descricao,url)
    event.preventDefault()
}





