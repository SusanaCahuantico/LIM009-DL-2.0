/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const cargarJSON = () => {
  fetch('https://raw.githubusercontent.com/SusanaCahuantico/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res => res.json())
    .then(datos => {
      recorrerData(datos);
    });
};
cargarJSON();

// Creando función lista de personajes de Harry Potter:
const recorrerData = (datos) => {
  let arrLista = [];
  for (let i = 0; i < datos.length; i++) {
    arrLista.push({
      image: datos[i].image,
      name: datos[i].name,
      house: datos[i].house,
      species: datos[i].species,
      hogwartsStaff: datos[i].hogwartsStaff,
      hogwartsStudent: datos[i].hogwartsStudent,
      yearOfBirth: datos[i].yearOfBirth,
      actor: datos[i].actor,
      gender: datos[i].gender});
  } 
  return arrLista;
};

// Creando mi función de filtrado por Genero:

const filtrarPorGenero = (datos, filterPor) => {
  const dataNueva = datos.filter(datito => datito.gender === filterPor);
  return dataNueva;
};

/* Creando mi función de filtrado por Casas: */

const filtrarPorCasa = (datos, filterBy) => {
  const nuevaData = datos.filter(elemento => elemento.house === filterBy);
  return nuevaData;
};

// Creando mi función de filtrado por rol Estudiante:

const filtrarPorRolStudent = (datos) => {
  const nuevaData = datos.filter(elemento => elemento.hogwartsStudent === true);
  return nuevaData;
};

// Creando mi función de filtrado por rol Staff:

const filtrarPorRolStaff = (datos) => {
  const nuevaData = datos.filter(element => element.hogwartsStaff === true);
  return nuevaData;
};

/* Creando mi función de orden ascendente */
const ordenEdad = (datos) => {
  let orden = datos.sort((a, b) => {
    if (a.yearOfBirth > b.yearOfBirth) {
      return 1;
    } else {
      return -1;
    }
  }); 
  return orden;
};

window.potter = {
  cargarJSON,
  recorrerData,
  filtrarPorGenero,
  filtrarPorCasa,
  filtrarPorRolStudent,
  filtrarPorRolStaff,
  ordenEdad
};