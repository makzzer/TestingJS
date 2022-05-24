//Filter

//Tiene dos propositos,
//1) crea un nuevo array con todos los elementos que
//cumplan una condicion
//por ejemplo filtrar poke.name = bulbasaur , me trae solo el objeto con esas caracteristicas
//ahora, si tuviera por ejemplo un atributo "poder", podría filtrar
//todos los pokemones que tuvieran poke.poder > 5, y me devolveria mas de un objeto
//esto es para saber que el resultado puede ser mas de un objeto

//2) otra alternativa del filter es para descartar del array de resultados
//algun pokemon

const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();

    //lo siguiente solo me va a traer a bulbasaur
    //const arrayNombres = data.results.filter(poke => poke.name === 'bulbasaur')
    //lo siguiente me va a traer todo menos a bulbasaur
    const arrayNombres = data.results.filter(
      (poke) => poke.name !== "bulbasaur"
    );
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemones();
