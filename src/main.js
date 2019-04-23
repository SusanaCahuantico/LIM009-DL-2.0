/* Manejo del DOM */

const personajes = document.getElementById('personajes');
const genero = document.getElementById('genero');
const casa = document.getElementById('casa');
const rol = document.getElementById('rol');
//const rolStudent = document.getElementById('rol-student');
//const rolStaff = document.getElementById('rol-staff');

const cardJSON = () => {
    fetch('https://raw.githubusercontent.com/SusanaCahuantico/LIM009-DL-2.0/master/src/data/potter.json')
    .then( res => res.json() )
    .then( datos => {
        listaPotter(datos);
        extraerData(datos);
        filtrarCasa(datos);
        filtrarRolStudent(datos);
        // filtrarRolStaff(datos);
    })
}
 cardJSON();

/* imprimir la lista de los personajes: */
const listaPotter = (datos) => {
    let mostrar = '';
    for (let i=0; i<datos.length ; i++) {
        const rest = 2019 - datos[i].yearOfBirth;
       let box = `
       <div>
       <figure>
       <img src="${ datos[i].image}"/>
       </figure>
       <p> Nombre: ${ datos[i].name} </p>
       <p> Casa: ${ datos[i].house} </p>
       <p> Especie:${ datos[i].species} </p>
       <p> Rol: ${datos[i].hogwartsStaff ? "Staff" : "Estudiante"} </p>
       <p> Edad: ${ rest } </p>
       <p> Actor: ${ datos[i].actor} </p>
       </div>
       `;
       mostrar += box;
    }
   personajes.innerHTML = mostrar;
};

const extraerData = (datos) => {
    genero.addEventListener('change', () => {
        const imprimirGenero = window.potter.filtrarPorGenero(datos, genero.value);
        listaPotter(imprimirGenero);
    })
};

const filtrarCasa = (datos) => {
    casa.addEventListener('change', () => {
        const imprimirCasa = window.potter.filtrarPorCasa(datos, casa.value);
        listaPotter(imprimirCasa);
    })
};

const filtrarRolStudent = (datos) => {
    rol.addEventListener('change', () => {
       if ( rol.value === "hogwartsStudent") {
           const student = window.potter.filtrarPorRolStudent(datos, rol.value);
           listaPotter(student);
       } else if ( rol.value === "hogwartsStaff") {
           const staff = window.potter.filtrarPorRolStaff(datos, rol.value);
           listaPotter(staff);
       }
    })
};