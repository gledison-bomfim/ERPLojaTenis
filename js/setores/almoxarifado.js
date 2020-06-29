function selectTodosProdutos() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/produtos", false);
    xhttp.send();

    if (xhttp.response) {
        if (xhttp.response == "Erro") {
            alert("Erro ao pesquisar produtos");
        } else {
            var ProdutosJSON = new Array();
            ProdutosJSON = JSON.parse(xhttp.response);

            ProdutosJSON.forEach(function (row) {
                $("#produtos").append("<th></th>");
              });
        }
    } else {
        alert("Erro ao realizar requisição");
    }
}