const readline = require('readline');

// Paso 1: Declaración de variables 
let num1;
let num2;
let operacion;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Paso 2: Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
  if (operacion === "suma") {
    return num1 + num2;
  } else if (operacion === "resta") {
    return num1 - num2;
  } else if (operacion === "multiplicacion") {
    return num1 * num2;
  } else if (operacion === "division") {
    if (num2 === 0) {
      return "Error: no se puede dividir por cero.";
    } else {
      return num1 / num2;
    }
  } else {
    return "Operación no válida.";
  }
}

// Paso 4: Bucle para múltiples operaciones
function solicitarOperacion() {
  rl.question("Ingrese el primer número (o escriba 'salir' para terminar): ", function (input1) {
    if (input1.toLowerCase() === "salir") {
      console.log("¡Gracias por usar la calculadora! Hasta luego.");
      rl.close();
      return;
    }

    num1 = parseFloat(input1);
    rl.question("Ingrese el segundo número: ", function (input2) {
      num2 = parseFloat(input2);

      rl.question("Ingrese la operación (suma, resta, multiplicacion, division): ", function (op) {
        operacion = op.toLowerCase();

        // Paso 3: Validar operación
        if (!["suma", "resta", "multiplicacion", "division"].includes(operacion)) {
          console.log("❌ Operación no válida. Intente de nuevo.\n");
        } else {
          const resultado = realizarOperacion(num1, num2, operacion);
          console.log(`✅ Resultado: ${resultado}\n`);
        }

        // Repetir
        solicitarOperacion();
      });
    });
  });
}


solicitarOperacion();
