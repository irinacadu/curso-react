const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos";
/**
 * Fetch API con promises
 *
 * FetchApi : proporciona una interfaz para recuperar recursos a través de la red
 *
 * Promises: objeto que puede estar disponible a futuro o no
 *
 * .then espera a que se vaya realizando la conexión e ir obteniendo datos para ejecutar la siguiente línea
 */

// Sin función
fetch(url) // me conecto
  .then((response) => {
    // si obtengo una respuesta la quiero en formato json
    if (response.ok) {
      return response.json();
    }
    throw new Error("Ha habido un error"); // si no es error de red saltará aquí
  })
  .then((data) => {
    // una vez tenga la respuesta me muestras los datos
    //console.log(data);
  })
  .catch((error) => {
    // si hay un error me lo muestras siempre y cuando hayan problemas de red y no se pueda conectar
    //console.log(error);
  });

// Con función
const getData = () => {
  fetch(url) // me conecto
    .then((response) => {
      // si obtengo una respuesta la quiero en formato json
      if (response.ok) {
        return response.json();
      }
      throw new Error("Ha habido un error"); // si no es error de red saltará aquí
    })
    .then((data) => {
      // una vez tenga la respuesta me muestras los datos
      //console.log(data);
    })
    .catch((error) => {
      // si hay un error me lo muestras siempre y cuando hayan problemas de red y no se pueda conectar
      // console.log(error);
    });
};

/**
 * Async Await
 *
 * El await se utiliza para esperar a que se pueda realizar la conexión y obtener respuesta.
 * Esto es, que esperan a que se termine de ejecutar el código anterior para poder ir a la siguiente línea.
 * Los .then se sustituyen por los await
 */

const consultarApi = async () => {
  try {
    const response = await fetch(url); // esperamos a que se realice la conexión con la api

    if (!response.ok) {
      throw new Error("hubo un error");
    }
    const data = await response.json(); // una vez obtenemos la respuesta la devolvemos como json.
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
consultarApi();

// Podemos medir la performance y multiple async await. Se utiliza para medir que versión del codigo es mas rapida

const consultarApiPerformance = async () => {
  // en el siguiente código el segundo fetch tiene que esperar al primero lo que provocará que la app se mas lenta. Esto se puede utilizar
  // si por ejemplo la segunda consulta depende de la primera

  try {
    const inicio = performance.now(); // marcamos el inicio de la medición
    const response = await fetch(url);
    const response2 = await fetch(url2);

    if (!response.ok || !response2.ok) {
      throw new Error("hubo un error");
    }
    const data = await response.json();
    const data2 = await response2.json();
    console.log("data",data)
    console.log("data2",data2)

    const fin = performance.now(); // marcamos el fin de la medición
    console.log(`el resultado de la primera función es ${fin - inicio}ms`);
  } catch (error) {
    console.log(error);
  }
};
consultarApiPerformance();

const consultarApi2 = async () => {
  try {
    const inicio = performance.now(); // marcamos el inicio de la medición

    const [response, response1] = await Promise.all([fetch(url), fetch(url2)]); // en este fecth creamos un array de peticiones que se van a ejecutar a la vez. Esto se puede hacer si las consultas son independientes

    if (!response.ok || !response1.ok) {
      throw new Error("hubo un error");
    }
    const [data, data1] = await Promise.all([
      response.json(),
      response1.json(),
    ]);

    const fin = performance.now(); // marcamos el fin de la medición
    console.log(`el resultado de la segunda función es ${fin - inicio}ms`);
  } catch (error) {
    console.log(error);
  }
};

consultarApi2();
