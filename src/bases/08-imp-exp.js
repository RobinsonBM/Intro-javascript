import heroes from "../data/heroes";
// console.log(`RobinDev - owners`, owners);
// console.log(`RobinDev - heroes`, heroes);

// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

// const getHeroeById = (id) => {
//     return heroes.find((heroe) => {
//       return heroe.id === id;
//     });
//   };

// const getHeroeById = (id) => {
//   return heroes.find((heroe) => heroe.id === id);
// };

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(1));

const getHeroesByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

// console.log(getHeroesByOwner("DC"));

export { getHeroeById, getHeroesByOwner };
