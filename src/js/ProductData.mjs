function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}

init() 
  // Fetch the product by ID
  this.product = await this.datasource.findProductById(this.productId);

  // Render it
  this.renderProductDetails();

  // Add to cart listener
  document.getElementById('addToCart')
    .addEventListener('click', this.addProductToCart.bind(this));


