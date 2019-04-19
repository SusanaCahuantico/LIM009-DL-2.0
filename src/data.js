/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
// const personajes = document.getElementById('personajes');

const cargarJSON = () => {
    fetch('https://raw.githubusercontent.com/SusanaCahuantico/LIM009-DL-2.0/master/src/data/potter.json')
    .then( res => res.json() )
    .then( datos => {
        recorrerData(datos)
    })
}
cargarJSON();

// Creando función lista de personajes de Harry Potter:
const recorrerData = (datos) => {
    let arrLista = [];
    for(let i=0; i<datos.length; i++){
        arrLista.push({
            image: datos[i].image,
            name: datos[i].name,
            house: datos[i].house,
            species: datos[i].species,
            hogwartsStaff: datos[i].hogwartsStaff,
            hogwartsStudent: datos[i].hogwartsStudent,
            yearOfBirth: datos[i].yearOfBirth,
            actor: datos[i].actor
        });
    } 
   // console.log(arrLista);
    return(arrLista);
}

/* Creando mi función de orden ascendente 
const orderAsc = (datos) => {
    let
} */
window.potter = {
    cargarJSON,
    recorrerData
}