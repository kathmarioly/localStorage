/*Función GUARDAR DATOS; para recuperar los datos que el ususario ingrese en los input*/


function guardarDatos(){
	localStorage.nombre = document.getElementById("nombre").value;
	localStorage.password = document.getElementById("password").value;
}
/* Función RECUPERAR DATOS. Si los datos ingresados son distintos a undefined, los imprimira en pantalla
de lo contrario enviara un mensaje.*/

function recuperarDatos(){
	if((localStorage.nombre != undefined) && (localStorage.password != undefined)){
		document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br/> Password: " + localStorage.password;
	}
	else{
		document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
	}
}
