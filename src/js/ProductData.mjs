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
    this.path = "/json/tents.json${this.category}.json";
  }

  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }

  async findProductById(Id) {
    const products = await this.getData();
    // Make sure the property name matches your JSON structure
    return products.find((item) => item.Id === Id);
  }
}
