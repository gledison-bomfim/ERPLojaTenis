function clickRow(row){
    $("#codigoInterno").val(row.cells[0].firstChild.nodeValue);
    $("#codigoExterno").val(row.cells[1].firstChild.nodeValue);
    $("#descricao").val(row.cells[2].firstChild.nodeValue);
    $("#barras").val(row.cells[3].firstChild.nodeValue);
    $("#unidade").val(row.cells[4].firstChild.nodeValue);
    $("#estoque").val(row.cells[5].firstChild.nodeValue);
}

function limparCamposProdutos(){
    $("#codigoInterno").val("");
    $("#codigoExterno").val("");
    $("#descricao").val("");
    $("#barras").val("");
    $("#unidade").val("");
    $("#estoque").val("");

}

function selectTodosProdutos() {
    var jqxhr = $.post("http://localhost:3000/produtos", function (json) {
        var ProdutosJSON = new Array();
        ProdutosJSON = JSON.parse(json); 

        ProdutosJSON.forEach(function (row) {
            var linha = "";
            linha += "<tr onclick='clickRow(this)'>";
            linha += "<th scope='row' class='id' >" + row.id + "</th>";
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
