# Descripción

Este repo es una variante del repo https://github.com/apx-school/sd-l2-ts-esm-list donde usamos ESModules y TypeScript para organizar el proyecto. En este caso sumamos el uso de la librería `lodash` desde npm.

# Problema

A diferencia de Node.js el código JavaScript que corre en nuestro navegador necesita saber la ubicación exacta del archivo que intentemos importar utilizando ES Modules. Por esta razón cuando hacemos un import de un paquete instalado vía npm, necesitamos indicarlo la ruta completa hacia el archivo:

```ts
// products.ts
import orderBy from "../node_modules/lodash-es/orderBy.js";
```

En el caso de Node.js podemos hacer un import mucho más sencillo, ya que Node.js corre en el servidor y tiene acceso a todos los archivos del proyecto, por eso puede buscar e inferir que archivo queremos importar simplemente diciendole:

```ts
// En node haríamos
import orderBy from "lodash/orderBy";
```

En el servidor Node.js se encarga de saber que esto está en `node_modules` y que además el archivo es js o ts.

Además de señalar la ruta exacta, el archivo debe usar el método de exportación de ES Modules y no el de Node.js que es el clásico `module.exports` y `require`. Por esto es que en este ejempo usamos una versión de lodash llamada `lodash-es`.

# Requests

También podemos observar que al importar el paquete `orderBy` este a su vez invoca a otros archivos y esto genera una gran cantidad de requests al servidor para poder completar su misión. Cuando esto ocurre en Node.js no lo notamos ya que ocurre en el servidor y estas llamadas son muy rápidas ya que los archivos están en la misma ubicación. En el caso de ES Modules la instrucción de importar un paquete se evalua en el navegador y esto genera un request hacia el servidor donde se encuentre el archivo que buscamos. Recién cuando este archivo se descarga y se ejecuta es que el navegador puede volver a llamar a sus propios `imports` y esto termina generando una larga y lenta lista de dependencias que se cargan secuenciamente.
