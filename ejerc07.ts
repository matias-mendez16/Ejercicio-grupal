// Dado un arreglo de números, devuelve un nuevo arreglo que contenga solo los números pares del arreglo original.
//export function filtrarPares(arr: number[]): number[] {}


function filtrarPares (arr: number []) : number []{


let nPares = arr.filter(array => array%2 == 0);  // El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

return (nPares);
}

console.log(filtrarPares([1,2,3,4,5,6,7,8,9,10]));

// TERMINADO