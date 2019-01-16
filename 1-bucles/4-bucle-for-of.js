// ej 4
// crea un array con la gente mayor de 25 años.
// y muéstralo por consola.
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of

/**
 * Solución: 
 * 
 * 1- Es buena practica que los objetos se declaren como constantes a no ser que queramos asociarlos a una referencia
 * diferente. Es decir, cuando una variable no almacena un tipo básico en JS (number, string, boolean, undefined) lo
 * que realmente almacena es una referencia a memoria. Si no plateamos modificar el valor de dicha referencia lo mejor
 * es declara la variable con 'const' en vez de con 'let'. De esta forma te asegurars que la referencia no cambia y 
 * siempre apuntas al objeto original. Hay que pensar que aqui, lo que mantienes como constante, es la referencia a 
 * memoria, no los valores referenciados; en este caso, cada uno de los elementos del array. Los valores referenciados
 * puden ser cambiados sin ningun problema
 */

const gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]

/**
 * 2- Para entender el bucle for .. of lo mejor es compararlos con la solución del bucle for de toda la vida. 
 * ¿Como sería esta solución si utilizáramos el bucle for con indices? Sería algo así:
 */

 const result = [];
 const leng = gente.length;

 for (let i = 0; i < leng; i++) {
     if (gente[i].edad > 25) {
         result.push(gente[i]);
     }
 }

 console.log('Resultado del bucle for: ',result);

 /**
  * Como vemos aquí estamos recorriendo el array de gente por su indice. Sacamos la longitud del array y creamos
  * un indice que vaya desde 0 hasta el máximo de la longitud del array para ir accediendo, uno a uno, a cada
  * uno de los valores que existe en el array.
  * 
  * Sin embargo existe otra manera de resolver este ejercicio sin la necesidad de tener que declarar un indice.
  * A la hora de la verdad, la gran mayoría de los bucles for que se programan, se usas para recorrer arrays. Es
  * por eso que en JS se ha creado un tipo de bucle que, en vez de instanciar un indice, instancia una variable 
  * que almacena todos y cada uno de los valores del array en cada interación del bucle
  */

  const result2 = [];

  for (const persona of gente) {
      /**
       * Aqui, declaramos la constante persona que toma como valor cada uno de los elementos de gente.
       * Este bucle es identico que el anterior solo que ahora persona === gente[i]. 
       * Como en el bucle anterior, este código se ejecutara tantas veces como elementes haya dentro de gente
       * (vamos, la longitud de gente). La constante persona se crea y se destruye en cada iteración tomando como
       * valores cada uno de los elementos de gente. 
       * 
       * Así pues, en la primera iteración del bucle, persona valdrá:
       * {
       *   nombre: 'Jamiro',
       *   edad: 45
       * }
       * 
       * En la segunda:
       * {
       *  nombre: 'Juan',
       *  edad: 35
       * }
       * 
       * y asi sucesivamente
       */

        if (persona.edad > 25) {
            result2.push(persona);
        }
  }

  console.log('Resultado del bucle for .. of: ', result2);

  /**
   * Para mas información sobre el bucle for .. of se puede visitar la web de mdn https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...of
   */