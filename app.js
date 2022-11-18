/*Enunciado: Crea una función que retorne el número total de bumeranes
de un array de números
enteros e imprima cada uno de ellos.
- Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos, en el que el
  primero y el último son iguales, y el segundo es diferente. Por ejemplo [2, 1, 2].
- En el array [2, 1, 2, 3, 3, 4, 2, 4] hay 2 bumeranes ([2, 1, 2] y [4, 2, 4]).*/
let cont =0;
let mensaje = "";
const funBoomerang =(arr)=>{
  for(let i =0; i < arr.length; i++){
  	if(arr[i] != arr[i+1] && arr[i] == arr[i+2]){
    	cont +=1;
      	mensaje = mensaje + `[${arr[i]}, ${arr[i+1]}, ${arr[i+2]}], `;
    }
  }
  return `Los boomerangs son: ${mensaje} y el total de boomerangs son: ${cont}`;
}
let array = [2, 3, 2, 3, 1, 2, 3, 2, 2,3,1,2,1];
console.log(funBoomerang(array));