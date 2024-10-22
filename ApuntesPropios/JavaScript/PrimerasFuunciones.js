// Condicionales

// "IF"

let year = prompt('¿En que año fué publicada la especificación ECMAScript-2015?', '');

if (year == 2015) alert( '¡Estás en lo cierto!' );

// Para mas de una sentencia

if (year == 2015) {
    alert( "¡Es Correcto!" );
    alert( "¡Eres muy inteligente!" );
}

// "else"

let year1 = prompt('¿En qué año fue publicada la especificación ECMAScript-2015?', '');

if (year == 2015) {
  alert( '¡Lo adivinaste, correcto!' );
} else {
  alert( '¿Cómo puedes estar tan equivocado?' ); // cualquier valor excepto 2015
}



let year2 = prompt('¿En qué año fue publicada la especificación ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Muy poco...' );
} else if (year > 2015) {
  alert( 'Muy Tarde' );
} else {
  alert( '¡Exactamente!' );
}

// Operacion ternario o "?"

let accessAllowed;
let age = prompt('¿Qué edad tienes?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

// El “operador condicional” nos permite ejecutar esto en una forma más corta y simple.

// El operador está representado por el signo de cierre de interrogación ?. A veces es llamado “ternario” porque el operador tiene tres operandos, es el único operador de JavaScript que tiene esa cantidad.

let result = condition ? value1 : value2;

// Se evalúa condition: si es verdadera entonces devuelve value1 , de lo contrario value2.

let accessAllowed1 = (age > 18) ? true : false;

// Una secuencia de operadores de signos de interrogación ? puede devolver un valor que depende de más de una condición.

let age1 = prompt('¿edad?', 18);

let message = (age < 3) ? '¡Hola, bebé!' :
  (age < 18) ? '¡Hola!' :
  (age < 100) ? '¡Felicidades!' :
  '¡Qué edad tan inusual!';

alert( message );

// El primer signo de pregunta revisa si age < 3.
// Si es cierto, devuelve '¡Hola, bebé!'. De lo contrario, continúa a la expresión que está después de los dos puntos “:”, la cual revisa si age < 18.
// Si es cierto, devuelve '¡Hola!'. De lo contrario, continúa con la expresión que está después de los dos puntos siguientes “:”, la cual revisa si age < 100.
// Si es cierto, devuelve '¡Felicidades!'. De lo contrario, continúa a la expresión que está después de los dos puntos “:”, la cual devuelve '¡Qué edad tan inusual!'.


// Bucle while

while (condition) {
  // código
  // llamado "cuerpo del bucle"
}

// Mientras la condición condition sea verdadera, el código del cuerpo del bucle será ejecutado.

let i = 0;
while (i < 3) { // muestra 0, luego 1, luego 2
  alert( i );
  i++;
}

// Cada ejecución del cuerpo del bucle se llama iteración.

// Por ejemplo, una manera más corta de escribir while (i != 0) es while (i):


// DO While

do {
  // cuerpo del bucle
} while (condition);

// El bucle primero ejecuta el cuerpo, luego comprueba la condición, y, mientras sea un valor verdadero, la ejecuta una y otra vez.


// For

for (begin; condition; step) { // (comienzo, condición, paso)
  // ... cuerpo del bucle ...
}

for (let i = 0; i < 3; i++) { // muestra 0, luego 1, luego 2
  alert(i);
}

// comienzo	let i = 0	Se ejecuta una vez al comienzo del bucle.
// condición	i < 3	Comprobada antes de cada iteración del bucle. Si es falsa, el bucle finaliza.
// cuerpo	alert(i)	Se ejecuta una y otra vez mientras la condición sea verdadera.
// paso	i++	Se ejecuta después del cuerpo en cada iteración.

if (!value) "break"; // (*) sin " " para for o el while

// La directiva continue es una “versión más ligera” de break. 
// No detiene el bucle completo. En su lugar, detiene la iteración actual y fuerza al bucle a comenzar una nueva (si la condición lo permite).

for (let i = 0; i < 10; i++) {

  // si es verdadero, saltar el resto del cuerpo
  if (i % 2 == 0) continue;

  alert(i); // 1, luego 3, 5, 7, 9
}


// Una etiqueta es un identificador con un signo de dos puntos “:” antes de un bucle:

// labelName: for (...) {
//   ...
// }

