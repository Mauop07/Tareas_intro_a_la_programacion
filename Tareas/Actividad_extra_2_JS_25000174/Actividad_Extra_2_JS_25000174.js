// Copiar y pegar el codigo en jsfiddle.net para evitar erroes

//////////////////////////////////////////////////////////////

// Usare la variable reset con valor uno para que inicie el juego
// Si su valor cambia, el juego termina
var reset = 1
// Un sistema simple de puntaje
var puntos_cpu = 0
var puntos_jugador = 0

// El loop while contiene todo el juego incluido el numero random de la computadora
while (reset == 1){

// Use Math.ceil para redondear hacia arriba, asi obtengo 1 min y 9 max
// Tambien podria usar Math.floor y luego sumarle 1
// La funcion Math.random solo devuelve valores en decimal entre 0 y 1, tengo que multiplicarlo para obtener numeros enteros
	var num_cpu = Math.ceil(Math.random()*9)

	var num_jugador = prompt("Ingrese un número entre 3 y 6: ")
// Para asegurarme que la respuesta del jugador sea correcta:
	while (num_jugador < 3 || num_jugador > 6){
		var num_jugador = prompt("Error! Por favor ingrese un número entre 3 y 6: ")}

	var decision = prompt("He generado un número aleatorio, cree que su número sea 'menor', 'mayor' o 'igual'?: ")
	alert("Usted cree que su número es " + decision + ", veamos...")

// TRES CASOS POSIBLES:
// NUMERO DE JUGADOR ES MENOR	
	
	if (num_jugador < num_cpu){
		if (decision == "menor"){
			alert("Mi número es " + num_cpu + ", su número es " + num_jugador + ", su número es menor, USTED HA GANADO!")
			puntos_jugador += 1
			alert("PUNTUACIÓN " + "CPU: " + puntos_cpu + " - " + "JUGADOR: " +puntos_jugador)}

		else if (decision == "mayor"){
			alert("Mi número es " + num_cpu + ", su número es " + num_jugador + ", su número es menor, USTED PIERDE!")
			puntos_cpu += 1
			alert("PUNTUACIÓN " + "CPU: " + puntos_cpu + " - " + "JUGADOR: " +puntos_jugador)}

		else if (decision == "igual"){
			alert("Mi número es " + num_cpu + ", su número es " + num_jugador + ", su número es menor, USTED PIERDE!")
			puntos_cpu += 1
			alert("PUNTUACIÓN " + "CPU: " + puntos_cpu + " - " + "JUGADOR: " +puntos_jugador)}

		reset = prompt("Desea seguir jugando? 1 = SI, 0 = NO: ")}

// NUMERO DE JUGADOR ES MAYOR

	if (num_jugador > num_cpu){
		if (decision == "menor"){
			alert("Mi numero es " + num_cpu + ", su numero es " + num_jugador + ", su numero es mayor, USTED PIERDE!")
			puntos_cpu += 1
			alert("PUNTUACIÓN " + "CPU: " + puntos_cpu + " - " + "JUGADOR: " +puntos_jugador)}

		else if (decision == "mayor"){
			alert("Mi numero es " + num_cpu + ", su numero es " + num_jugador + ", su numero es mayor, USTED HA GANADO!")
			puntos_jugador += 1
			alert("PUNTUACIÓN " + "CPU: " + puntos_cpu + " - " + "JUGADOR: " +puntos_jugador)}

		else if (decision == "igual"){
			alert("Mi numero es " + num_cpu + ", su numero es " + num_jugador + ", su numero es mayor, USTED PIERDE!")
			puntos_cpu += 1
			alert("PUNTUACIÓN " + "CPU: " + puntos_cpu + " - " + "JUGADOR: " +puntos_jugador)}

		reset = prompt("Desea seguir jugando? 1 = SI, 0 = NO: ")}
		
// NUMEROS IGUALES

	if (num_jugador == num_cpu){
		if (decision == "menor"){
			alert("Mi número es " + num_cpu + ", su número es " + num_jugador + ", nuestros números son iguales, USTED PIERDE!")
			puntos_cpu += 1
			alert("PUNTUACIÓN " + "CPU: " + puntos_cpu + " - " + "JUGADOR: " +puntos_jugador)}

		else if (decision == "mayor"){
			alert("Mi número es " + num_cpu + ", su número es " + num_jugador + ", nuestros números son iguales, USTED PIERDE!")
			puntos_cpu += 1
			alert("PUNTUACIÓN " + "CPU: " + puntos_cpu + " - " + "JUGADOR: " +puntos_jugador)}

		else if (decision == "igual"){
			alert("Mi número es " + num_cpu + ", su número es " + num_jugador + ", nuestros números son iguales, USTED HA GANADO!")
			puntos_jugador += 1
			alert("PUNTUACIÓN " + "CPU: " + puntos_cpu + " - " + "JUGADOR: " +puntos_jugador)}

		reset = prompt("Desea seguir jugando? 1 = SI, 0 = NO: ")}
}

// Al asignarle cualquier otro valor a la variable RESET que no sea uno '1', el loop WHILE termina y el programa continua
alert("Gracias por jugar! :)")
alert("Nombre: Mauricio Orellana, Carnet: 25000174")