const web = {
  nombre: "linkedin",
  links: {
    enlace: "www.linkedin.com"
  },
  redesSociales: {
    youtube: {
      enlace: "youtube.com/linkedin",
      nombre: "linkedin yt"
    },
    instagram: {
      enlace: "instagram.com/linkedin",
      nombre: "linkedin in"
    }
  }
};

//primero accedo almacenandolo en una variable
const enlaceYT = web.redesSociales.youtube.enlace;
console.log(enlaceYT);

//ahora con destructuring objects
const { enlace, nombre } = web.redesSociales.instagram;
console.log(enlace);
console.log(nombre);
