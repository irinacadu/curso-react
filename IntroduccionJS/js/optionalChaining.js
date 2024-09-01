// Optional chaining (?) permite llamara a valores de propiedades sin verificar que existan o no

 const alumno =  {
    nombre : "irina",
    curso : 3,
    clase: "A",
    aprobado: true
 }

 //utilizamos el optional js continuará ejecutando el código sin lanzar un error

console.log(alumno.examenes?.examen)

// Nulish (??) devuelve el valor derecho cuando el de la izquierda es nulo
const page = null ?? 1 // si la pagina no existe le asignará el valor 1
console.log(page)