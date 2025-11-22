const API = "/products";

// ---------------------
// LOAD ALL PRODUCTS
// ---------------------
async function loadProducts() {
    const r = await fetch(API);
    const products = await r.json();

    const tbody = document.getElementById("table-body");
    tbody.innerHTML = "";

    products.forEach(p => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.value}</td>
            <td>
                <button onclick="editProduct('${p.id}', '${p.name}', '${p.value}')">Edit</button>
                <button onclick="deleteProduct('${p.id}')">Delete</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

// ---------------------
// CREATE PRODUCT
// ---------------------
document.getElementById("create").addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const value = document.getElementById("value").value;

    if(!name || !value){
        alert("Fill all fields");
        return;
    }

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, value })
    });

    loadProducts();
});

// ---------------------
// EDIT PRODUCT
// ---------------------
async function editProduct(id, oldName, oldValue) {

    const name = prompt("New name:", oldName);
    const value = prompt("New value:", oldValue);

    if(name === null || value === null) return; // cancelou

    await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, value })
    });

    loadProducts();
}

// ---------------------
// DELETE PRODUCT
// ---------------------
async function deleteProduct(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    loadProducts();
}

// FIRST LOAD
loadProducts();
