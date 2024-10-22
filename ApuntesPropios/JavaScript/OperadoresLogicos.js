// Operadores Logicos

// || (O), && (Y), ! (NO), ?? (Fusión de nulos)

// || (OR)

// En la programación clásica, el OR lógico esta pensado para manipular solo valores booleanos. Si cualquiera de sus argumentos es true, retorna true, de lo contrario retorna false.

result = a || b;

alert(true || true); // true (verdadero)
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false (falso)

// Ejemplo

let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'La oficina esta cerrada.' );
}

result = value1 || value2 || value3;

// Evalúa los operandos de izquierda a derecha.

// Para cada operando, convierte el valor a booleano. Si el resultado es true, se detiene y retorna el valor original de ese operando.

// Si todos los operandos han sido evaluados (todos eran false), retorna el ultimo operando.

alert(1 || 0); // 1 (1 es un valor verdadero)

alert(null || 1); // 1 (1 es el primer valor verdadero)
alert(null || 0 || 1); // 1 (el primer valor verdadero)

alert(undefined || null || 0); // 0 (todos son valores falsos, retorna el último valor)



let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder



// && (AND)

// En la programación clásica, AND retorna true si ambos operandos son valores verdaderos y false en cualquier otro caso.

result = a && b;

alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

result = value1 && value2 && value3;

// Evalúa los operandos de izquierda a derecha.

// Para cada operando, los convierte a un booleano. Si el resultado es false, se detiene y retorna el valor original de dicho operando.

// Si todos los operandos han sido evaluados (todos fueron valores verdaderos), retorna el último operando.



// ! (NOT)

// Convierte el operando al tipo booleano: true/false.

// Retorna el valor contrario.

result = !value;

alert(!true); // false
alert(!0); // true

// Un doble NOT !! es a veces usado para convertir un valor al tipo booleano:

alert(!!"cadena de texto no vacía"); // true
alert(!!null); // false



// Operador Nullish Coalescing '??'

// El resultado de a ?? b:

// si a está “definida”, será a,

// si a no está “definida”, será b.

// Es decir, ?? devuelve el primer argumento cuando este no es null ni undefined. En caso contrario, devuelve el segundo.

let firstName1 = null;
let lastName1 = null;
let nickName1 = "Supercoder";

// Muestra el primer valor definido:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// El operador “nullish coalescing” ?? brinda una manera concisa de seleccionar un valor “definido” de una lista.

// Es usado para asignar valores por defecto a las variables:

// Asignar height=100, si height es null o undefined
height = height ?? 100;


// Precedencia

// || y ??, son evaluados antes que = y ?, pero después de la mayoría de las demás operaciones como + y *.
