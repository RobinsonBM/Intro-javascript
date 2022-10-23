// Desestructuracion
// Asignacion Desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// const { nombre: nombre2, edad, clave } = persona;

// console.log(`RobinDev - persona`, nombre2);
// console.log(`RobinDev - persona`, edad);
// console.log(`RobinDev - persona`, clave);

const retornaPersona = ({ clave, nombre, edad, rango = "Capitan" }) => {
  //   console.log(`RobinDev`, nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 12.54857,
      lng: -12.23456,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng,
  // De esta manera tambien se puede desestructurar un objeto dentro de otro
  //   latlng: { lat, lng },
} = retornaPersona(persona);
const { lat, lng } = latlng;

console.log(`RobinDev - avenger`, nombreClave, anios);
console.log(lat, lng);
