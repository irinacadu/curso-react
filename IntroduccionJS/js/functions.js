// Declaración de funciones

// en este caso estamos enviando parámetros antes de tener la función. Esto no nos dará error

sumar(2, 4);
sumar(123123, 1);
sumar(5, 5);

function sumar(num1, num2) {
  result = num1 + num2;
  console.log(result);
  return result;
}

// function expression en este caso si llamamos a la función líneas antes de ver su declaración no s dará error pues para JS aun no está creada.

// sumar2(3,4)
const sumar2 = function ( numero1 = 0 , numero2 = 2){
console.log(numero1+numero2)
}
sumar2(3,4)

// arrow functions se parecen mucho a las function expressions

const sumar3 = (num1= 0, num2 = 0)=>{
    console.log(num1+num2)
}
sumar3(21,3)
