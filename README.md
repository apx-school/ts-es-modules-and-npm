# Onboarding

Para entender la estructura de este proyecto es necesario analizar el package.json y el tsconfig.json en profundidad.

# package.json

En este caso tenemos solo dos devDependencies ya que estas dos se utilizan solo al momento de desarrollar. Al contrario de las dependencies que son dependencias necesarias para ejecutar este proyecto en un entorno productivo, o sea un entorno donde la aplicacion se ejecute de forma normal y sea accedida por usuarios reales.

Tanto `http-server` como `typescript` son dependencias que se usan al momento de desarrollar. Luego, al momento de usar esta aplicación en un servidor estas dependencias no son necesarias salvo para "compilar" el proyecto y tener todo listo para servirlo en un servidor web. Esto va a ser distinto cuando nos metamos en el backend y realmente usemos dependencias al momento de invocar nuestro programa.

Además tenemos 3 scripts, `dev`, `build` y `start`, que son clásicos de cualquier proyecto que necesite un proceso de compilación (o transpilación en este caso). `dev` nos servirá a la hora de desarrollar, ya que compila todos los archivos typescript y se queda escuchando por cambios. A la vez corre un servidor gracias al paquete `http-server` para que podamos ver nuestro código en acción. `build` hace algo similar pero sin quedarse escuchando, esto es util cuando queremos compilarlo justo antes de subir todo a un servidor. y finalmente `start` corre el servidor web de forma normal para ser accedido por usuarios.

# tsconfig.json

En este caso lo único distinto es el valor de `module` y `moduleResolution` que nos permiten configurar como va a traducir TypeScript a cada import. Si estuvieramos en Node.js esto sería distinto ya que nos convendría usar `CommonJs` en vez de `ESNext`, para que node traduzca los `import` como `require` y funcione normalmente. En este caso es distinto porque lo único que entiende el navegador son `imports` y `exports` de ESModules y estos son más parecidos a los de TypeScript. Lo único a considerar es que en ESModules necesitamos indicarle la extensión del archivo y en TS no. Para eso aplicamos un pequeño hack explicado en el `src/index.ts`

Para enteder la importancia de esta configuración prueben cambiando el valor de `module` a `CommonJs` y observen el resultado en `dist/index.js`.

# Tip

Para entender como funciona ESModules en el contexto del navegador es muy útil observan el panel `Network` de la devtools y ver como van sucediendo los requests a los distintos archivos.

![image](https://github.com/apx-school/sd-l2-ts-esm-list/assets/1208547/47d8d238-8412-4427-8406-80e912daca5f)
