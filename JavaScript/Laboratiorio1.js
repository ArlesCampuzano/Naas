let a = 10;
let b = 2;

/* ejercicio 2*/
let suma= a+b;
let resta = a-b;
console.log("Suma ",suma)
console.log("Resta: ",resta)
console.log("Division: ", a/b)
console.log("Multiplicacion: ",a*b)

console.log("Comparacion: ",a==b);
console.log("Comparacion: ",a!=b);
console.log("Comparacion: ",a>b);
console.log("Comparacion: ",a<b);
console.log("Comparacion: ",a>=b);
console.log("Comparacion: ",a<=b);

/* fin ejericio 2*/

/* Ejercicio 3 */
esMayorDeEdad = true;
tieneLicencia = true;

if (esMayorDeEdad && tieneLicencia){
    console.log("Puede conducir")
}



if (esMayorDeEdad = false || tieneLicencia ){
    console.log("Puede conducir")
}
else{
    console.log("No puede conducir")
};

if (tieneLicencia && esMayorDeEdad){
    tiene="Tiene licencia"
    console.log("El usuario es mayor de edad y puede conducir porque "+ tiene)
}

/* Fin ejercicio 3 */

/* Ejercicio 4 */
let nombre = prompt("Digite su nombre: ");
let edad = parseInt(prompt("Digite su Edad: "));
let estudiante = prompt("¿Es usted estudiante? Si/No: ");

let mensaje = `Hola, ${nombre}.`;
console.log(mensaje);

if (edad > 18) {
    console.log("El usuario " + nombre + " es mayor de edad.");
} else {
    console.log("El usuario " + nombre + " es menor de edad.");
}

if (estudiante === 'Si' || estudiante === 'si') {
    console.log("El usuario " + nombre + " es estudiante, tiene descuento.");
} else {
    console.log("El usuario " + nombre + " no es estudiante, no tiene descuento.");
}
