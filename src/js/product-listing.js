import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

// Get the category from the URL and display it
const categoryParam = getParam("category");
document.getElementById("product-category").innerHTML = categoryParam.replace("-", " ");

// Set up services and product list
const services = new ExternalServices();
const element = document.querySelector(".product-list");
const listing = new ProductList(categoryParam, services, element);

// Initialize the product list
listing.init();
