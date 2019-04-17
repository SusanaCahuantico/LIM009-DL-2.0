/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const json = () => {
    fetch('https://raw.githubusercontent.com/SusanaCahuantico/LIM009-DL-2.0/master/src/data/potter.json')
    .then( res => res.json() )
    .then( datos => {
       pintar(datos)
    })
}
json();

const pintar = (datos) => {
    for(let i=0; i<datos.length; i++){
        // eslint-disable-next-line no-console
        console.log(datos[i].name)
        // eslint-disable-next-line no-console
        console.log(datos[i].species)
    }
}

window.potter = {
    json,
}