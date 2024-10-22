// Comparaciones

// Mayor/menor que: 
a > b, a < b;

// Mayor/menor o igual que: 
a >= b, a <= b;

// Igual: 
a == b 
// (ten en cuenta que el doble signo == significa comparación, mientras que un solo símbolo a = b significaría una asignación).

// Distinto. En matemáticas la notación es ≠, pero en JavaScript se escribe como una asignación con un signo de exclamación delante: 
a != b;

// Toda comparacion devuelve un booleano

// true – significa “sí”, “correcto” o “verdad”.

// false – significa “no”, “equivocado” o " no verdad".

alert( 2 > 1 ); // true (correcto)
alert( 2 == 1 ); // false (incorrecto)
alert( 2 != 1 ); // true (correcto)

let result = 5 > 4; // asignar el resultado de la comparación
alert( result ); // true

// Comparaciones de cadena

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

// Comparaciones de diferentes tipos

alert( '2' > 1 ); // true, la cadena '2' se convierte en el número 2
alert( '01' == 1 ); // true, la cadena '01' se convierte en el número 1

// Para valores booleanos, true se convierte en 1 y false en 0.

alert( true == 1 ); // true
alert( false == 0 ); // true

