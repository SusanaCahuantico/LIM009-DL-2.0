/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// Creando mi función de filtrado por Genero:

const filtrarPorGenero = (datos, genero) => {
  const dataNueva = datos.filter(elemento => elemento.gender === genero);
  return dataNueva;
}; 

/* Creando mi función de filtrado por Casas: */

const filtrarPorCasa = (datos, filterBy) => {
  const nuevaData = datos.filter(elemento => elemento.house === filterBy);
  return nuevaData;
};

// Creando mi función de filtrado por rol Estudiante:

const filtrarPorRolStudent = (datos) => {
  const nuevaData = datos.filter(elemento => elemento.hogwartsStudent);
  return nuevaData;
};

// Creando mi función de filtrado por rol Staff:

const filtrarPorRolStaff = (datos) => {
  const nuevaData = datos.filter(element => element.hogwartsStaff);
  return nuevaData;
};

/* Creando mi función de orden ascendente */
const ordenDescendente = (datos) => {
  const orden = datos.sort((a, b) => {
    if (a.yearOfBirth > b.yearOfBirth) {
      return 1;
    } else {
      return -1;
    }
  }); 
  return orden;
};

const ordenAscendente = (datos) => {
  const ordenA = datos.sort((a,b) => {
    if (a.yearOfBirth < b.yearOfBirth) {
      return 1;
    } else {
      return -1;
    }
  });
  return ordenA;
};

window.potter = {
  filtrarPorGenero,
  filtrarPorCasa,
  filtrarPorRolStudent,
  filtrarPorRolStaff,
  ordenDescendente,
  ordenAscendente
};