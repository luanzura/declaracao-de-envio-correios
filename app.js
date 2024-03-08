function gerarDeclaracao() {
    const camposObrigatorios = ['nome', 'rua', 'numero', 'cidade', 'uf', 'cep', 'conteudo', 'quantidade', 'valor', 'peso'];
    let todosPreenchidos = true;

    // Verificar se todos os campos obrigatórios estão preenchidos
    camposObrigatorios.forEach(function(campo) {
        if (document.getElementById(campo).value === "") {
            todosPreenchidos = false;
            return;
        }
    });

    if (!todosPreenchidos) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return; // Não continue se algum campo estiver vazio
    }

    // Preencher os dados na declaração
    document.getElementById('nome_destinatario').innerHTML = document.getElementById('nome').value;
    document.getElementById('rua_destinatario').innerHTML = document.getElementById('rua').value;
    document.getElementById('numero_destinatario').innerHTML = document.getElementById('numero').value;
    document.getElementById('cidade_destinatario').innerHTML = document.getElementById('cidade').value;
    document.getElementById('uf_destinatario').innerHTML = document.getElementById('uf').value;
    document.getElementById('cep_destinatario').innerHTML = document.getElementById('cep').value;
    document.getElementById('conteudo_destinatario').innerHTML = document.getElementById('conteudo').value;
    document.getElementById('quantidade_destinatario').innerHTML = document.getElementById('quantidade').value;
    document.getElementById('valor_destinatario').innerHTML = document.getElementById('valor').value;
    document.getElementById('peso_destinatario').innerHTML = document.getElementById('peso').value;
    document.getElementById('data').innerHTML = dataAtual();
    
    // Imprimir apenas se todos os campos obrigatórios estiverem preenchidos
    window.print();
} 

function dataAtual() {
    let data = new Date();
    return data.getDate() +  "/"  + (data.getMonth() + 1) +  "/"  + data.getFullYear();
}
