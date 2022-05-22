//template string

//me permite usar logica de javascript dentro de un string,
// en vez de concatenar lo arranco con esas comillas
// especiales `, $ antes de las variables y {} para
//encerrar las variables

const numero = (num1, num3) => `el numero es : ${num1 + num3}`;

const numero2 = numero(2, 266);
console.log(numero2);
