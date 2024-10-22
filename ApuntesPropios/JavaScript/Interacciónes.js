// Interacción

// 1. "alert"

// Ya la hemos visto. Muestra un mensaje y espera a que el usuario presione “Aceptar”.

alert("Hello");

// 2. "prompt"

// Muestra una ventana modal con un mensaje de texto, un campo de entrada para el visitante y los botones OK/CANCELAR.

// title

// El texto a mostrar al usuario.

// default

// Un segundo parámetro opcional, es el valor inicial del campo de entrada.

let valor = prompt(mensaje, valorPorDefecto);

// 3. "confirm"

// La función confirm muestra una ventana modal con una pregunta y dos botones: OK y CANCELAR.

// El resultado es true si se pulsa OK y false en caso contrario.

let isBoss = confirm("¿Eres el jefe?");

alert( isBoss ); // true si se pulsa OK