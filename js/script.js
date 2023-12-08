const carrito = recuperarCarrito();

const containerCard = document.querySelector("div#containerCard.container");
const btnCarrito = document.querySelector("img#imgCarrito.imgCarrito");
const inputBuscar = document.querySelector("input#inputBuscar");

btnCarrito.addEventListener("mousemove", () => {
    if (carrito.length > 0) {
        btnCarrito.title = `${carrito.length} producto(s) en el carrito.`;
    } else {
        btnCarrito.title = "0 produto(s) en el carrito.";
    }
})

btnCarrito.addEventListener("click", () => {
    if (carrito.length > 0) {
        location.href = "pages/carrito.html";
    } else {
        alert("No hay productos en el carrito");
    }
});

inputBuscar.addEventListener("search", () => {
    let param = inputBuscar.value.trim().toLowerCase();
    let productoABuscar = productos.filter((producto) => producto.nombre.toLowerCase().includes(param));
    console.table(productoABuscar);
});

function armarCardHTML(producto) {
    return `<div class="card">
                <img src="${producto.imagen}" class="card__img" alt="${producto.categoria}">
                <div class="card__body">
                    <h5 class="card__body__producto">${producto.nombre}</h5>
                    <p class="card__body__precio">$${producto.precio}</p>
                    <button id="${producto.id}" class="btn btn-primary">Agregar</button>
                </div>
            </div>`
}

function armarCardError() {
    return `<div class="card-error">
                <div class="card-error__img">🤦🏻‍♂️</div>
                <div class="card-error__mensaje1">No pudimos cargar los productos</div>
                <div class="card-error__mensaje2">Intenta nuevamente mas tarde.</div>
            </div>`
}

function agregarClickABtnCards() {
    const btnAgregar = document.querySelectorAll("button.btn.btn-primary");
    if (btnAgregar.length > 0) {
        btnAgregar.forEach((boton) => {
            boton.addEventListener("click", () => {
                let productoSeleccinado = productos.find((producto) => producto.id === parseInt(boton.id))
                carrito.push(productoSeleccinado)
                localStorage.setItem("miCarrito", JSON.stringify(carrito))
            });
        })
    }
}

function cargarProductos() {
    if (productos.length > 0) {
        productos.forEach((producto) => containerCard.innerHTML += armarCardHTML(producto))
        agregarClickABtnCards()
    } else {
        containerCard.innerHTML = armarCardError()
    }
}

cargarProductos()