//Un modal en inglés es la ventanita pequeña que a veces aparece en las páginas webs. Por ejemplo, puede pedirte un email para subscribirte a un boletín, etc.
document.addEventListener("DOMContentLoaded", () => {
    const haSalidoModal = 'modalDisplayed';

    //Aquí miramos si el modal ya ha salido antes, si no ha salido, hacemos que aparezca, ajustando el zindex y la opacidad a 1. En este caso, aparece después de 10 segundos
    if (!localStorage.getItem(haSalidoModal)) {
        setTimeout(() => {
            fondo.style.opacity = "1";
            fondo.style.zIndex = "1";
        }, 10000);
        //Aquí declaramos botonCerrar como constante, para no tener que volver a escribir document.getElementById("botonCerrar"); varias veces
        const botonCerrar = document.getElementById("botonCerrar");
        //Cuando el usuario haga click sobre el elemento con id "botonCerrar" (en este caso, será la X que aparece en el modal), se hará que el modal desaparezca, para ello, haremos que su zindex se haga -1 y su opcacidad sea 0.
        botonCerrar.addEventListener("click", () => {
            fondo.style.opacity = "0";
            fondo.style.zIndex = "-1";

            //Y se marcará que ya ha salido el modal para que no vuelva a salir
            localStorage.setItem(haSalidoModal, 'true');
        });
        //Aquí se mira si el usuario le ha dado al botón de "enviar" del modal, si le ha dado, se hará lo mismo que antes, para que el modal no aparezca.
        const emailEnviado = document.getElementsByClassName("boton")[0];
        emailEnviado.addEventListener("click", () => {
            fondo.style.opacity = "0";
            fondo.style.zIndex = "-1";
            //Al igual que antes, se marcará que el modal ya ha salido al pulsar el botón de enviar
            localStorage.setItem(haSalidoModal, 'true')
        });
    }
});
        //Esta parte del código es la que hará que el aviso de los cookies aparezca o no
        document.addEventListener("DOMContentLoaded", function () {
            //Declaramos las variables para no repetir de nuevo document.getElementById...
            const avisoCookies = document.getElementById("avisoCookies");
            const botonAceptarCookies = document.getElementById("botonAceptarCookies");
    
            // Esta variable sirve para ver si el aviso de cookies ya ha salido o no
            const haAceptadoCookies = localStorage.getItem("cookiesAceptados");
    
            // Si nos devuelve "falso", haremos que aparezca, conviertiendo la propiedad CSS "display" de "none" a "block" 
            if (!haAceptadoCookies) {
                avisoCookies.style.display = "block";
            }

            // Si el usuario ha pulsado la opción "Aceptar" en el aviso de cookies (el elemento con id "botonAceptarCookies"), haremos que desparezca
            botonAceptarCookies.addEventListener("click", function () {
                // Para ello, marcaremos que el usuario ha aceptado las cookies
                localStorage.setItem("cookiesAceptados", "true");
    
                // Después, haremos que la propiedad "display" se convierta a "none", para que desaparezca
                avisoCookies.style.display = "none";
            });
        });