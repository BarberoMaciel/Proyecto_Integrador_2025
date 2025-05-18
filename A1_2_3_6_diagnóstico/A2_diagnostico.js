const persona = {
    nombre: "Lucía",
    edad: 28,
    profesion: "Diseñadora",
  };

// 1. Mostrar en consola un mensaje que diga: "Lucía tiene 28 años y trabaja
// como Diseñadora." usando desestructuración.

console.log(`${persona.nombre} tiene ${persona.edad} años y trabaja como ${persona.profesion}.`);

persona.ciudad = "Rosario"

console.log(persona.ciudad);