

window.onload = function () {
	window.location.hash = 'no-back-button';
	window.location.hash = 'Again-No-back-button';
	window.onhashchange = function () {
	  window.location.hash = 'no-back-button';
	};
  };
  
function redireccionar_con_contraseña() {
	// variantes
	var usuari, contra;
	
	usuari = document.getElementById("Usuario").value;
	contra = document.getElementById("Contraseña").value;
	
	

	// algoritmo boton

	if(usuari == "JudeQueen" && contra == "9046"){
		window.location= "pagina1.html";
	}else{
		alert("Los datos son incorrectos, vuelva a intentarlo.")
	}
}

