//(1) Para tener control de la gente que hay en una disco el gerente quiere saber cuantas personas de diferentes edades han entrado. 
// No se han permitido la entrada a menores de 18 ni mayores de 40. Para la carga de los datos se usa la función aleatorio(Math.floor(Math.random() * (max - min + 1) ) + min)
// Se sabe que la cantidad total de personas dentro del local es de 270
// Se quiere saber: 	
// Cuántas personas son menores de 21 años
// Cuántas personas mayores o igual a 21 años
// Cuántas personas en total
//Ej: edades = [18, 19, 20, 21, 25, 40]
//    resultado: [3,3]

// export function clasificarEdades(n: number): number[] {}

// Asumimos que n es la cantidad de personas dentro del local
function clasificarEdades(n:number):number[]{
  let edades:number[]=new Array();
  let mayorIgual21, menor21:number;
  let clasifEdades:number[]=new Array(2);
mayorIgual21=0;
menor21=0;

for (let indice = 0; indice < n; indice=indice+1) {
       edades[indice]=(Math.floor(Math.random() * (40 - 18 + 1) ) + 18);
      if (edades[indice]>=21) {
                  mayorIgual21=mayorIgual21+1;
                  } else {
                          menor21=menor21+1;
                        }
}

clasifEdades=[mayorIgual21,menor21];    
console.log(edades);
console.log (`Cantidad de personas que ingresaron es ${n}`);
return clasifEdades;
}


let cantPersonas: number;
let clasificador:number[]=new Array(2);
cantPersonas=270;
clasificador=clasificarEdades(cantPersonas);
console.log(clasificador);

// TERMINADO