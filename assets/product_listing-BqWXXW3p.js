import"./modulepreload-polyfill-B5Qt9EMX.js";import{r as s,l as c,a as o}from"./utils-CKKDAKEt.js";import{E as n}from"./ExternalServices-DOc4n1FO.js";function l(t){return`
    <li class="product-card">
      <a href="/product_pages/?product=${t.Id}">
        <img src="${t.Images.PrimaryMedium}" alt="${t.Name}">
        <h3>${t.Brand.Name}</h3>
        <p>${t.NameWithoutBrand}</p>
        <p class="product-card__price">$${t.FinalPrice}</p>
      </a>
    </li>
    `}class m{constructor(e,a,i){this.category=e,this.dataSource=a,this.listElement=i}async init(){const e=await this.dataSource.getData(this.category);this.renderList(e),document.querySelector(".title").textContent=this.category}renderList(e){s(l,this.listElement,e)}}c();const r=o("category");document.getElementById("product-category").innerHTML=r.replace("-"," ");const d=new n,u=document.querySelector(".product-list"),p=new m(r,d,u);p.init();
