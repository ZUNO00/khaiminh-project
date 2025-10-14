
// Menu toggle cho mobile
document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Hiệu ứng scroll fade-in
const fadeElements = document.querySelectorAll('.fade-in');
const fadeOnScroll = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', fadeOnScroll);
fadeOnScroll();

// Dữ liệu sản phẩm động
const products = [
  { name: "Universe", img: "https://via.placeholder.com/200x200?text=Universe", desc: "Bộ học tập sáng tạo cho trẻ.", price: "499.000đ" },
  { name: "Genie", img: "https://via.placeholder.com/200x200?text=Genie", desc: "Giúp trẻ phát triển tư duy logic.", price: "399.000đ" },
  { name: "Pioneer", img: "https://via.placeholder.com/200x200?text=Pioneer", desc: "Khám phá thế giới toán học.", price: "599.000đ" },
  { name: "Chess Set", img: "https://via.placeholder.com/200x200?text=Chess+Set", desc: "Trò chơi rèn luyện trí tuệ.", price: "299.000đ" },
  { name: "Smart Kit", img: "https://via.placeholder.com/200x200?text=Smart+Kit", desc: "Học vui cùng VieLinKit.", price: "459.000đ" },
];

// Render sản phẩm
const productContainer = document.getElementById('product-list');
products.forEach(p => {
  const card = document.createElement('div');
  card.className = "bg-white text-gray-800 rounded-2xl p-5 shadow-lg hover:scale-105 transition transform";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}" class="rounded-xl mx-auto mb-4">
    <h3 class="font-bold text-xl mb-2">${p.name}</h3>
    <p class="text-sm mb-3">${p.desc}</p>
    <p class="font-semibold text-orange-500 mb-3">${p.price}</p>
    <button class="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition">Mua ngay</button>
  `;
  productContainer.appendChild(card);
});

