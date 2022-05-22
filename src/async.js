//Funcion Async
//la funcion asincronica nos devuelve un objeto AsyncFunction

//fetch no esta deshabilitado, lo podemos seguir usando pero async y away nos ahorra codigo

//Cuando trabajamos con async tengo que hacer una funcion

//async await
//await siempre tiene que estar dentro de un async para funcionar

//await antes del fech significa que esperemos la peticion del fetch como en el ejemplo de objetos II
//pero ahora guardo toda esa respuesta dentro de la constante res, como el ejemplo anterior que hacia res.json()
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();

    data.results.forEach((element) => {
      console.log(element.name);
    });
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemones();
