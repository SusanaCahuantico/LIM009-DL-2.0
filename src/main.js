/* Manejo del DOM */
// const allData = 'https://raw.githubusercontent.com/SusanaCahuantico/LIM009-DL-2.0/master/src/data/potter.json';

const personajes = document.getElementById('personajes');

const cardJSON = () => {
    fetch('https://raw.githubusercontent.com/SusanaCahuantico/LIM009-DL-2.0/master/src/data/potter.json')
    .then( res => res.json() )
    .then( datos => {
        listaPotter(datos)
    })
}
 cardJSON();

/* imprimir la lista de los personajes: */

const listaPotter = (datos) => {
    let mostrar = '';
    for (let i=0; i<datos.length ; i++) {
       let box = `
       <div>
       <figure>
       <img src="${ datos[i].image}"/>
       </figure>
       <p> Nombre: ${ datos[i].name} </p>
       <p> Casa: ${ datos[i].house} </p>
       <p> Especie:${ datos[i].species} </p>
       <p> Actor: ${ datos[i].actor} </p>
       </div>
       `;
       mostrar += box;
    }
   personajes.innerHTML = mostrar;
};

listaPotter();
