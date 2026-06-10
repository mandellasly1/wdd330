import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();



/*
import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import ProductList from "./ProductList.mjs";
import {loadHeaderFooter} from "./utils.mjs";


loadHeaderFooter();


const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const productList = new ProductList("Tents", dataSource, element);

productList.init();


// Create the data source
const dataSource = new ProductData("tents");

// Get productId from the URL query string
const productId = getParam("product");

// Create ProductDetails for that product
if (productId) {
  const productDetails = new ProductDetails(productId, dataSource);
  productDetails.init();
}

// Find the HTML element where the list should go
const listElement = document.querySelector("#productList");

// Create ProductList instance for tents category
const tentList = new ProductList("tents", dataSource, listElement);
tentList.init();

*/
