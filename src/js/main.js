import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import ProductList from "./ProductList.mjs";



// Create the data source
const dataSource = new ProductData("tents.json");

// Get productId from the URL query string
const params = new URLSearchParams(window.location.search);
const productId = params.get("880RR");  // e.g. "880RR"

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




