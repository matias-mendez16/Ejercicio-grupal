// Convertir un número a binario.
// Crea una función que reciba un número entero positivo y devuelva su representación en binario como una cadena de texto.
// Ejemplo: 255 >> "11111111"

//export function convertirABinario(n: number): string {}


function convertirABinario (n : number): string {
    return n.toString(2) // El método toString comprueba su primer argumento, e intenta devolver una cadena de representación en la base especificada. ------ // Es 2 porque es la base sobre la cual representa el numero.
}

console.log (convertirABinario(255))

// TERMINADO