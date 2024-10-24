// Eliminar duplicados
// Escribe una función que elimine los valores duplicados de un arreglo.
// Ejemplo: [1, 2, 2, 3] >> [1, 2, 3]
//export function eliminarDuplicados(arr: number[]): number[] {}


function eliminarDuplicados(arr: number[]): number[] {
    return Array.from(new Set(arr));  // Se usa new Set para eliminar duplicados
            // Array.from() permite crear Arrays de objetos iterables
}

let arr = [1,6,2,6,4,2,5,3,5,4,3];
console.log(eliminarDuplicados(arr));

// TERMINADO

let mediana : number [] = [1,2,3,4,5];
console.log ("\n" + mediana)