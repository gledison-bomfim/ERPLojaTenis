function login() {
    usuario = document.getElementById("inputUser").value;
    senha = document.getElementById("inputPassword").value;

    

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);   
    location.reload();
}