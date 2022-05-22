const mascota = {
  nombre: "Beti",
  edad: 2,
  vivo: true
};

console.log(mascota.nombre);

mascota.id = 1;
mascota.comida = ["granitos", "porotitos", "cereal"];

console.log(mascota.comida[4]);

//destructuring objects

const nombreMascota = mascota.nombre;
const { edad, vivo } = mascota;

console.log(edad);
console.log(vivo);
console.log(nombreMascota);
