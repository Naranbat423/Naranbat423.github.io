// Sample dataset with IDs
const products = [
    { id: 101, name: "Wireless Mouse", price: 25.99, availability: true },
    { id: 102, name: "Mechanical Keyboard", price: 79.99, availability: true },
    { id: 103, name: "USB-C Hub", price: 39.50, availability: false },
    { id: 104, name: "Gaming Headset", price: 59.99, availability: true },
    { id: 105, name: "Webcam HD", price: 45.00, availability: false },
    { id: 106, name: "Laptop Stand", price: 29.99, availability: true },
    { id: 107, name: "Portable SSD", price: 120.00, availability: true },
    { id: 108, name: "Bluetooth Speaker", price: 55.49, availability: false },
    { id: 109, name: "Smartwatch", price: 199.99, availability: true },
    { id: 110, name: "LED Desk Lamp", price: 34.75, availability: true }
];

// Container
const container = document.getElementById("productList");

// Loop through products
products.forEach(product => {

    const row = document.createElement("div");
    row.className = "grid md:grid-cols-4 gap-2 p-4 border-t border-gray-700 hover:bg-gray-800 transition";

    const statusText = product.availability ? "Available" : "Unavailable";
    const statusColor = product.availability ? "text-green-400" : "text-red-400";

    row.innerHTML = `
        <!-- Name -->
        <div class="text-blue-400 font-semibold text-lg md:text-base">
            ${product.name}
        </div>

        <!-- Price -->
        <div class="text-gray-300">
            $${product.price.toFixed(2)}
        </div>

        <!-- Status -->
        <div class="${statusColor} font-medium">
            ${statusText}
        </div>

        <!-- Button -->
        <div>
            <button 
                id="btn-${product.id}"
                class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg text-sm transition">
                Show ID
            </button>
        </div>
    `;

    container.appendChild(row);
});

// Add click events AFTER elements exist
products.forEach(product => {
    document
        .getElementById(`btn-${product.id}`)
        .addEventListener("click", () => {
            alert(`Product ID: ${product.id}`);
        });
});
