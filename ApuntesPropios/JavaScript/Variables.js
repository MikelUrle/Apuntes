// Tipos de variables

// 1. "var"

// Alcance: Global o de función.
// Hoisting: Se eleva al principio del contexto, lo que significa que puedes usar la variable antes de declararla.
// Reasignación y redeclaración: Puedes reasignar y redeclarar variables declaradas con var.

var nombre = "Juan";
nombre = "Carlos"; // Reasignación permitida
var nombre = "Luis"; // Redeclaración permitida


// 2. "let"

// Alcance: Bloque.
// Hoisting: Existe hoisting pero no se puede acceder antes de la declaración.
// Reasignación y redeclaración: Puedes reasignar pero no redeclarar en el mismo ámbito.

let edad = 30;
edad = 31; // Reasignación permitida
// let edad = 32; // Error: redeclaración no permitida en el mismo ámbito


// 3. "const"

// Alcance: Bloque.
// Hoisting: Existe hoisting pero no se puede acceder antes de la declaración.
// Reasignación y redeclaración: No puedes reasignar ni redeclarar. Debe ser inicializada al declararse.

const PI = 3.1416;
// PI = 3.14; // Error: no se puede reasignar
// const PI = 3.14; // Error: redeclaración no permitida en el mismo ámbito