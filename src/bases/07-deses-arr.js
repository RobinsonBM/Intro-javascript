// Desestructuracion de Arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [, , p3] = personajes;

console.log(p3); //Trunk

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// TAREA
const usestate = (valor) => {
  return [
    valor,
    () => {
      console.log("hola mundo");
    },
  ];
};

// 1. El primero valor del arr se llamara nombre
// 2. El segundo valor del arr se llamara setNombre

const [nombre, setNombre] = usestate("Goku");
console.log(`RobinDev - nombre`, nombre);
setNombre();
