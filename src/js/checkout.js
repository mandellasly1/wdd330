import ExternalServices from "./ExternalServices.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ExternalServices();
const CheckoutProcess = new CheckoutProcess(dataSource);
CheckoutProcess.displayOderSummary();

const Cart = new ShoppingCart (document.querySelector(".product-list"));
ShoppingCart.init();

document.getElementById("checkoutForm").addEventListener("submit", evt => {
    evt.preventDefault();
    CheckoutProcess.checkout(evt.target)

});



/*
import CheckoutProcess from "./CheckoutProcess.mjs";
*/