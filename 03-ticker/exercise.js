/**
 * La función comprueba si la suma de la primera mitad de un número dado es igual a la suma de la
 * segunda mitad.
 * @param n - El número de entrada para el que el método está comprobando si tiene suerte o no.
 * @returns La función `MetododeSuerte` devuelve un valor booleano que indica si la suma de los dígitos
 * de la primera mitad del número de entrada es igual a la suma de los dígitos de la segunda mitad del
 * número de entrada.
 */
const MetododeSuerte = (n) => {
/* `const numero = String(n);` está convirtiendo el número de entrada `n` en una cadena y asignándolo a
la variable `numero`. Esto permite que la función itere sobre cada dígito del número usando un bucle
for y realice operaciones en cada dígito. */
  const numero = String(n);
/* `const tamano = numero.length;` asigna la longitud de la cadena `numero` (que es el número de
entrada convertido en una cadena) a la variable `tamano`. Esta variable se usa más adelante en la
función para determinar el punto medio del número de entrada. */
  const tamano = numero.length;
  /* Estas líneas de código son variables de inicialización utilizadas en la función `MetododeSuerte`. */
  let valor1 = 0;
  let valor2 = 0;
  let sumaTotal = 0;

/* Este bloque de código itera sobre cada dígito del número de entrada `n` usando un bucle for.
Comprueba si el índice actual `i` es menor que la mitad de la longitud del número de entrada `tamano
/ 2`. Si es así, suma el dígito actual a `valor1`. Si no, añade el dígito actual a `valor2`. También
agrega el dígito actual a `sumaTotal` independientemente de a qué mitad pertenezca. Finalmente, la
función devuelve un valor booleano que indica si la suma de los dígitos de la primera mitad del
número de entrada es igual a la suma de los dígitos de la segunda mitad. */
  for (let i = 0; i < tamano; i++) {
    if (i < tamano / 2) {
      valor1 += Number(numero[i]);
    } else {
      valor2 += Number(numero[i]);
    }

    sumaTotal += Number(numero[i]);
  }

  return valor1 === valor2;
};

/* El código llama a la función `MetododeSuerte` dos veces con diferentes valores de entrada y registra
los valores booleanos devueltos en la consola. La primera llamada pasa el número `1230` como
argumento y la segunda llamada pasa el número `239017`. La función comprueba si la suma de los
dígitos de la primera mitad del número de entrada es igual a la suma de los dígitos de la segunda
mitad y devuelve "verdadero" si son iguales y "falso" en caso contrario. La salida registrada
mostrará `verdadero` o `falso` para cada valor de entrada, indicando si son o no números
"afortunados" según los criterios de la función. */
console.log(MetododeSuerte(1230));
console.log(MetododeSuerte(239017));
