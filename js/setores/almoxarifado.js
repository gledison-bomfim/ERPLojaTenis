function selectTodosProdutos() {
    var jqxhr = $.post("http://localhost:3000/produtos", function (json) {
        var ProdutosJSON = new Array();
        ProdutosJSON = JSON.parse(json); 

        ProdutosJSON.forEach(function (row) {
            var linha = "";
            linha += "<tr>";
            linha += "<th scope='row'>" + row.id + "</th>";
            linha += "<td>" + row.codigo + "</td>";
            linha += "<td>" + row.descricao + "</td>";
            linha += "<td>" + row.codBarras + "</td>";
            linha += "<td>" + row.unidade + "</td>";
            linha += "<td>" + row.estoque + "</td>";
            linha += "</tr>";

            $("#tbProdutos tr:last").after(linha);
        });

    })
        .fail(function () {
            alert("Erro ao pesquisar produtos");
        })

}