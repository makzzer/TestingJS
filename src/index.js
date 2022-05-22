//funciones

function sumar(num1) {
  console.log(num1);
}

sumar(100);

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

const sumar3 = (num3) => console.log(num3);

sumar3(90);

//cuando tengo dos paremetros tengo que colocar si o si los parentesis

const sumar4 = (num4, num5) => console.log(num4 + num5);

sumar4(70, 8);

//¿que pasa si queremos retornar algo? tenemos que guardarlo en
//una constante donde se almacene

const sumar5 = (num6, num7) => {
  return num6 + num7;
};

const resultado = sumar5(100, 200);

console.log(resultado);
