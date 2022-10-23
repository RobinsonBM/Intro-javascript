// const saludar = function (nombre) {
//   return `Hola, ${nombre}`;
// };

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo!!`;

// console.log(`RobinDev - saludar`, saludar("Goku"));
console.log(`RobinDev - saludar2`, saludar2("Vegeta"));
console.log(`RobinDev - saludar3`, saludar3("Goku"));
console.log(`RobinDev - saludar4`, saludar4());

// const getUser = () => {
//   return {
//     id: "abd123",
//     username: "El_Papi1502",
//   };
// };

// Si se desea enviar un objeto que se esta retornando como el la funcion anterior de una manera mas implicita se debe decirle a JS que el cuerpo es un objeto colocandolo dentro de unos parentesis
const getUser = () => ({
  id: "abd123",
  username: "El_Papi1502",
});

console.log(`RobinDev - getUser`, getUser());

// TAREA
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar el objeto implicito
// 3. Pruebas

function getUsuarioActivo(nombre) {
  return {
    uid: "ABC2345",
    username: nombre,
  };
}

// 1. Transformar a una funcion de flecha
// const getUsuarioActivo = (nombre) => {
//   return {
//     uid: "ABC2345",
//     username: nombre,
//   };
// };

// 2. Tiene que retornar el objeto implicito
// const getUsuarioActivo = (nombre) => ({
//   uid: "ABC2345",
//   username: nombre,
// });

const usuarioActivo = getUsuarioActivo("Robinson");
// 3. Pruebas
console.log(`RobinDev - usuarioActivo`, usuarioActivo);
