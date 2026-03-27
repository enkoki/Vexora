import {today as products} from './data.js'
import { halfStar, fullStar, emptyStar } from './svg.js';

function renderStars(rating) {
	let html = "";
	for (let i = 1; i <= 5; i++) {
		if (rating >= i) html += fullStar;
		else if (rating + 0.5 === i) html += halfStar;
		else html += emptyStar;
	}
	return html;
}

export function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = ""; 

  products.forEach((product, index) => {
    const productHTML = document.createElement("div");
    productHTML.className = "pt-10 w-max group";

    productHTML.innerHTML = `
      <div class="w-[16.875rem] h-[15.625rem] bg-(--secondary) flex justify-center items-center rounded-[4px] relative overflow-hidden">
        <img src="${product.img}" class="relative bottom-2"/>
        <div class="add-to-cart absolute bottom-0 font-md bg-(--button) text-(--text) flex justify-center items-center w-full py-2 rounded-b-[4px] opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
          Add To Cart
        </div>
      </div>
      <div class="flex flex-col items-start justify-center gap-2 pt-4">
        <span class="font-medium">${product.name}</span>
        <span class="text-(--secondary2) font-medium flex gap-3">
          $${product.price} <span class="text-(--button)/50 line-through">$${product.oldPrice}</span>
        </span>
        <div class="flex gap-2">
          <div class="flex">${renderStars(product.rating)}</div>
          <span class="text-[14px] font-semibold text-(--text2)/50">(${product.reviews})</span>
        </div>
      </div>
    `;

    // const addToCartBtn = productHTML.querySelector(".add-to-cart");
    // addToCartBtn.addEventListener("click", () => {
    //   console.log(`Added ${product.name} to cart!`);
    // });

    container.appendChild(productHTML);
  });
}

const container = document.getElementById("product-list");
const scrollAmount = 350;

document.getElementById("nextCard").addEventListener("click", () => {
	container.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

document.getElementById("prevCard").addEventListener("click", () => {
	container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

