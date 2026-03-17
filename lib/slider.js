const slides = [
	{
		title: "iPhone 14 Series",
		image: "./public/carousel/1.png",
		logo: "./public/carousel/logos/1.svg",
	},
	{
		title: "ASUS FHD Gaming Laptop",
		image: "./public/carousel/2.png",
		logo: "./public/carousel/logos/2.svg",
	},
	{
		title: "Playstation 5",
		image: "./public/carousel/3.png",
		logo: "./public/carousel/logos/3.svg",
	},
	{
		title: "Jr. Zoom Soccer Cleats",
		image: "./public/carousel/4.png",
		logo: "./public/carousel/logos/4.svg",
	},
	{
		title: "IPS LCD Gaming Monitor",
		image: "./public/carousel/5.png",
		logo: "./public/carousel/logos/5.svg",
	},
];

let current = 0;

const image = document.getElementById("hero-slider-img");
const title = document.getElementById("hero-slider-title");
const logoContainer = document.getElementById("hero-slider-logo");
const dotsContainer = document.getElementById("hero-slider-dots");

slides.forEach((_, i) => {
	const dot = document.createElement("div");
	dot.className = "inactive-dot";
	dot.addEventListener("click", () => {
		current = i;
		updateSlider();
	});

	dotsContainer.appendChild(dot);
});

const dots = dotsContainer.children;

export function updateSlider() {
	const slide = slides[current];

	image.src = slide.image;
	title.textContent = slide.title;

	logoContainer.innerHTML = `
    <img src="${slide.logo}" class="w-10 h-10 object-contain" />
    <span>${slide.title}</span>
  `;

	for (let i = 0; i < dots.length; i++) {
		dots[i].className = "inactive-dot";
	}

	dots[current].className = "active-dot";
}

function nextSlide() {
	current = (current + 1) % slides.length;
	updateSlider();
}

setInterval(nextSlide, 4000);
