/* Manejo del DOM */

const personajes = document.getElementById('personajes');
const genero = document.getElementById('genero');
const casa = document.getElementById('casa');
const rol = document.getElementById('rol');
const ascendente = document.getElementById('ordenasc');
const descendente = document.getElementById('ordendesc');

const cardJSON = () => {
  fetch('https://raw.githubusercontent.com/SusanaCahuantico/LIM009-DL-2.0/master/src/data/potter.json')
    .then(res => res.json())
    .then(datos => {
      listaPotter(datos);
      extraerData(datos);
      filtrarCasa(datos);
      filtrarRolStudent(datos);
      ordenAsc(datos);
      ordenDesc(datos);
    });
};
cardJSON();

/* imprimir la lista de los personajes: */
const listaPotter = (datos) => { 
  let mostrar = '';
  for (let i = 0; i < datos.length ; i++) {
    mostrar += `
    <section id="box-personajes" class="col-lg-4 col-" >
       <div id="" class= "">
       <img class="Imagenes" src="${ datos[i].image}"/>
        <div>
        <p> Nombre: ${ datos[i].name} </p>
        <p> Casa: ${ datos[i].house} </p>
        <p> Especie:${ datos[i].species} </p>
        <p> Rol: ${datos[i].hogwartsStaff ? "Staff" : "Estudiante"} </p>
       `;
    if (typeof datos[i].yearOfBirth === "number") {
      mostrar += 
     `<div> Edad: ${2019 - datos[i].yearOfBirth} </div>
     `;
    } else {
      mostrar += `<p> Edad: No se encontro </p>
    `;
    }
    mostrar += ` 
       <p> Actor: ${ datos[i].actor} </p>
       </div>
       </div>
    </section>   
       `;
  }
  personajes.innerHTML = mostrar;
};

const extraerData = (datos) => {
  genero.addEventListener('change', () => {
    const imprimirGenero = window.potter.filtrarPorGenero(datos, genero.value);
    listaPotter(imprimirGenero);
  });
};

const filtrarCasa = (datos) => {
  casa.addEventListener('change', () => {
    const imprimirCasa = window.potter.filtrarPorCasa(datos, casa.value);
    listaPotter(imprimirCasa);
  });
};

const filtrarRolStudent = (datos) => {
  rol.addEventListener('change', () => {
    if (rol.value === "hogwartsStudent") {
      const student = potter.filtrarPorRolStudent(datos, rol.value);
      listaPotter(student);
    } else if (rol.value === "hogwartsStaff") {
      const staff = potter.filtrarPorRolStaff(datos, rol.value);
      listaPotter(staff);
    } 
  });
};

const ordenAsc = (datos) => {
  ascendente.addEventListener('click', () => {
    const ordenAscendente = potter.ordenDescendente(datos);
    listaPotter(ordenAscendente); 
  });
};

const ordenDesc = (datos) => {
  descendente.addEventListener('click', () => {
    const ordenDescendente = potter.ordenAscendente(datos);
    listaPotter(ordenDescendente);
  });
};