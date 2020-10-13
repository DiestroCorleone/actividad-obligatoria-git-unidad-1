var form, usuario, password;

function login(event){
	event.preventDefault();
	
	usuario = document.getElementById("usuario").value;
	password = document.getElementById("password").value;
	
	if(usuario == ""  || usuario == null || password == "" || password == null ){
		alert("Por favor, ingresá usuario y contraseña.");
	}else{
		if(!usuario.includes("@")){
			alert("Falta arroba en el usuario.");
		}else{
			form = document.getElementById("form");
			form.submit();
			alert("Ingresó correctamente al sistema!");
		}
	}	
}
