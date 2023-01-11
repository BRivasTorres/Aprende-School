const navScroll = document.querySelector("nav");
const faqs = document.querySelectorAll(".faq");
const icons = document.querySelectorAll(".faq__icon i");
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

window.addEventListener("scroll", () => {
	navScroll.classList.toggle("window-scroll", window.scrollY > 0);
});

const toggleFaq = (faq, icon) => {
	faq.classList.toggle("open");
	icon.className =
		icon.className === "fa-solid fa-plus"
			? "fa-solid fa-minus"
			: "fa-solid fa-plus";
};

faqs.forEach((faq, index) => {
	faq.addEventListener("click", () => toggleFaq(faq, icons[index]));
});

function toggleMenu() {
	menu.style.display = menu.style.display === "flex" ? "none" : "flex";

	closeBtn.style.display =
		closeBtn.style.display === "inline-block" ? "none" : "inline-block";

	menuBtn.style.display =
		menuBtn.style.display === "none" ? "inline-block" : "none";
}

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
