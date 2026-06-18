import ExternalServices from "./ExternalServices.mjs";
import ShoppingCart from "./ShoppingCart.mjs";
import checkoutProcess from "./CheckoutProcess";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ExternalServices();
const checkoutProcess = new CheckoutProcess(dataSource);
checkoutProcess.displayOderSummary();

const Cart = new ShoppingCart (document.querySelector(".product-list"));
ShoppingCart.init();

document.getElementById("checkoutForm").addEventListener("submit", evt => {
    evt.preventDefault();
    checkoutProcess.checkout(evt.target)

});



/*
import CheckoutProcess from "./CheckoutProcess.mjs";
*/