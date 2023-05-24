/**
 * La función elimina cada k-ésimo elemento de una matriz.
 * @param valores - una matriz de valores de los que queremos eliminar elementos.
 * @param k - El valor de k representa la frecuencia con la que los elementos deben eliminarse de la
 * matriz. Específicamente, se eliminará cada k-ésimo elemento de la matriz.
 * @returns La función `RemueveLaK` devuelve la matriz `valores` modificada después de eliminar cada
 * elemento `k`-th.
 */
const RemueveLaK = (valores, k) => {

  
 /* Este es un bucle for que itera sobre la matriz `valores` y elimina todos los elementos `k`-th de
 ella. El ciclo comienza en el índice `k-1` y se incrementa en `k` en cada iteración. El método
 `splice` se usa para eliminar el elemento en el índice actual `i` de la matriz. */
  for (let i = k - 1; i < valores.length; i += k) {
    valores.splice(i, 1);
  }
  return valores;
};

/* El código crea una matriz `valores` con valores del 1 al 10, establece un valor `k` a 3 y luego
llama a la función `RemueveLaK` con `valores` y `k` como argumentos. El resultado de la llamada a la
función se almacena en `resultadoFinal`. */
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;
const resultadoFinal = RemueveLaK(valores, k);


/* `console.log(resultadoFinal);` está imprimiendo la matriz `valores` modificada devuelta por la
función `RemueveLaK` a la consola. */
console.log(resultadoFinal);
