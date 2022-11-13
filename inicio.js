//alert("No cierre nada ni vuelva al juego hasta que se le indíque.")

function redireccionar_con_contraseña() {
	// variantes
	var usuari, contra;
	
	usuari = document.getElementById("Usuario").value;
	contra = document.getElementById("Contraseña").value;
	
	

	// algoritmo boton

	if(usuari == "1" && contra == "1"){
		window.location= "pagina1.html";
	}else{
		alert("Los datos son incorrectos, vuelva a intentarlo.")
	}
}

