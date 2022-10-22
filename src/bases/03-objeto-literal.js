const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 2437865,
    lat: 14.34654,
    lng: 45.56435,
  },
};

// console.table(persona);

// Esto no se debe hacer JAMAS, es hacer la copia de la referencia y no una copia del objeto
// const persona2 = persona;

// Utilizar el operador Spread para clonar un objeto
const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);
