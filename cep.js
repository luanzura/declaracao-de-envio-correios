function buscaCep() {
    let reCep = document.getElementById('re-cep').value;
    if (reCep !== "") {
        let url = "https://viacep.com.br/ws/" + reCep + "/json/";

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function () {
            if (req.status === 200) {
                let endereco = JSON.parse(req.response);
                document.getElementById('re-rua').value = endereco.logradouro;
                document.getElementById('re-cidade').value = endereco.localidade;
                document.getElementById('re-estado').value = endereco.uf;
            }
            else if (req.status === 400) {
                alert("Cep inválido");
            }
            else {
                alert("Erro ao fazer a requisição")
            }
        }
    }

    let deCep = document.getElementById('de-cep').value;
    if (deCep !== "") {
        let url = "https://viacep.com.br/ws/" + deCep + "/json/";

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function () {
            if (req.status === 200) {
                let endereco = JSON.parse(req.response);
                document.getElementById('de-rua').value = endereco.logradouro;
                document.getElementById('de-cidade').value = endereco.localidade;
                document.getElementById('de-estado').value = endereco.uf;
            }
            else if (req.status === 400) {
                alert("Cep inválido");
            }
            else {
                alert("Erro ao fazer a requisição")
            }
        }
    }
}

window.onload = function () {
    let txtReCep = document.getElementById("re-cep");
    txtReCep.addEventListener("input", buscaCep);
    let txtDeCep = document.getElementById("de-cep");
    txtDeCep.addEventListener("input", buscaCep);
}
