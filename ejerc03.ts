// Dada una cadena de texto, devuelve la cadena invertida.
// Ejemplo: "hola" -> "aloh"
// export function invertirCadena(cadena: string): string {}

function invertirCadena (cadena : string) : string {
let invCadena : string = ""
for (let indice = (cadena.length-1); indice >=0; indice=indice-1) {
    invCadena=invCadena + cadena.charAt(indice);
    
}
    return(invCadena);
}

console.log(invertirCadena("hola mundo"));

// TERMINADO