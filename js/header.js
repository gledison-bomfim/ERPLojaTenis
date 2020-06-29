function compras(){
    $("#principal").load("html/compras.html");
    document.getElementById("aba").innerHTML = "Compras";
}

function financeiro(){
    $("#principal").load("html/financeiro.html");
    document.getElementById("aba").innerHTML = "Financeiro";
}

function almoxarifado(){
    $("#principal").load("html/almoxarifado.html");
    document.getElementById("aba").innerHTML = "Produtos";
}

function sair(){
    localStorage.clear();
    location.reload();
}
