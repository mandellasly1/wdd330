import ExternalServices from "./ExternalServices.mjs";
import ShoppingCart from "./ShoppingCart.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ExternalServices();
const checkoutProcess = new checkoutProcess(dataSource);
checkoutProcess.displayOderSummary();

const ShoppingCart = new ShoppingCart (document.querySelector(".product-list"));
ShoppingCart.init();

document.getElementById("checkoutForm").addEventListener("submit", evt => {
    evt.preventDefault();
    checkoutProcess.checkout(evt.target)

});