const cartItemsContainer = document.getElementById("cart-items-container");
const subtotalElement = document.getElementById("cart-subtotal");
const totalElement = document.getElementById("cart-total");

function renderCart() {
    const cart = JSON.parse(localStorage.getItem("vexora_cart")) || [];
    cartItemsContainer.innerHTML = "";
    
    let subtotal = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="text-center py-10 text-gray-400">Your cart is currently empty.</p>`;
        updateTotals(0);
        return;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const itemRow = document.createElement("div");
        itemRow.className = "grid grid-cols-4 items-center shadow-sm rounded-[4px] px-10 py-6 border border-gray-50 relative group";
        
        itemRow.innerHTML = `
            <div class="flex items-center gap-5">
                <div class="relative">
                    <img src="${item.img}" alt="${item.name}" class="w-12 h-12 object-contain">
                    <button onclick="removeItem(${index})" class="absolute -top-2 -left-2 bg-red-500 text-white rounded-full w-5 h-5 text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">✕</button>
                </div>
                <span class="font-medium text-sm">${item.name}</span>
            </div>
            <span class="text-center text-gray-700">$${item.price}</span>
            <div class="flex justify-center">
                <input type="number" value="${item.quantity}" min="1" 
                    onchange="updateQty(${index}, this.value)"
                    class="border border-gray-300 rounded-[4px] w-16 px-2 py-1 outline-none text-center" />
            </div>
            <span class="text-right font-medium">$${itemTotal}</span>
        `;
        cartItemsContainer.appendChild(itemRow);
    });

    updateTotals(subtotal);
}

function updateTotals(amount) {
    subtotalElement.textContent = `$${amount}`;
    totalElement.textContent = `$${amount}`; // Add shipping logic here if needed
}

// Global functions for the inline HTML attributes
window.updateQty = (index, val) => {
    let cart = JSON.parse(localStorage.getItem("vexora_cart"));
    cart[index].quantity = parseInt(val) || 1;
    localStorage.setItem("vexora_cart", JSON.stringify(cart));
    renderCart();
};

window.removeItem = (index) => {
    let cart = JSON.parse(localStorage.getItem("vexora_cart"));
    cart.splice(index, 1);
    localStorage.setItem("vexora_cart", JSON.stringify(cart));
    renderCart();
};

// Initial Load
document.addEventListener("DOMContentLoaded", renderCart);