import { today as products } from './data.js';
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
    if (!container) return; 
    container.innerHTML = "";

    // 1. Helper function to check if item is in cart
    const isInCart = (name) => {
        const cart = JSON.parse(localStorage.getItem("vexora_cart")) || [];
        return cart.some(item => item.name === name);
    };

    products.forEach((product) => {
        const productHTML = document.createElement("div");
        productHTML.className = "pt-10 w-max group";

        // Check current status for initial render
        const alreadyAdded = isInCart(product.name);

        productHTML.innerHTML = `
      <div class="w-[16.875rem] h-[15.625rem] bg-(--secondary) flex justify-center items-center rounded-[4px] relative overflow-hidden">
        <img src="${product.img}" class="relative bottom-2"/>
        <div class="add-to-cart absolute bottom-0 font-md flex justify-center items-center w-full py-2 rounded-b-[4px] opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer 
            ${alreadyAdded ? 'bg-gray-500 text-white' : 'bg-(--button) text-(--text)'}">
          ${alreadyAdded ? 'Remove From Cart' : 'Add To Cart'}
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

        const addToCartBtn = productHTML.querySelector(".add-to-cart");
        
        addToCartBtn.addEventListener("click", () => {
            let cart = JSON.parse(localStorage.getItem("vexora_cart")) || [];
            const index = cart.findIndex(item => item.name === product.name);

            if (index !== -1) {
                // --- REMOVE LOGIC ---
                cart.splice(index, 1);
                // UI Update
                addToCartBtn.innerText = "Add To Cart";
                addToCartBtn.classList.remove("bg-gray-500");
                addToCartBtn.classList.add("bg-(--button)");
            } else {
                // --- ADD LOGIC ---
                cart.push({
                    name: product.name,
                    price: product.price,
                    img: product.img,
                    quantity: 1
                });
                // UI Update
                addToCartBtn.innerText = "Remove From Cart";
                addToCartBtn.classList.remove("bg-(--button)");
                addToCartBtn.classList.add("bg-gray-500"); // Change to whatever color you like
            }

            localStorage.setItem("vexora_cart", JSON.stringify(cart));
        });

        container.appendChild(productHTML);
    });
}

// Slider Logic
const productContainer = document.getElementById("product-list");
const scrollAmount = 350;

if (document.getElementById("nextCard")) {
    document.getElementById("nextCard").addEventListener("click", () => {
        productContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}

if (document.getElementById("prevCard")) {
    document.getElementById("prevCard").addEventListener("click", () => {
        productContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
}

// Initialize the products
renderProducts();