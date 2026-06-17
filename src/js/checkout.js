import ExternalServices from "./ExternalServices.mjs";
import CheckoutProcess from "./checkoutProcess.mjs";
import ShoppingCart from "./ShoppingCart.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ExternalServices();
const checkoutProcess = new checkoutProcess(dataSource);
checkoutProcess.displayOrderSummary();

const Cart = new ShoppingCart (document.querySelector(".product-list"));
ShoppingCart.init();

document.getElementById("checkoutForm").addEventListener("submit", evt => {
    evt.preventDefault();
    checkoutProcess.checkout(evt.target)

});


/*
import ExternalServices from "./ExternalServices.mjs";
import ShoppingCart from "./ShoppingCart.mjs";
import CheckoutProcess from "./checkoutProcess.mjs";   // <-- make sure this file exists
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ExternalServices();
const checkoutProcess = new CheckoutProcess(dataSource);
checkoutProcess.displayOrderSummary();

const cart = new ShoppingCart(document.querySelector(".product-list"));
cart.init();

document.getElementById("checkoutForm").addEventListener("submit", evt => {
  evt.preventDefault();
  checkoutProcess.checkout(evt.target);
});
*/