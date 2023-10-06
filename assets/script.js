const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];



// fleches gauche//

const leftarrow = document.querySelector(".arrow_left");
const rightarrow = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");
let tagLine = document.querySelector("#banner p");
let imageElement = document.querySelector(".banner-img");

let currentSlideIndex = 0;

leftarrow.addEventListener("click", function (){
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	updateSlide();
	updateDots();
});

rightarrow.addEventListener("click", function (){
	currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	updateSlide();
	updateDots();
});

function updateSlide() {
	const currentSlide = slides[currentSlideIndex];
	imageElement.src = "./assets/images/slideshow/" + currentSlide.image;
	tagLine.innerHTML = currentSlide.tagLine;
};

function updateDots() {
	dots.forEach(dot=> dot.classList.remove("dot_selected"));
	dots[currentSlideIndex].classList.add("dot_selected");
};

updateSlide();
updateDots();
