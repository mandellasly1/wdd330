export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    // Get all products from the data source
    const products = await this.dataSource.getData();

    // Filter products by category (if your JSON already separates by file, this may be optional)
    const filteredProducts = products.filter(
      (product) => product.category === this.category
    );

    // Render the product list
    this.renderList(filteredProducts);
  }

  renderList(products) {
    // Clear the list element first
    this.listElement.innerHTML = "";

    // Loop through products and create cards
    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <h3>${product.name}</h3>
        <img src="${product.image}" alt="${product.name}" />
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <a href="product.html?product=${product.id}">View Details</a>
      `;

      this.listElement.appendChild(card);
    });
  }
}
