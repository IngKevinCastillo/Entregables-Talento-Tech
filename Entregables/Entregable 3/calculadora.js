let n1, n2, operacion;

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "+") {
        return num1 + num2;
    } else if (operacion === "-") {
        return num1 - num2;
    } else if (operacion === "*") {
        return num1 * num2;
    } else if (operacion === "/") {
        if (num2 === 0) {
            return "Error: División por cero";
        }
        return num1 / num2;
    } else {
        return "Operación no válida";
    }
}

while (true) {
    n1 = parseFloat(prompt("Ingrese el primer número:"));
    n2 = parseFloat(prompt("Ingrese el segundo número:"));
    operacion = prompt("Ingrese la operación (+, -, *, /) o 'salir' para terminar:").toLowerCase();

    if (operacion === "salir") {
        alert("Gracias por usar la calculadora. ¡Adiós!");
        break;
    }
    const resultado = realizarOperacion(n1, n2, operacion);
    alert(`Resultado: ${resultado}`);
}