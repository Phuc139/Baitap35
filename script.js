const products = [
    { name: "Bàn phím cơ", price: "1.850.000 đ" },
    { name: "Chuột không dây", price: "890.000 đ" },
    { name: "Tai nghe Bluetooth", price: "1.290.000 đ" },
    { name: "Màn hình 24 inch", price: "3.150.000 đ" },
    { name: "SSD 1TB", price: "1.750.000 đ" },
    { name: "Giá đỡ laptop", price: "320.000 đ" }
];

const searchInput = document.getElementById("searchInput");
const productGrid = document.getElementById("productGrid");
const statusMessage = document.getElementById("statusMessage");

function renderProducts(list = products) {
    productGrid.innerHTML = "";

    if (list.length === 0) {
        statusMessage.textContent = "Không tìm thấy sản phẩm nào!";
        return;
    }

    statusMessage.textContent = "Tìm thấy " + list.length + " sản phẩm.";

    for (const item of list) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `;
        productGrid.appendChild(card);
    }
}

searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const filtered = [];

    for (const item of products) {
        if (item.name.toLowerCase().includes(keyword)) {
            filtered.push(item);
        }
    }

    renderProducts(filtered);
});

renderProducts(products);
