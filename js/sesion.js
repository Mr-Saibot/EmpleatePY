const enlaceLogin = document.getElementById("enlace-login");

const saludoUsuario = document.getElementById("saludo-usuario");



const sesionIniciada = localStorage.getItem("sesionIniciada");

const nombreUsuario = localStorage.getItem("usuario");



if (sesionIniciada === "true") {

    if (saludoUsuario) {

        saludoUsuario.textContent = `Hola, ${nombreUsuario} 👋`;

    }

    if (enlaceLogin) {

        enlaceLogin.textContent = "Cerrar sesión";

        enlaceLogin.href = "#";



        enlaceLogin.addEventListener("click", function (evento) {

            evento.preventDefault();

            localStorage.clear();

            window.location.reload();

        });

    }

}