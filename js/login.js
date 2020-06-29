function login() {
    usuario = document.getElementById("inputUser").value;
    senha = document.getElementById("inputPassword").value;
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/usuarios", false);
    xhttp.send({usuario, senha});

    if (xhttp.response) {
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("senha", senha);
        location.reload();
    } else {
        //Adicionar mensagem no login que algum dado esta errado.
    }
}