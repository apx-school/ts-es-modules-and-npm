export function headerComponent() {
  const header = document.createElement("header");
  header.innerHTML = "<h1>Productos disponibles</h1>";
  header.style.border = "solid 3px black";
  header.style.padding = "12px";
  return header;
}
