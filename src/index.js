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

// a la funcion anterior tambien le puedo sacar el return como por
//ejemplo en la funcion siguiente
//tambien le puedos sacar las llaves

const sumar6 = (num8, num9) => num8 + num9;
const resultadosumar6 = sumar6(10, 20);

console.log(resultadosumar6);

//mas practica
//sin parametros
const mensaje = () => {
  return "hola soy makzzer";
};

const resultadostring = mensaje();

console.log(resultadostring);

//con un parametro
//puedo sacar los parentesis
const mensaje2 = (nombre) => {
  return "hola soy " + nombre;
};

const resultadostring2 = mensaje2("vladimir");

console.log(resultadostring2);

//como estamos retornado, podemos omitir el return y las llaves
//la funcion de flecha va a retornar todo lo que esté del lado derecho
//en este caso dejo parentesis, porque cuando este trabajando con react
//voy a retornar etiquetas html

//probar de hacer el "return" con un template string en ves de concatenar la variable nombre
const mensaje3 = (nombre) => "hola soy " + nombre;

const resultadostring3 = mensaje3("jose luis");

console.log(resultadostring3);

//agregando esto antes del arrow function (num = 0) le digo que
//en num si no manda ningun numero como parametro, como default
//utiliza el cero

const sumatres = (num = 0) => {
  console.log(num + 3);
};

sumatres(9);
