const quotes = [
	"ທີ່ຮັກແມ່ນທຸກສິ່ງຂອງເຮົາ, ແລະເຮົາຊີທີ່ຮັກຕະຫຼອດໄປ!",
	"ຮັກມາກກກກກກກກກກກກກກ 💕",
	"ທີ່ຮັກແມ່ນສິ່ງທີ່ດີທີ່ສຸດໃນຊີວິດຂອງເຮົາ",
	"ສຸກສັນວັນວາເລນໄທນ໌, ຮັກມາກກກກ💖",
	"ຮັກມາກກກກກກກ ❤️"
];

const images = ["img1.jpg", "img1.jpg","img1.jpg","img1.jpg","img1.jpg"];

let index = 0;

function changeQuote() {
	index = (index + 1) % quotes.length;
	document.getElementById("love-quote").textContent = quotes[index];
	document.getElementById("valentine-img").src = images[index];
}

// Calculate days together
const startDate = new Date("2023-12-24"); // ປ່ຽນຕາມວັນທີ່ເລີ່ມຄົບກັນ
const today = new Date();
const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
document.getElementById("days-together").textContent = daysTogether;
