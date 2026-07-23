const formulario = document.getElementById("formulario-login");

const usuario = document.getElementById("usuario");

const contrasena = document.getElementById("contrasena");

const mensajeLogin = document.getElementById("mensaje-login");



if (localStorage.getItem("sesionIniciada") === "true") {

    mensajeLogin.style.color = "#16a34a";

    mensajeLogin.textContent =
        `Ya iniciaste sesión como ${localStorage.getItem("usuario")}.`;

}



formulario.addEventListener("submit", iniciarSesion);



function iniciarSesion(evento) {

    evento.preventDefault();



    const nombreUsuario = usuario.value.trim();

    const clave = contrasena.value.trim();



    if (nombreUsuario === "" || clave === "") {

        mensajeLogin.style.color = "#dc2626";

        mensajeLogin.textContent =
            "Complete todos los campos.";

        return;

    }



    localStorage.setItem("sesionIniciada", "true");

    localStorage.setItem("usuario", nombreUsuario);



    mensajeLogin.style.color = "#16a34a";

    mensajeLogin.textContent =
        `¡Bienvenido, ${nombreUsuario}!`;


    setTimeout(() => {

        window.location.href = "index.html";

    }, 1200);

}