// Conversiones de Tipos

// ToString

let value = true;
alert(typeof value); // boolean

value = String(value); // ahora value es el string "true"
alert(typeof value); // string



//  ToNumber

// La conversión numérica ocurre automáticamente en funciones matemáticas y expresiones.

let str = "123";
alert(typeof str); // string

let num = Number(str); // se convierte en 123

alert(typeof num); // number

// La conversión explícita es requerida usualmente cuando leemos un valor desde una fuente basada en texto, como lo son los campos de texto en los formularios, pero que esperamos que contengan un valor numérico.

// Si el string no es un número válido, el resultado de la conversión será NaN. Por ejemplo:

let age = Number("un texto arbitrario en vez de un número");

alert(age); // NaN, conversión fallida

// Reglas de conversión numérica:

// undefined	    NaN

// null	            0

// true and false	1 y 0

// string	Se eliminan los espacios (incluye espacios, tabs \t, saltos de línea \n, etc.) al inicio y final del texto. Si el string resultante es vacío, el resultado es 0, en caso contrario el número es “leído” del string. Un error devuelve NaN.

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error al leer un número en "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0



// ToBoolean

// Ocurre en operaciones lógicas (más adelante veremos test condicionales y otras cosas similares), pero también puede realizarse de forma explícita llamando a la función Boolean(value).

// Los valores que son intuitivamente “vacíos”, como 0, "", null, undefined, y NaN, se convierten en false.

// Otros valores se convierten en true.

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hola") ); // true
alert( Boolean("") ); // false

