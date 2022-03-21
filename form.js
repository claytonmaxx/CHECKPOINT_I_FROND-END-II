console.log("Olá mundo, estou funcionando")

let form=document.querySelector('.form');
let reqCard=document.querySelector('#container-cards');

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





