import productsList from "./products.json" assert { type: "json" };
import orderBy from "../node_modules/lodash/fp/orderBy";

export function productsListComponent() {
  const section = document.createElement("section");
  section.style.border = "solid 1px #ccc";
  section.style.padding = "10px";

  const list = document.createElement("ul");

  productsList.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.title} - $${product.price}`;
    list.appendChild(listItem);
  });

  section.appendChild(list);

  return section;
}
