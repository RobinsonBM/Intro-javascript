import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Tarea
//     // Importar el getHeoreByID de 08-imp-exp-js
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     // reject("No se pudo encontrar el heroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log(`RobinDev - heroe`, heroe);
//   })
//   .catch((err) => {
//     console.warn(err);
//   });

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      // Importar el getHeoreByID de 08-imp-exp-js
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el heroe");
      }
      //   console.log(`RobinDev - heroe`, heroe);
    }, 2000);
  });
};

getHeroeByIdAsync(1).then(console.log).catch(console.warn);
