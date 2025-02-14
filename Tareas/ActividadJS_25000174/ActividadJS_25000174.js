////////////////////////////////////////////////////////////////

var mes = prompt("Ingrese mes de nacimiento: ")
while (mes < 1 || mes > 12){
	var mes = prompt("Error. Ingrese un mes entre Enero (1) y Diciembre (12)")
}

var dia = prompt("Ingrese dia de nacimiento: ")
while (dia < 1 || dia > 31){
	var dia = prompt("Error. Ingrese su dia de nacimiento: ")}

////////////////////////////////////////////////////////////////

if (mes == 1){
	if (dia >= 1 && dia <= 20){
		alert("Nació el dia " + dia + " de " + "Enero, " + "su signo es Capricornio")}
	else if (dia >= 21 && dia <= 31){
		alert("Nació el dia " + dia + " de " + "Enero, " + "su signo es Acuario")}

}

else if (mes == 2){
	if (dia >= 1 && dia <= 19){
		alert("Nació el dia " + dia + " de " + "Febrero, " + "su signo es Acuario")}
	else if (dia >= 20 && dia <= 29){
		alert("Nació el dia " + dia + " de " + "Febrero, " + "su signo es Piscis")}
	else if (dia > 29){
		alert("Error. Febrero no puede tener más de 29 dias ;)")}
}
	
else if (mes == 3){
	if (dia >= 1 && dia <= 20){
		alert("Nació el dia " + dia + " de " + "Marzo, " + "su signo es Piscis")}
	else if (dia >= 21 && dia <= 31){
		alert("Nació el dia " + dia + " de " + "Marzo, " + "su signo es Aries")}
}

else if (mes == 4){
	if (dia >= 1 && dia <= 20){
		alert("Nació el dia " + dia + " de " + "Abril, " + "su signo es Aries")}
	else if (dia >= 21 && dia <= 31){
		alert("Nació el dia " + dia + " de " + "Abril, " + "su signo es Tauro")}
}

else if (mes == 5){
	if (dia >= 1 && dia <= 20){
		alert("Nació el dia " + dia + " de " + "Mayo, " + "su signo es Tauro")}
	else if (dia >= 21 && dia <= 31){
		alert("Nació el dia " + dia + " de " + "Mayo, " + "su signo es Géminis")}
}

else if (mes == 6){
	if (dia >= 1 && dia <= 20){
		alert("Nació el dia " + dia + " de " + "Junio, " + "su signo es Géminis")}
	else if (dia >= 21 && dia <= 31){
		alert("Nació el dia " + dia + " de " + "Junio, " + "su signo es Cáncer")}
}

else if (mes == 7){
	if (dia >= 1 && dia <= 22){
		alert("Nació el dia " + dia + " de " + "Julio, " + "su signo es Cáncer")}
	else if (dia >= 23 && dia <= 31){
		alert("Nació el dia " + dia + " de " + "Julio, " + "su signo es Leo")}}

else if (mes == 8){
	if (dia >= 1 && dia <= 23){
		alert("Nació el dia " + dia + " de " + "Agosto, " + "su signo es Leo")}
	else if (dia >= 24 && dia <= 31){
		alert("Nació el dia " + dia + " de " + "Agosto, " + "su signo es Virgo")}}

else if (mes == 9){
	if (dia >= 1 && dia <= 22){
		alert("Nació el dia " + dia + " de " + "Septiembre, " + "su signo es Virgo.")}
	else if (dia >= 23 && dia <= 31){
		alert("Nació el dia " + dia + " de " + "Septiembre, " + "su signo es Libra.")}}

else if (mes == 10){
	if (dia >= 1 && dia <= 23){
		alert("Nació el dia " + dia + " de " + "Octubre, " + "su signo es Libra.")}
	else if (dia >= 24 && dia <= 31){
		alert("Nació el dia " + dia + " de " + "Octubre, " + "su signo es Escorpio.")}}

else if (mes == 11){
	if (dia >= 1 && dia <= 22){
		alert("Nació el dia " + dia + " de " + "Noviembre, " + "su signo es Escorpio.")}
	else if (dia >= 23 && dia <= 31){
		alert("Nació el dia " + dia + " de " + "Noviembre, " + "su signo es Sagitario.")}}

else {
	if (dia >= 1 && dia <= 21){
		alert("Nació el dia " + dia + " de " + "Diciembre, " + "su signo es Sagitario.")}
	else if (dia >= 22 && dia <= 31){
		alert("Nació el dia " + dia + " de " + "Diciembre, " + "su signo es Capricornio.")}}

////////////////////////////////////////////////////////////////