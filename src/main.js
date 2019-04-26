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
  let mostrar = "";
  datos.forEach((element) => {
    mostrar += `
    <section id="box-personajes" class="col-lg-4 col-xs-6" >`;
    if (element.house === "Gryffindor") {
      mostrar += `
       <div id=gry>
       <img class="bander" src="https://i.pinimg.com/originals/bc/a9/f9/bca9f91e0175d3ea40f24788e5e6837f.jpg">
       </div>`;
    }
    if (element.house === "Slytherin") {
      mostrar += `
       <div id=sly>
       <img class="bander" src="https://www.logolynx.com/images/logolynx/53/5390e974544de6279c4d9cb6253e3a2c.jpeg">
       </div>`;
    }
    if (element.house === "Ravenclaw") {
      mostrar += `
       <div id="rav">
       <img class="bander" src="https://i0.wp.com/bloghogwarts.com/wp-content/uploads/2008/05/ravenclawcrest.jpg">
       </div>`;
    }
    if (element.house === "Hufflepuff") {
      mostrar += `
       <div id="huf">
       <img class="bander" src="https://i2.wp.com/bloghogwarts.com/wp-content/uploads/2008/05/hufflepuffcrest.jpg">
       </div>`;
    }
    if (element.house === "") {
      mostrar += `
       <div>
       <img id="hollow" class="bander" src="https://img2.freepng.es/20180406/tpe/kisspng-symbol-multiplication-sign-computer-icons-black-background-5ac79361584457.4638442215230288333616.jpg">
       </div>`;
    }
    mostrar += `
    <div class="caracteristicas col-xs-12 col-lg-12"> 
     <div class="imglogo col-xs-9 col-lg-9">
     <img id="imagenlogo" src="${ element.image}"/>
        <p class="tittle">${ element.name} </p>
        <p class="tittle">${ element.house} </p> 
        <p> Especie:${ element.species} </p>
        <p> Rol: ${element.hogwartsStaff ? "Staff" : "Estudiante"} </p>
       `;
    if (typeof element.yearOfBirth === "number") {
      mostrar += 
     ` <p> Edad: ${2019 - element.yearOfBirth} </p> 
     `;
    } else {
      mostrar += `<p> Edad: No se encontro </p>
    `;
    }
    mostrar += `  
       <p> Actor: ${element.actor} </p>
       </div>
       </div>
    </section>`;
  });
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