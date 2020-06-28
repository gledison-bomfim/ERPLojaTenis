$(function headerInclude() {
  if (localStorage.getItem("usuario") && localStorage.getItem("senha")) {
    $("#header").load("html/header.html");
  }
});

$(function loginInclude() {
  if (!localStorage.getItem("usuario") && !localStorage.getItem("senha")) {
    $("#principal").load("html/login.html");
    $("#principal").addClass("text-center");
  }
});

