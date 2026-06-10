// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// get the product id from the query string
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product
}

export function renderListWithTemplate(template, parentElement, list, position = "afterbegin", clear = false) {
  const htmlStrings = list.map(template);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const footerTemplate = await loadTemplate("../partials/footer.html");

  const headerElement = document.querySelector("#main-header");
  const footerElement = document.querySelector("#main-footer");

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}


/*

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}


// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// get URL parameter by name
export function getParam(param) {
  const query = new URLSearchParams(window.location.search);
  return query.get(param);
}


export async function LoadTemplate(Path) {
  const res = await fetch(Path);
  if (res.ok) {
    return res.text();
  } else {
    throw new Error("Bad Response"); 
  }
}


export function loadHeaderFooter(headerPath, footerPath) {
  const header = await loadTemplate("../partials/header.html");
  const footer = await loadTemplate("../partials/footer.html");

  renderWithTemplate(header, document.getElementById("header"));
  renderWithTemplate(footer, document.getElementById("footer"));

}



export function renderWithTemplate(templatefn, parentElement, data, callback,) {
    parentElement.insertAdjacentHTML("afterbegin", template,)
    if (callback) {
      callback(data);
    }
  }

*/


/*
export function renderListWithTemplate(
  templatefn,
  parentElement,
  list,
  position = "afterBegin",
  clear = false,
)
  {
    if (clear) {
      parentElement.innerHTML = "";
    }
    const htmlList = list.map(templatefn);
    parentElement.insertAdjacentHTML(position, htmlList.join(""));
}
*/
