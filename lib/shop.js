import { allProducts } from './allProducts.js';
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

function renderShop() {
    const grid = document.getElementById("shop-grid");
    if (!grid) return;

    const cart = JSON.parse(localStorage.getItem("vexora_cart")) || [];

    grid.innerHTML = allProducts.map(product => {
        const alreadyInCart = cart.some(item => item.name === product.name);
        
        return `
            <div class="group flex flex-col">
                <div class="aspect-square bg-[#F5F5F5] rounded-[4px] flex justify-center items-center relative overflow-hidden">
                    <img src="${product.img}" alt="${product.name}" class="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300">
                    
                    <button 
                        onclick="toggleCart('${product.name}')"
                        id="btn-${product.id}"
                        class="cursor-pointer absolute bottom-0 w-full py-3 text-center font-medium transition-all duration-300 translate-y-full group-hover:translate-y-0 
                        ${alreadyInCart ? 'bg-gray-500 text-white' : 'bg-black text-white'}">
                        ${alreadyInCart ? 'Remove From Cart' : 'Add To Cart'}
                    </button>
                </div>

                <div class="pt-4 flex flex-col gap-2">
                    <h3 class="font-bold text-base truncate">${product.name}</h3>
                    <div class="flex gap-3 items-center">
                        <span class="text-[#DB4444] font-medium">$${product.price}</span>
                        <span class="text-gray-400 line-through text-sm">$${product.oldPrice}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="flex">${renderStars(product.rating)}</div>
                        <span class="text-xs text-gray-400 font-semibold">(${product.reviews})</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

window.toggleCart = (productName) => {
    let cart = JSON.parse(localStorage.getItem("vexora_cart")) || [];
    const product = allProducts.find(p => p.name === productName);
    const index = cart.findIndex(item => item.name === productName);

    if (index !== -1) {
        cart.splice(index, 1);
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("vexora_cart", JSON.stringify(cart));
    renderShop(); 
};

document.addEventListener("DOMContentLoaded", renderShop);