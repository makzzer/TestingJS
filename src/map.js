//.map()
//es un metodo que crea un nuevo array con los llamados a la funcion indicada

//Ejemplo con Async
//Tambien se podría recorrer el array con un Foreach y guardarlo en un array para mostrarlo por console.log
//pero en este caso lo voy a hacer con .map()
//una vez que me devuelve el poke.name guardo ese array en uno nuevo y lo muestro por consola

const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    console.log(data.results);
    //aca viene la magia donde guardo esos data.results en un array nuevo que .map()
    //crea automaticamente
    //map va a tomar una funcion de flecha donde su parametro será cada uno de nuestros objetos, osea los pokemones
    const arrayNombres = data.results.map((poke) => poke.name);
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemones();
