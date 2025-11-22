const API = fetch(http://localhost:8080/products);

async function load() {
    const r = await fetch(API);
    const products = await r.json();

    const list = document.getDocumentById("list");
    list.innerHTML = "";

    products.forEach(t = {
    const li = document.createElement("li");
    li.textContent = t.description;
    list.appendChild(li);
    });


}

document.getElementById("add").addEventListener("click", async () => {
    const text = document.getElementById("texto").value;
    await fetch(API, {
    method: POST,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify{ description: text })
    });

    load();
}

load();