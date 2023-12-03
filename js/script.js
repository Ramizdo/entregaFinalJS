const titulo = document.getElementById("titulo");
const slogan = document.getElementById("slogan");
const containerCard = document.getElementById("containerCard");

titulo.textContent = "Tienda Online"
slogan.textContent = "Bienvenidos a tu tienda de Jockey's favorita"

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

function cargarProductos() {
    if (productos.length > 0) {
        productos.forEach((producto) => containerCard.innerHTML += armarCardHTML(producto))
    } else {
        containerCard.innerHTML = armarCardError()
    }
}

cargarProductos()