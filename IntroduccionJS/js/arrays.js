// Declaración arrays

const numeros = [20, 30, 40, 50, 60, 70, 100];
const tecnologias = ['HTML','JS','CSS','Java','Next','React']

// Métodos Arrays
//numeros.shift() // elimina el primer valor de un array

//Crear un nuevo array con algunos valores de uno anterior
const numeros2 = numeros.filter(function (num) {
  return num !== 20; // Filtra todos los números que no sean 20
});
console.log(numeros2);


const numeros3 = numeros.map(function (num) {
    if(num === 30){
        return 35;
    }else{
        return num
    }
});

console.log(numeros3);

//Destructuring arrays
console.log("** DESTRUCTURING ARRAYS **")
const [numero20] = numeros; // trae el valor de la posición. Si solo ponemos una variable nos traerá el valor de la posición 0 del array
console.log(numero20)

// si queremos extraer un valor concreto
const [, , , ,numero60] = numeros
console.log(numero60)


//Métodos arrays
console.log("***ARRAY METHODS***")

// filter

const java =  tecnologias.filter((tech)=>tech !== "Java")
console.log(java)

// Include comprueba que un elemento existe

const htmlExists = tecnologias.includes('HTML')

console.log(htmlExists)