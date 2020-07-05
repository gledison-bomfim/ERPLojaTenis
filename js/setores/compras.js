function selectCompras() {
    var jqxhr = $.post("http://localhost:3000/compras", function (json) {
        var ProdutosJSON = new Array();
        ProdutosJSON = JSON.parse(json); 

        ProdutosJSON.forEach(function (row) {
            var linha = "";
            linha += "<tr>";
            linha += "<th scope='row'>" + row.codigo + "</th>";
            linha += "<td>" + row.produto + "</td>";
            linha += "<td>" + row.qtde + "</td>";
            linha += "</tr>";

            $("#tbCompras tr:last").after(linha);
        });

    })
        .fail(function () {
            alert("Erro ao pesquisar produtos");
        })

}