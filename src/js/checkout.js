import ExternalServices from "./ExternalServices.mjs";
import ShoppingCart from "./ShoppingCart.mjs";
import checkoutProcess from "./CheckoutProcess.mjs";
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

