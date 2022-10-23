// const arreglo = new Array(100);
const arreglo = [1, 2, 3, 4];

// No utilizar el .push, ya que modifica el objeto principal, CUANDO SE QUIERA INSERTA ALGO A UN ARREGLO SE UTILIZA EL OPERADOR SPREAD
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [...arreglo, 5];
// arreglo.push(5);

// .map crea un nuevo arreglo y devuelve con un RETURN los valores esperados
const arreglo3 = arreglo2.map((number) => {
  return number * 2;
});

console.log(`RobinDev - arreglo`, arreglo);
console.log(`RobinDev - arreglo`, arreglo2);
console.log(`RobinDev - arreglo3`, arreglo3);
