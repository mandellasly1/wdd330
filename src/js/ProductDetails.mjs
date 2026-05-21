import { setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // Fetch the product by ID
    this.product = await this.dataSource.findProductById(this.productId);

    // Render it
    this.renderProductDetails();

    // Add to cart listener
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addProductToCart.bind(this));
  }

  renderProductDetails() {
    const container = document.querySelector("#productDetails");
    if (!container) return;

    container.innerHTML = `
      <h2>${this.product.name}</h2>
      <img src="${this.product.image}" alt="${this.product.name}" />
      <p>${this.product.description}</p>
      <p>Price: $${this.product.price}</p>
      <button id="addToCart" data-id="${this.product.id}">Add to Cart</button>
    `;
  }

  addProductToCart() {
    setLocalStorage("so-cart", this.product);
  }
}
