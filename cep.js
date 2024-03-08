function buscaCep() {
    let cep = document.getElementById('cep').value;
    if (cep !== "") {
        let url = "https://viacep.com.br/ws/" + cep + "/json/";

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function () {
            if (req.status === 200) {
                let endereco = JSON.parse(req.response);
                document.getElementById('rua').value = endereco.logradouro;
                document.getElementById('cidade').value = endereco.localidade;
                document.getElementById('uf').value = endereco.uf;
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
    let txtCep = document.getElementById("cep");
    txtCep.addEventListener("input", buscaCep);
}
