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
