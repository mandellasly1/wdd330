import ExternalServices from "./ExternalServices.mjs";
import CheckoutProcess from "./checkoutProcess.mjs";
import ShoppingCart from "./ShoppingCart.mjs";
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




