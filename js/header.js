function almoxarifado(){
    $("#principal").load("html/almoxarifado.html");
    document.getElementById("aba").innerHTML = "Almoxarifado";
}

function compras(){
    $("#principal").load("html/compras.html");
    document.getElementById("aba").innerHTML = "Compras";
}

function financeiro(){
    $("#principal").load("html/financeiro.html");
    document.getElementById("aba").innerHTML = "Financeiro";
}

function produtos(){
    $("#principal").load("html/produtos.html");
    document.getElementById("aba").innerHTML = "Produtos";
}

function cadastro(){
    $("#principal").load("html/cadastro.html");
    document.getElementById("aba").innerHTML = "Cadastro Pessoas";
}

function sair(){
    localStorage.clear();
    location.reload();
}
