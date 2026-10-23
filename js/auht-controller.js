

import {redirectAlert} from "./alert.js";
import {buscarUsuario} from "./data.js";

function iniciarSesion() {
    const correo = document.querySelector("#correo").value;
    const clave = document.querySelector("#clave").value;
    if (buscarUsuario(correo, clave)) {
        redirectAlert("Bienvenido al sistema", "success", "./pages/catalogo.html");
    } else {
        redirectAlert("Error de credenciales", "error");
    }
}

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    iniciarSesion();
});
