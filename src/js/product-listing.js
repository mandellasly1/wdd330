import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import ProductList from "./ProductList.mjs";
import {loadHeaderFooter, getParam } from "./utils.mjs";


loadHeaderFooter();

document.getElementById("product-category").innerHTML = category.replace (
  "-",
   
  " ", 

);

const category = getParam("category");
const dataSource = new ProductData();
const productList = new ProductList (

  "Tents", 
  dataSource, 
  document.querySelector(".product-list"),

);

const category = getParam("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);


productList.init();


