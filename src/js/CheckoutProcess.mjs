import { getLocalStorage } from "./utils.mjs";

function packageItems(items) {
   console.log(items);
   return items.map(i => ({
    id: i.Id,
    name: i.Name,
    price: i.Price,
    quantity: 1,

  }));
     
}

// takes a form element and returns an object where the key is the "name" of the form input.
function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}


export default class CheckoutProcess {
  constructor(dataSource) {
    this.dataSource = dataSource;

    this.items = getLocalStorage("so-cart");


    this.subtotal = this.items.reduce((total, items) =>
        total += item.FinalPrice, 0
      )

    this.tax = Number.parseFloat(this.subtotal * 0.06).toFixed();

    this.Shipping = this.Items.length > 0 ? (10 + 2 * (this.Items.length - 1)) : 0;

    this.total = (this.subtotal * 1) + (this.tax * 1) + (this.Shipping * 1);


    this.summary =  

              <div>Items: <spin  id="numberItems">this.Items</spin></div>,
              <div>Subtotal: <spin  id="cartTotal">$$(this.Subtotal)</spin></div>,
              <div>Tax: <spin  id="tax"></spin>$$(this.Tax)</div>,
              <div>Shipping: </div>, <div id="shipping">$$(this.Shipping)</div>,
              <div>Total: <spin  id="total"></spin>$$(this.total)</div>;


    document.getElementById("orderSummary").innerHTML = summary; 

  }

  
  displayOrderSummary() {
    
          
               
  }

  async checkout(form) {
    const checkoutPayLoad = formDataToJSON(form);
    checkoutPayload.orderDate = new Date().toISOString();
    checkoutPayload.items = packageItems(this.items);
    checkoutPayload.total = this.total;
    checkoutPayload.Shipping = this.Shipping;
    checkoutPayload.tax = this.tax

    return this.dataSource.checkout(checkoutPayLoad);
    

  }
    
}



/*
  // takes a form element and returns an object where the key is the "name" of the form input.
function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

*/


/*
// takes a form element and returns an object where the key is the "name" of the form input.
function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}
*/



/*
export default class CheckoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.itemTotal = 0;
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }

  init() {
    this.list = getLocalStorage(this.key);
    this.calculateItemSummary();
  }

  calculateItemSubTotal() {
    // calculate and display the total dollar amount of the items in the cart, and the number of items.
    
  }

  calculateOrderTotal() {
    // calculate the tax and shipping amounts. Add those to the cart total to figure out the order total
    this.tax = (this.itemTotal ...)
    this.shipping =
    this.orderTotal =

    // display the totals.
    this.displayOrderTotals();
  }

  displayOrderTotals() {
    // once the totals are all calculated display them in the order summary page
    const tax = document.querySelector(`${this.outputSelector} #tax`);


    tax.innerText = `$${this.tax.toFixed(2)}`;
  }
}

*/