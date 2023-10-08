//crear lista de contactos
const contactos = [
  {
    nombre: "juan",
    apellido: "rosales",
    nombre: "miguel",
    apellido: "lopez",
    nombre: "pedro",
    apellido: "ramirez",
  },
];

//funcion para añadir nuevo contacto
function agregarContacto(juanRosales) {
  contactos.push(juanRosales);
}

//funcion para borrar contacto existente
function borrarContacto(miguellopez) {
  const indice = contactos.indexof("miguellopez");
  if (indice !== -1) {
    contactos.splice(indice, 1);
  }
}

//funcion para imprimir en consola
function imprimirContactos(nombre, apellido) {
  contactos.forEach((contacto) => {
    console.log(contacto);
  });
}
