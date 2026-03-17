const products = [
	{
		name: "HAVIT HV-G92 Gamepad",
		price: 120,
		oldPrice: 160,
		img: "./assets/images/products/joystick.png",
		rating: 4.5,
		reviews: 88,
	},
	{
		name: "AK-900 Wired Keyboard",
		price: 960,
		oldPrice: 1160,
		img: "./assets/images/products/keyboard.png",
		rating: 4,
		reviews: 75,
	},
	{
		name: "Another Gamepad",
		price: 370,
		oldPrice: 400,
		img: "./assets/images/products/monitor.png",
		rating: 5,
		reviews: 99,
	},
	{
		name: "S-Series Comfort Chair ",
		price: 375,
		oldPrice: 400,
		img: "./assets/images/products/chair.png",
		rating: 4.5,
		reviews: 99,
	},
	{
		name: "ASUS FHD Gaming Laptop",
		price: 700,
		oldPrice: 990,
		img: "./assets/images/products/laptop.png",
		rating: 5,
		reviews: 325,
	},
	{
		name: "Jr. Zoom Soccer Cleats",
		price: 880,
		oldPrice: 1160,
		img: "./assets/images/products/copa.png",
		rating: 5,
		reviews: 35,
	},
];

const fullStar = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99981 1.83329C9.7507 1.83145 9.50619 1.90032 9.29466 2.0319C9.08313 2.16348 8.91327 2.35236 8.80481 2.57662L6.95314 6.32995L2.8098 6.93162C2.56336 6.96713 2.33178 7.07094 2.1413 7.23129C1.95081 7.39163 1.80903 7.60212 1.73202 7.83889C1.655 8.07567 1.64582 8.32929 1.70552 8.57101C1.76522 8.81274 1.89141 9.03292 2.0698 9.20662L5.0698 12.1283L4.36147 16.255C4.31934 16.5001 4.34661 16.7521 4.4402 16.9825C4.53379 17.213 4.68997 17.4126 4.89108 17.559C5.0922 17.7053 5.33024 17.7925 5.5783 17.8106C5.82635 17.8287 6.07454 17.7771 6.29481 17.6616L9.99981 15.7133V1.83329Z" fill="#FFAD33"/>
        <path d="M10 1.83595C10.2491 1.83404 10.5001 2.00001 10.5001 2.00001C10.5001 2.00001 11.0866 2.20807 11.1951 2.44195L13.0468 6.35634L17.1902 6.98383C17.4366 7.02086 17.6682 7.12912 17.8587 7.29635C18.0492 7.46358 18.191 7.68309 18.268 7.93003C18.345 8.17697 18.3542 8.44147 18.2945 8.69357C18.2348 8.94567 18.1086 9.1753 17.9302 9.35645L14.9301 12.4035L15.6385 16.7072C15.6806 16.9629 15.6533 17.2257 15.5598 17.466C15.4662 17.7064 15.31 17.9146 15.1089 18.0672C14.9077 18.2198 14.6697 18.3107 14.4216 18.3296C14.1736 18.3486 13.9254 18.2947 13.7051 18.1743L10 16.1423V1.83595Z" fill="#FFAD33"/>
    </svg>`;

const halfStar = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99981 1.83329C9.7507 1.83145 9.50619 1.90032 9.29466 2.0319C9.08313 2.16348 8.91327 2.35236 8.80481 2.57662L6.95314 6.32995L2.8098 6.93162C2.56336 6.96713 2.33178 7.07094 2.1413 7.23129C1.95081 7.39163 1.80903 7.60212 1.73202 7.83889C1.655 8.07567 1.64582 8.32929 1.70552 8.57101C1.76522 8.81274 1.89141 9.03292 2.0698 9.20662L5.0698 12.1283L4.36147 16.255C4.31934 16.5001 4.34661 16.7521 4.4402 16.9825C4.53379 17.213 4.68997 17.4126 4.89108 17.559C5.0922 17.7053 5.33024 17.7925 5.5783 17.8106C5.82635 17.8287 6.07454 17.7771 6.29481 17.6616L9.99981 15.7133V1.83329Z" fill="#FFAD33"/>
        <path d="M10 1.83595C10.2491 1.83404 10.5001 2.00001 10.5001 2.00001C10.5001 2.00001 11.0866 2.20807 11.1951 2.44195L13.0468 6.35634L17.1902 6.98383C17.4366 7.02086 17.6682 7.12912 17.8587 7.29635C18.0492 7.46358 18.191 7.68309 18.268 7.93003C18.345 8.17697 18.3542 8.44147 18.2945 8.69357C18.2348 8.94567 18.1086 9.1753 17.9302 9.35645L14.9301 12.4035L15.6385 16.7072C15.6806 16.9629 15.6533 17.2257 15.5598 17.466C15.4662 17.7064 15.31 17.9146 15.1089 18.0672C14.9077 18.2198 14.6697 18.3107 14.4216 18.3296C14.1736 18.3486 13.9254 18.2947 13.7051 18.1743L10 16.1423V1.83595Z" fill="black" opacity="0.25"/>
    </svg>`;

const emptyStar = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99981 1.83329C9.7507 1.83145 9.50619 1.90032 9.29466 2.0319C9.08313 2.16348 8.91327 2.35236 8.80481 2.57662L6.95314 6.32995L2.8098 6.93162C2.56336 6.96713 2.33178 7.07094 2.1413 7.23129C1.95081 7.39163 1.80903 7.60212 1.73202 7.83889C1.655 8.07567 1.64582 8.32929 1.70552 8.57101C1.76522 8.81274 1.89141 9.03292 2.0698 9.20662L5.0698 12.1283L4.36147 16.255C4.31934 16.5001 4.34661 16.7521 4.4402 16.9825C4.53379 17.213 4.68997 17.4126 4.89108 17.559C5.0922 17.7053 5.33024 17.7925 5.5783 17.8106C5.82635 17.8287 6.07454 17.7771 6.29481 17.6616L9.99981 15.7133V1.83329Z" fill="black" opacity="0.25"/>
        <path d="M10 1.83595C10.2491 1.83404 10.5001 2.00001 10.5001 2.00001C10.5001 2.00001 11.0866 2.20807 11.1951 2.44195L13.0468 6.35634L17.1902 6.98383C17.4366 7.02086 17.6682 7.12912 17.8587 7.29635C18.0492 7.46358 18.191 7.68309 18.268 7.93003C18.345 8.17697 18.3542 8.44147 18.2945 8.69357C18.2348 8.94567 18.1086 9.1753 17.9302 9.35645L14.9301 12.4035L15.6385 16.7072C15.6806 16.9629 15.6533 17.2257 15.5598 17.466C15.4662 17.7064 15.31 17.9146 15.1089 18.0672C14.9077 18.2198 14.6697 18.3107 14.4216 18.3296C14.1736 18.3486 13.9254 18.2947 13.7051 18.1743L10 16.1423V1.83595Z" fill="black" opacity="0.25"/>
    </svg>`;

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

