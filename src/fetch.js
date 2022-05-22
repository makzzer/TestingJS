//para que me traiga todos los pokemones uso el .then(), osea espera una "promesa"
//agrego .json porque lo que me trae es un json

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  //con el segundo then, ya podria pintar en un console.log la data
  //data es el parametro, por eso accedo a los valores con data.results
  .then((data) => {
    //console.log(data.results))
    //recorrer el array de datos devueltos
    data.results.forEach((element) => {
      console.log(element.name);
    });
  })
  //intentamos hacer la promesa en cualquiera de los casos pero si falla
  //el error lo capturo en el catch
  .catch((error) => console.log(error));
