/* 
  27) Programa una clase llamada Pelicula.
  La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.

  Todos los datos del objeto son obligatorios.
  
  Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  Valida que el título no rebase los 100 caracteres.
  Valida que el director no rebase los 50 caracteres.
  Valida que el año de estreno sea un número entero de 4 dígitos.
  Valida que el país o paises sea introducidos en forma de arreglo.
  Valida que los géneros sean introducidos en forma de arreglo.
  Valida que los géneros introducidos esten dentro de los géneros aceptados*.
  Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
  Crea un método estático que devuelva los géneros aceptados*.
  Crea un método que devuelva toda la ficha técnica de la película.

  A partir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

  * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarId(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get ListaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  fichaTecnica() {
    return console.info(
      `Ficha técnica: \n 
      Título: "${this.titulo}". \n 
      Director: "${this.director}". \n 
      Año: "${this.estreno}". \n 
      País(es): "${this.pais.join("-")}" \n
      Género(s): "${this.generos.join("-")}" \n
      Calificación: "${this.calificacion}" \n 
      IMDB Id: "${this.id}"`
    );
  }

  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${Pelicula.ListaGeneros.join(", ")} `
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.log(`${propiedad} "${valor} está vacío"`);

    if (typeof valor !== "string")
      return console.log(
        `${propiedad} "${valor}" ingresado, no es una cadena de texto`
      );

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`
      );

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.log(`${propiedad} "${valor} está vacío"`);

    if (typeof valor !== "number")
      return console.log(`${propiedad} "${valor} no es un número"`);

    return true;
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno)) {
      if (!/^([0-9]{4})$/.test(estreno)) {
        return console.error(
          `El año de estreno ${estreno} no es válido. Debe ser un número de 4 dígitos.`
        );
      }
    }
  }

  validarId(id) {
    if (this.validarCadena("IMDB Id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.error(
          `El IMDB id ${id} no es válido. Debe tener 9 caracteres, los dos primeros letras minúsculas, y los 7 restantes números`
        );
      }
    }
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.log(`${propiedad} "${valor} está vacío"`);

    if (!(valor instanceof Array))
      return console.log(`${propiedad} "${pais}" ingresado no es un arreglo`);

    if (valor.length === 0)
      return console.log("No se puede ingresar una lista de países vacía");

    for (const element of valor) {
      if (typeof element !== "string")
        return console.log(
          "Alguno de los elementos del arreglo no es una cadena de texto. Lista de países incorrecta."
        );
    }

    return true;
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo)) {
      this.validarLongitudCadena("Título", titulo, 100);
    }
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  validarPais(pais) {
    this.validarArreglo("País", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (const genero of generos) {
        if (!Pelicula.ListaGeneros.includes(genero)) {
          console.error(`Géneros incorrectos: "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.error(
            `La calificación "${calificacion} no es un número válido"`
          )
        : (this.calificacion = calificacion.toFixed(1));
  }
}

const pelis = [
  {
    id: "tt9546584",
    titulo: "Interestelar",
    director: "Cristopher Nolan",
    estreno: 2014,
    pais: ["EE..UU"],
    generos: ["Sci-Fi"],
    calificacion: 9.9,
  },
  {
    id: "tt9546584",
    titulo: "Interestelar",
    director: "Cristopher Nolan",
    estreno: 2014,
    pais: ["EE..UU"],
    generos: ["Sci-Fi"],
    calificacion: 9.9,
  },
  {
    id: "tt9546584",
    titulo: "Interestelar",
    director: "Cristopher Nolan",
    estreno: 2014,
    pais: ["EE..UU"],
    generos: ["Sci-Fi"],
    calificacion: 9.9,
  },
];

pelis.forEach((element) => {
  new Pelicula(element).fichaTecnica();
});
