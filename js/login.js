function login() {
    usuario = document.getElementById("inputUser").value;
    senha = document.getElementById("inputPassword").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/usuarios", false);
    xhttp.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({ "usuario": usuario, "senha": senha });
    xhttp.send(data);

    if (xhttp.response) {
        if (xhttp.response == "Conectado") {
            localStorage.setItem("usuario", usuario);
            localStorage.setItem("senha", senha);
            location.reload();
        } else{
            alert("Usuário ou senha inválidos");
        } 
        if (xhttp.response == "Erro"){
            alert("Erro ao pesquisar usuário");
        }
    } else {
        alert("Erro ao realizar requisição");
    }
}