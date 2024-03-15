function gerarDeracao() {
    // Preencher os dados na declaração
    // REMETENTE
    document.getElementById('r-re-nome').innerHTML = document.getElementById('re-nome').value;
    document.getElementById('r-re-rua').innerHTML = document.getElementById('re-rua').value;
    document.getElementById('r-re-numero').innerHTML = document.getElementById('re-numero').value;
    document.getElementById('r-re-cidade').innerHTML = document.getElementById('re-cidade').value;
    document.getElementById('r-re-estado').innerHTML = document.getElementById('re-estado').value;
    document.getElementById('r-re-cep').innerHTML = document.getElementById('re-cep').value;

    // DESTINATARIO
    document.getElementById('r-de-nome').innerHTML = document.getElementById('de-nome').value;
    document.getElementById('r-de-rua').innerHTML = document.getElementById('de-rua').value;
    document.getElementById('r-de-numero').innerHTML = document.getElementById('de-numero').value;
    document.getElementById('r-de-cidade').innerHTML = document.getElementById('de-cidade').value;
    document.getElementById('r-de-estado').innerHTML = document.getElementById('de-estado').value;
    document.getElementById('r-de-cep').innerHTML = document.getElementById('de-cep').value;

    //CONTEUDO
    document.getElementById('r-conteudo').innerHTML = document.getElementById('conteudo').value;
    document.getElementById('r-quantidade').innerHTML = document.getElementById('quantidade').value;
    document.getElementById('r-valor').innerHTML = "R$" + document.getElementById('valor').value;
    document.getElementById('r-peso').innerHTML = document.getElementById('peso').value + "Kg";
    document.getElementById('data').innerHTML = dataAtual();
    
    // Imprimir apenas se todos os campos obrigatórios estiverem preenchidos
    printDeclaracao()
    window.print();
};

function dataAtual() {
    let data = new Date();
    return data.getDate() +  "/"  + (data.getMonth() + 1) +  "/"  + data.getFullYear();
};

function destinatarioIr() {
    const camposObrigatorios = ['re-nome', 're-cep', 're-rua', 're-numero', 're-cidade', 're-estado'];
    let todosPreenchidos = true;

    // Verificar se todos os campos obrigatórios estão preenchidos
    camposObrigatorios.forEach(function(campo) {
        if (document.getElementById(campo).value === "") {
            todosPreenchidos = false;
            return; // Se encontrar um campo vazio, sai do loop
        }
    });

    // Se todos os campos obrigatórios estiverem preenchidos, oculta "remente" e exibe "destinatario"
    if (todosPreenchidos) {
        document.getElementById("remente").classList.add("d-none");
        document.getElementById("destinatario").classList.remove("d-none");
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    };
};

function destinatarioVoltar(){
    document.getElementById("destinatario").classList.add("d-none");
    document.getElementById("remente").classList.remove("d-none");
};

function remetenteIr() {
    const camposObrigatorios = ['de-nome', 'de-cep', 'de-rua', 'de-numero', 'de-cidade', 'de-estado'];
    let todosPreenchidos = true;

    // Verificar se todos os campos obrigatórios estão preenchidos
    camposObrigatorios.forEach(function(campo) {
        if (document.getElementById(campo).value === "") {
            todosPreenchidos = false;
            return; // Se encontrar um campo vazio, sai do loop
        }
    });

    // Se todos os campos obrigatórios estiverem preenchidos, oculta "remente" e exibe "destinatario"
    if (todosPreenchidos) {
        document.getElementById("destinatario").classList.add("d-none");
        document.getElementById("declaracao-conteudo").classList.remove("d-none");
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    };
};

function rementeVoltar(){
    document.getElementById("declaracao-conteudo").classList.add("d-none");
    document.getElementById("destinatario").classList.remove("d-none");
};



function printDeclaracao(){
    document.getElementById("declaracao-conteudo").classList.add("d-none");
    document.getElementById("print").classList.remove("d-none");
}




