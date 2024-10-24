// ---- (4 M) Dada una cadena de texto, cuenta y devuelve el número de vocales presentes en la cadena.
// Ejemplo: 'hola mundo' >> 4

//export function contarVocales(cadena: string): number {}


import * as rls from "readline-sync"

function contarVocales (cadena:string): number {

let palabra : string = rls.question ("Ingrese la palabra para contar la cantidad de vocales: ");
let todasVocales : string ="aeiouAEIOU";
let contador : number = 0;

for (let vocales of palabra){ // for... of Ejecuta un bloque de código para cada elemento de un objeto iterable.
    if (todasVocales.includes (vocales)){  // includes() Permite determinar si una cadena de texto se encuentra incluida dentro de la otra.
        contador++
    }
}   return (contador)
}

console.log (contarVocales(""))

// TERMINADO