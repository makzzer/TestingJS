//funciones

function sumar(num1) {
  console.log(num1);
}

sumar(40);

//Arrow Functions

//declaramos una constante y este va a recibir los parametros ()
//pero no colocamos function sino que colocamos la flecha =>
//así le paso un parametro

const sumar2 = (num2) => {
  console.log(num2);
};
sumar2(80);

//Reduccion de codigo
//cuando tengo solo un parametro, puedo omitir los parentesis
//ahora si son mas de un parametro si o si tengo que poner parentesis
//cuando es solo uno , son opcionales

//ejemplo con un parametro

const sumar3 = (num3) => {
  console.log(num3);
};
sumar3(60);
