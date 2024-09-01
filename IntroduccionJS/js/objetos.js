//Objetos key: value
console.log("** Declarar Objeto **");
const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: false,
};

const cliente = {
  nombre: "Irina",
  premium: true,
  direccion: {
    calle: "nombreCalle",
  },
};

console.table(producto);
console.table(cliente);

/*Destructuring :
 extraer una valor y generar una variable (**PRODUCTO**)*/
console.log("** Destructuring **");

const { nombre, precio, disponible } = producto;

console.log("Nueva variable nombre producto", nombre);
console.log("Nueva variable precio producto", precio);
console.log("Nueva variable disponible producto", disponible);

// Destructuring de dos o mas objetos: ( ** CLIENTE - PRODUCTO**)
console.log("** Destructuring de dos o mas objetos **");

// Tenemos dos objetos que tienen una propiedad llamada igual. Cuando queremos extraer variable debemos asignar un nombre a la misma.
const { nombre: nombreCliente } = cliente;
console.log("Nueva variable nombre producto", nombre);
console.log("Nueva variable  nombre cliente", nombreCliente);

// crear una variable de la propiedad de un objeto que está dentro de otro objeto (**CLIENTE**)
const {
  direccion: { calle },
} = cliente;
console.log("Nueva variable nombre calle", calle);

/* Object Literal Enhacement:
Asociamos variables individuales a objetos. Si la llave  y el valor tienen el mismo nombre solo necesitamos renombrear la variable al objeto. (**USUARIO**)*/

console.log("** Object Literal Enhacement **");
const autenticado = true;
const nombre1 = "Irina";

const usuario = {
  autenticado,
  nombre: nombre1,
};

console.log(usuario);

/*Manipular un objeto (**PRODUCTO**)*/
console.log("** Manipular un objeto **");
//reescribir un valor
console.log("1. reescribir un valor");
producto.disponible = true;
console.log(producto);

//se le pueden añadir propiedades si no existe
console.log("2.añadir propiedades");
producto.imagen = "imagen.jpg";
console.log("Nueva propiedad", producto.imagen);

// eliminar propiedades del objeto
console.log("3.eliminar propiedades");
delete producto.precio;
console.log("Propiedad eliminada", producto.precio);

// evitar añadir propiedades pero si modificar los valores de las propiedades existentes
console.log("4.Object.seal");
Object.seal(producto);
producto.nombre = "PC";
console.log("Nombre cambiado", producto.nombre);

// evitar que se puedan modificar las propiedades
console.log("4.Object.freeze");
Object.freeze(producto);
producto.tienda = "condomina";
console.log("Nueva propiedad", producto.tienda); // no aparecerá la propiedad "tienda"

/**
 * Unir dos o mas objetos
 */

console.log("** Unir dos o mas objetos **");

// objeto dentro de nuevo objeto

const carrito = {
  cantidad: 1,
  producto,
};
console.log("Carrito de la compra 1 ", carrito);

// nuevo objeto con valor extraido de otro

const carrito2 = {
  cantidad: 1,
  ...producto, // con "..." coloca el contenido del objeto y no el objeto
};

console.log("Carrito de la compra 2 ", carrito2, nombre);

// unión de dos objetos existentes en uno plano. Tenemos que tener en cuenta que tanto el producto como el cliente tiene una propiedad lamada "nombre" y al crear el objeto solo va a recoger una de las dos

const objetoProductoCliente = {
  ...producto,
  ...cliente ,
  producto : producto.nombre
};

console.log("Objeto producto-cliente", objetoProductoCliente);
