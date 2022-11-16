alert("No cierre la ventana hasta que se le indique.")





window.onload = function () {
    window.location.hash = 'no-back-button';
    window.location.hash = 'Again-No-back-button';
    window.onhashchange = function () {
      window.location.hash = 'no-back-button';
    };
};


window.addEventListener('BeforeUnload', (evento) => {
evento.defaultPrevented = ""

})


function mostrar(){
    document.getElementById('uno').style.display = "none";
    document.getElementById('enviar').style.display = "block";

    setTimeout(() => {
        document.getElementById('recibir').style.display = "block";
    }, 1000);

    setTimeout(() => {
        alert("Cierre la ventana y regrese al juego.");
    }, 3000);
    
}

