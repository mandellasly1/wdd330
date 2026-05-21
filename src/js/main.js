import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import ProductList from "./ProductList.mjs";

// Create the data source
const dataSource = new ProductData("tents");

// Get productId from the URL query string
const productId = getParam("product");

// Create ProductDetails for that product
if (productId) {
  const productDetails = new ProductDetails(productId, dataSource);
  productDetails.init();
} else {
  console.error("No product ID found in URL");
}

// Find the HTML element where the list should go
const listElement = document.querySelector("#productList");

// Create ProductList instance for tents category
const tentList = new ProductList("tents", dataSource, listElement);
tentList.init();
