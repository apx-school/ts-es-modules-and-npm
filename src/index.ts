/*
En ESModules hay que invocar al archivo con su extensión
Esto es necesario ya que esto ocurre en el navegador
y no puede ir adivininando si /header es un archivo js
o una carpeta con un index.js dentro. Debería hacer muchas
llamadas para saberlo y en el navegador esto es costoso.

Esto de importar un archivo con extensión .js es un 'hack'
ya que TS ignora esto de la extensión 
(De hecho header.js no existe en esta carpeta, el que existe es header.ts)
Esto lo hacemos para que cuando compile a index.js el import quede igual y encuentre header.js
Observen el dist/index.js
*/

import { headerComponent } from "./header.js";
import { productsListComponent } from "./products.js";

document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header");
  const productsContainer = document.getElementById("products");
  headerContainer.appendChild(headerComponent());
  productsContainer.appendChild(productsListComponent());
});
