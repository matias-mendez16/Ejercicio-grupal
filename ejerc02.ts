// Dado un número `n`, verifica si es un número primo. Devuelve `true` si es primo, de lo contrario, devuelve `false`.
// Ejemplo: 
// 7 >> true
// 10 >> false

//export function esPrimo(n: number): boolean {}

function esPrimo (n: number) : boolean {
let primo : boolean = false
    if((n >3) && ((n % 2)==0 || (n % 3)==0 ) ) {
                            primo=false;
                    } else {
                        primo=true
                    }
    return (primo)
}

console.log ("1 " + esPrimo(1))
console.log("2 " + esPrimo(2));
console.log("3 " + esPrimo(3));
console.log("4 " + esPrimo(4));
console.log("5 " + esPrimo(5));
console.log("6 " + esPrimo(6));
console.log("7 " + esPrimo(7));
console.log("8 " + esPrimo(8));
console.log("9 " + esPrimo(9));
console.log("10 " + esPrimo(10));
console.log("11 " + esPrimo(11));

// TERMINADO