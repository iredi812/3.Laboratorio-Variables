/*
Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
*/

//Enum para géneros musicales
enum GeneroMusical {
  PopRock = "🎵 Pop Rock",
  Rock = "🎸 Rock",
  HardRock = "🤘 Hard Rock",
  Clasica = "🎼 Clásica",
}

//Interfaz grupo musical
interface GrupoMusical {
  nombre: string;
  año: number;
  activo: boolean;
  generoMusical: GeneroMusical;
}

//Estilos para name del grupo
const estiloNombre =
  "font-weight: bold; font-size: 16px; background-color: green;";

//Grupos musicales
const theBeatles: GrupoMusical = {
  nombre: "The Beatles",
  año: 1960,
  activo: true,
  generoMusical: GeneroMusical.PopRock,
};

const queen: GrupoMusical = {
  nombre: "Queen",
  año: 1970,
  activo: false,
  generoMusical: GeneroMusical.Rock,
};

const acdc: GrupoMusical = {
  nombre: "AC/DC",
  año: 1973,
  activo: true,
  generoMusical: GeneroMusical.HardRock,
};

const beethoven: GrupoMusical = {
  nombre: "Ludwig van Beethoven",
  año: 1770,
  activo: false,
  generoMusical: GeneroMusical.Clasica,
};

const theRollingStones: GrupoMusical = {
  nombre: "The Rolling Stones",
  año: 1962,
  activo: true,
  generoMusical: GeneroMusical.Rock,
};

//Resultado:
console.log(
  `%c${theBeatles.nombre}%c - Año: ${theBeatles.año}, Activo: ${theBeatles.activo}, Género: ${theBeatles.generoMusical}`,
  estiloNombre,
  ""
);
console.log(
  `%c${queen.nombre}%c - Año: ${queen.año}, Activo: ${queen.activo}, Género: ${queen.generoMusical}`,
  estiloNombre,
  ""
);
console.log(
  `%c${acdc.nombre}%c - Año: ${acdc.año}, Activo: ${acdc.activo}, Género: ${acdc.generoMusical}`,
  estiloNombre,
  ""
);
console.log(
  `%c${beethoven.nombre}%c - Año: ${beethoven.año}, Activo: ${beethoven.activo}, Género: ${beethoven.generoMusical}`,
  estiloNombre,
  ""
);
console.log(
  `%c${theRollingStones.nombre}%c - Año: ${theRollingStones.año}, Activo: ${theRollingStones.activo}, Género: ${theRollingStones.generoMusical}`,
  estiloNombre,
  ""
);
