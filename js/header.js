function principal(){
    $("#principal").load("html/principal.html");
    document.getElementById("aba").innerHTML = "Principal";
    sessionStorage.removeItem("setor");
    location.reload();
}

function compras(){
    $("#principal").load("html/compras.html");
    document.getElementById("aba").innerHTML = "Compras";
    sessionStorage.setItem("setor", "compras");
}

function financeiro(){
    $("#principal").load("html/financeiro.html");
    document.getElementById("aba").innerHTML = "Financeiro";
    sessionStorage.setItem("setor", "financeiro");
}

function almoxarifado(){
    $("#principal").load("html/almoxarifado.html");
    document.getElementById("aba").innerHTML = "Produtos";
    sessionStorage.setItem("setor", "almoxarifado");
    selectTodosProdutos();
}

function sair(){
    sessionStorage.clear();
    localStorage.clear();
    location.reload();
}
