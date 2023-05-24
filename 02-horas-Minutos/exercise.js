/**
 * La función valida si una hora dada está en un formato válido (hh:mm).
 * @param time - El parámetro `time` es una cadena que representa una hora en el formato "HH:MM", donde
 * HH es la hora en formato de 24 horas y MM son los minutos.
 * @returns La función `validarTiempo` devuelve un valor booleano que indica si la entrada `time` es
 * una hora válida en el formato "hh:mm".
 */

const validarTiempo = (time) => {
  /* `const [hora, minutos] = time.split(":");` está dividiendo la cadena `time` en una matriz de dos
  elementos, usando los dos puntos `:` como separador. La matriz resultante se desestructura luego
  en dos variables `hora` y `minutos`, que representan las horas y los minutos del tiempo
  respectivamente. */
  const [hora, minutos] = time.split(":");

  /* Esta línea de código valida si la variable `hora` (que representa las horas del tiempo) es un valor
válido entre 0 y 23. Lo hace convirtiendo primero la variable `hora` en un número entero usando
`parseInt(hora, 10)`, y luego verificando si es mayor o igual a 0 y menor a 24 usando el operador
lógico AND `&&`. El resultado de esta validación se almacena en la variable `validaHora`. */
  const validaHora = parseInt(hora, 10) >= 0 && parseInt(hora, 10) < 24;

  /* Este código valida si la variable `minutos` (que representa los minutos de la hora) es un valor
válido entre 0 y 59. Lo hace convirtiendo primero la variable `minutos` en un número entero usando
`parseInt(minutos, 10) `, y luego verificando si es mayor o igual a 0 y menor a 60 usando el
operador lógico AND `&&`. El resultado de esta validación se almacena en la variable
`validarMinutos`. */
  const validarMinutos =
    parseInt(minutos, 10) >= 0 && parseInt(minutos, 10) < 60;

  /* `return validaHora && validarMinutos;` devuelve un valor booleano que indica si la entrada `time` es
una hora válida en el formato "hh:mm". Lo hace comprobando si tanto `validaHora` como
`validarMinutos` son verdaderos mediante el operador lógico AND `&&`. Si ambos son verdaderos,
/* Estas líneas de código están llamando a la función `validarTiempo` con tres valores de tiempo
diferentes como argumentos: "13:58", "25:51" y "02:76". La función comprueba si cada valor de tiempo
tiene un formato válido (hh:mm) y devuelve un valor booleano que indica si es válido o no. Las
declaraciones `console.log` luego imprimen los resultados booleanos de cada llamada de función a la
consola. */

  return validaHora && validarMinutos;
};
/* Estas líneas de código están llamando a la función `validarTiempo` con tres valores de tiempo
diferentes como argumentos: "13:58", "25:51" y "02:76". La función comprueba si cada valor de tiempo
tiene un formato válido (hh:mm) y devuelve un valor booleano que indica si es válido o no. Las
declaraciones `console.log` luego imprimen los resultados booleanos de cada llamada de función a la
consola. */

console.log(validarTiempo("13:58"));
console.log(validarTiempo("25:51"));
console.log(validarTiempo("02:76"));
